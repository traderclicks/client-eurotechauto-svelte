<script lang="ts">
  import Meta from '$lib/components/Meta.svelte';
  import CognitoFormIframe from '$lib/components/CognitoFormIframe.svelte';
  import { site } from '$lib/config/site';
  import type { PageData as RouteData } from './$types';

  export let data: RouteData;
</script>

<!--
  Private, link-only page (W727): noindex + nofollow (meta and X-Robots-Tag),
  not in the sitemap, no nav link. Body is a page title plus the Cognito form.
  Iframe embed (not Cognito's seamless script) so Cognito's own tags stay in
  their own origin and don't double-fire into the site's GA4.
-->
<Meta title={data.page.meta.title} description={data.page.meta.description} noindex nofollow />

<div class="page-header">
  <div class="container">
    {#if data.page.title}<h1>{data.page.title}</h1>{/if}
  </div>
</div>

<div class="page">
  <div class="container">
    <div class="content">
      <CognitoFormIframe formId={site.cognitoQuestionnaireFormId} title={data.page.meta.title} />
    </div>
  </div>
</div>

<style>
  /* Mirrors TextPage.svelte (privacy/terms) so the page reads as one of the site's text pages. */
  .page-header {
    background: var(--bg-content);
    padding: var(--space-16) 0;
  }

  h1 {
    font-size: clamp(2.25rem, 5vw, 3.75rem);
    font-weight: var(--font-extrabold);
    line-height: 1.1;
    color: var(--text-heading);
    text-align: center;
  }

  .page {
    padding: var(--space-16) 0;
    min-height: 60vh;
  }

  .content {
    max-width: 800px;
    margin: 0 auto;
  }
</style>
