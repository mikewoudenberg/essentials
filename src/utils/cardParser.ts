import { remark } from 'remark';
import remarkHtml from 'remark-html';
import type { ParsedCard } from '../types/card';

/**
 * Convert custom [text|slug] links to standard markdown [text](url) links
 */
function convertCustomLinks(markdown: string): string {
  // Convert [text|slug] to [text](/slug)
  return markdown.replace(/\[([^\]]+)\|([^\]]+)\]/g, '[$1](/$2)');
}

/**
 * Process markdown content using remark
 */
async function processMarkdown(markdown: string): Promise<string> {
  const processed = await remark()
    .use(remarkHtml, { sanitize: false })
    .process(markdown);
  return processed.toString();
}

/**
 * Parse card markdown content which has 3 sections separated by ---
 * 1. Title/Name
 * 2. Summary/Excerpt
 * 3. Full content
 */
export function parseCardContent(rawContent: string | undefined): ParsedCard & { contentHtmlPromise: Promise<string> } {
  if (!rawContent) {
    return {
      title: '',
      summary: '',
      content: '',
      contentHtml: '',
      contentHtmlPromise: Promise.resolve(''),
    };
  }

  const sections = rawContent.split('---\n').filter(s => s.trim());
  const contentMarkdown = sections[2]?.trim() || '';

  // Convert custom links before processing markdown
  const processedMarkdown = convertCustomLinks(contentMarkdown);

  return {
    title: sections[0]?.trim() || '',
    summary: sections[1]?.trim() || '',
    content: contentMarkdown,
    contentHtml: '', // Deprecated, use contentHtmlPromise
    contentHtmlPromise: processMarkdown(processedMarkdown),
  };
}
