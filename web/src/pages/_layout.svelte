<script>
  import Footer from "./components/footer.svelte";
  import LandingNavBar from "./components/landingNavBar.svelte";
  import Navbar from "./components/navbar.svelte";

  let login = false;
</script>

<main>
  <header class="w-full sticky top-0 left-0">
    {#if login}
      <Navbar />
    {:else}
      <LandingNavBar />
    {/if}
  </header>

  <section style="min-height: 90vh;">
    <slot />
  </section>

  {#if !login}
    <footer class="w-full sticky top-0 left-0">
      <Footer />
    </footer>
  {/if}
</main>
