export interface ParsedCard {
  title: string;
  summary: string;
  content: string;
  contentHtml: string;
}

export interface CrumbItem {
  label: string;
  to?: string;
}

export type Category = 'realisation' | 'craftsmanship' | 'testing' | 'collaboration' | 'other';
