<script>
  import defoultUserLogo from "../../../assets/defoultUserLogo.png";
  import logo from "../../../assets/WebLogo.png";
</script>

<nav
  class="hidden md:block sticky top-0 z-50 bg-white border-b border-gray-200"
>
  <div class="max-w-7xl mx-auto px-6">
    <div class="flex items-center justify-between h-16">
      <!-- Left: Brand -->
      <a href="/" class="flex items-center gap-3 hover:no-underline">
        <img src={logo} alt="Study Path Hub" class="h-9 w-9" />
        <span class="hidden lg:block text-xl font-extrabold text-gray-900">
          Study Path Hub
        </span>
      </a>

      <!-- Center: Search -->
      <div class="flex-1 mx-10 max-w-xl">
        <div class="relative">
          <input
            type="text"
            placeholder="Search programs, careers, universities..."
            class="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition"
          />
          <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>
      </div>

      <!-- Right: Actions -->
      <div class="flex items-center gap-6">
        <a
          href="/userDashboard/"
          class="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition shadow-sm"
        >
          Chatbot
        </a>

        <a href="/" class="flex items-center">
          <img
            src={defoultUserLogo}
            alt="User Profile"
            class="h-9 w-9 rounded-full border border-gray-300 hover:ring-2 hover:ring-indigo-500 transition"
          />
        </a>
      </div>
    </div>
  </div>
</nav>
