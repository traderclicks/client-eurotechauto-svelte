import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getPageWithPreview } from '$lib/cms/pages';

export const load: PageServerLoad = async ({ setHeaders }) => {
  const page = getPageWithPreview('questionnaire', false);
  if (!page) throw error(404, 'Page not found');

  // Private, link-only page: keep crawlers out at the HTTP level as well as
  // via the robots meta tag (Meta.svelte noindex/nofollow).
  setHeaders({ 'X-Robots-Tag': 'noindex, nofollow' });

  return { page };
};
