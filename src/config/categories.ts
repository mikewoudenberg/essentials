import type { Category } from '../types/card';

export const CATEGORY_COLORS: Record<Category, string> = {
  realisation: 'blue',
  craftsmanship: 'red',
  testing: 'green',
  collaboration: 'orange',
  other: 'indigo',
} as const;

export function getCategoryColor(category: string): string {
  return CATEGORY_COLORS[category as Category] || CATEGORY_COLORS.other;
}
