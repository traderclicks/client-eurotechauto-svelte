<script lang="ts">
  import Meta from '$lib/components/Meta.svelte';
  import CognitoFormIframe from '$lib/components/CognitoFormIframe.svelte';
  import { site } from '$lib/config/site';
  import type { PageData as RouteData } from './$types';

  export let data: RouteData;
</script>

<!--
  Private, link-only page (W727): noindex, not in the sitemap, no nav link.
  The body is the Cognito form only — no heading or copy by design.
  Iframe embed (not Cognito's seamless script) so Cognito's own tags stay in
  their own origin and don't double-fire into the site's GA4.
-->
<Meta title={data.page.meta.title} description={data.page.meta.description} noindex />

<div class="page">
  <div class="container">
    <div class="content">
      <CognitoFormIframe formId={site.cognitoQuestionnaireFormId} title={data.page.meta.title} />
    </div>
  </div>
</div>

<style>
  .page {
    padding: var(--space-16) 0;
    min-height: 60vh;
  }

  .content {
    max-width: 800px;
    margin: 0 auto;
  }
</style>
