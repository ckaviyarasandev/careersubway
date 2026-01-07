<script>
  const navButtonStyle =
    "relative flex items-center gap-1 px-2 py-0.5 rounded-lg hover:bg-blue-100 transition border-none  after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 after:rounded-full after:transition-all after:duration-300 after:ease-out hover:after:w-3/4";
  const landingNavLink =
    "relative text-blue-700 px-2 py-0.5 rounded-md font-medium flex items-center justify-center gap-3 select-none transition-all duration-300";

  function gotoRoute(path) {
    window.location.assign(path);
  }
</script>

<nav
  class="px-4 py-0.5 sticky top-0 left-0 z-50 bg-white w-full flex items-center justify-between gap-6 border-b-2 border-indigo-300 shadow-md"
>
  <a
    href="/"
    class="flex items-center gap-3 px-4 py-0.5 rounded-lg underline-offset-4 hover:no-underline"
  >
    <img
      src="../../../assets/WebLogo.png"
      alt="Career Subway"
      class="h-10 w-10 rounded-lg"
    />

    <span
      class="text-xl font-extrabold tracking-wide
      bg-gradient-to-r from-indigo-600 to-blue-500
      bg-clip-text text-transparent"
    >
      Career Subway
    </span>
  </a>

  <div class="mt-2 flex items-center gap-2 justify-center">
    <button
      type="button"
      class={navButtonStyle}
      on:click={() => gotoRoute("/")}
    >
      <img src="/svg/home.svg" alt="Home" class="w-5 h-5" />
      <span class={landingNavLink}> Home </span>
    </button>
    <button
      type="button"
      class={navButtonStyle}
      on:click={() => gotoRoute("/resources")}
    >
      <img src="/svg/resources.svg" alt="Resources" class="w-5 h-5" />
      <span class={landingNavLink}> Resources </span>
    </button>
    <button
      type="button"
      class={navButtonStyle}
      on:click={() => gotoRoute("/landingPages/blog")}
    >
      <img src="/svg/blogs.svg" alt="Blogs" class="w-5 h-5" />
      <span class={landingNavLink}> Our Blogs </span>
    </button>
    <button
      type="button"
      class={navButtonStyle}
      on:click={() => gotoRoute("/landingPages/knowMoreUs")}
    >
      <img src="/svg/atsign.svg" alt="Know More Us" class="w-5 h-5" />
      <span class={landingNavLink}> Know More Us </span>
    </button>
    <button
      type="button"
      class={navButtonStyle}
      on:click={() => gotoRoute("/components/signup")}
    >
      <img src="/svg/swipe_right.svg" alt="Join With Us" class="w-5 h-5" />
      <span class={landingNavLink}> Join With Us </span>
    </button>
  </div>
</nav>
