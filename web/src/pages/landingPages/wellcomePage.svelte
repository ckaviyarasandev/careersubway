<script>
  import { fade, fly } from "svelte/transition";

  let titles = [
    "Your Personalized Roadmap to Academic and Career Success",
    "Empowering Paths to Excellence",
    "Tailored Strategies for Academic and Career Growth",
    "Customized Roadmaps to Achieve Your Goals",
  ];
</script>

<main
  class="min-h-screen flex flex-col items-center justify-center
         bg-gradient-to-b from-indigo-600 via-blue-600 to-blue-500
         text-white"
>
  <!-- Header -->
  <header class="max-w-4xl text-center px-6 py-16">
    <h1 class="text-5xl md:text-6xl font-extrabold leading-tight">
      Welcome to
      <span class="ml-2 inline-flex">
        <span class="inline-block animate-bounce [animation-delay:0ms]">C</span
        >
        <span class="inline-block animate-bounce [animation-delay:100ms]"
          >a</span
        >
        <span class="inline-block animate-bounce [animation-delay:200ms]"
          >r</span
        >
        <span class="inline-block animate-bounce [animation-delay:300ms]"
          >e</span
        >
        <span class="inline-block animate-bounce [animation-delay:400ms]"
          >e</span
        >
        <span class="inline-block animate-bounce [animation-delay:500ms]"
          >r</span
        >

        <span class="w-3"></span>

        <span class="inline-block animate-bounce [animation-delay:600ms]"
          >S</span
        >
        <span class="inline-block animate-bounce [animation-delay:700ms]"
          >u</span
        >
        <span class="inline-block animate-bounce [animation-delay:800ms]"
          >b</span
        >
        <span class="inline-block animate-bounce [animation-delay:900ms]"
          >w</span
        >
        <span class="inline-block animate-bounce [animation-delay:1000ms]"
          >a</span
        >
        <span class="inline-block animate-bounce [animation-delay:1100ms]"
          >y</span
        >
      </span>
    </h1>

    <p class="mt-6 text-xl text-blue-100">
      Your Personalized Roadmap to Academic and Career Success
    </p>
  </header>

  <!-- Rotating Titles -->
  <section class="flex flex-wrap justify-center items-center gap-6 px-6">
    {#each titles as title (title)}
      <div
        transition:fade={{ duration: 500 }}
        class="bg-white/10 backdrop-blur-sm
               px-6 py-4 rounded-xl
               text-center text-base font-semibold
               shadow-md"
      >
        {title}
      </div>
    {/each}
  </section>

  <!-- Content Section -->
  <section
    class="mt-20 w-full max-w-6xl bg-white text-gray-800
           rounded-t-3xl shadow-xl px-8 py-16"
  >
    <h2 class="text-center text-4xl font-extrabold mb-8">
      Discover & Plan Your Educational Journey
    </h2>

    <p
      class="max-w-3xl mx-auto text-center text-lg text-gray-600 leading-relaxed"
    >
      Career Subway is your personalized guide to success in the world of
      education. Our structured curriculum tree empowers you to navigate your
      educational journey effortlessly. Whether you're considering academic
      programs or exploring exciting career prospects, we've got you covered.
    </p>
  </section>
</main>
