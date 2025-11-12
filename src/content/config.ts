import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cardsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './cards' }),
  schema: z.object({
    layout: z.string().optional(),
    category: z.string(),
    title: z.string().optional(),
    // Support both kebab-case and snake_case for backward compatibility
    'no-banner': z.boolean().optional(),
    'no_banner': z.boolean().optional(),
    'header-image': z.string().optional(),
  }).transform((data) => ({
    ...data,
    // Normalize to single field
    noBanner: data['no-banner'] ?? data['no_banner'] ?? false,
    headerImage: data['header-image'],
  })),
});

export const collections = {
  cards: cardsCollection,
};
