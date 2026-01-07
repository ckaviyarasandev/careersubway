<script>
  import WellcomePage from "./landingPages/wellcomePage.svelte";
  import DiscoverPage from "./landingPages/discoverPage.svelte";
  import KeyFeaturesPage from "./landingPages/keyFeaturesPage.svelte";
  import JoinWithUsPage from "./landingPages/joinUs.svelte";
  import UserDashboard from "./dashboard/index.svelte";

  let login = false;
</script>

<main>
  {#if login}
    <UserDashboard />
  {:else}
    <WellcomePage />
    <DiscoverPage />
    <KeyFeaturesPage />
    <JoinWithUsPage />
  {/if}
</main>
