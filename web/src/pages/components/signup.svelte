<!-- Signup.svelte -->
<script>
  import { createUser } from "../../services/user.js";

  let name = "";
  let phone = "";
  let email = "";
  let password = "";
  let confirmPassword = "";
  let isLoading = false;
  let successMessage = "";
  let errorMessage = "";

  let errors = {
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validateForm = () => {
    errors = {};

    if (!name || name.trim() === "") {
      errors.name = "Please enter your name.";
    }

    if (!phone || phone.trim() === "") {
      errors.phone = "Please enter your phone number.";
    }

    if (!email || !email.includes("@")) {
      errors.email = "Please enter a valid email address.";
    }

    if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }

    return Object.keys(errors).length === 0;  
  };

  const handleSignup = async () => {
    errorMessage = "";
    successMessage = "";

    if (validateForm()) {
      isLoading = true;

      try {
        const result = await createUser(name, email, password, phone);

        if (result.success && result.token) {
          // Store token in localStorage
          localStorage.setItem("authToken", result.token);
          localStorage.setItem("user", JSON.stringify(result.user));

          successMessage = result.message;

          // Clear form
          name = "";
          phone = "";
          email = "";
          password = "";
          confirmPassword = "";

          // Redirect to login page after 2 seconds
          setTimeout(() => {
            window.location.href = "/components/login";
          }, 2000);
        } else {
          errorMessage = result.message || "Signup failed. Please try again.";
        }
      } catch (error) {
        errorMessage = error.message || "An unexpected error occurred.";
      } finally {
        isLoading = false;
      }
    }
  };
</script>

<main
  class="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32"
>
  <div class="bg-white w-full max-w-md p-6 rounded-lg shadow-lg m-4">
    <h2 class="text-3xl font-semibold text-center mb-4 text-gray-800">
      Sign Up
    </h2>

    {#if successMessage}
      <div
        class="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded"
      >
        {successMessage}
      </div>
    {/if}

    {#if errorMessage}
      <div
        class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded"
      >
        {errorMessage}
      </div>
    {/if}

    <form on:submit|preventDefault={handleSignup}>
      <div class="mb-4">
        <label for="name" class="text-gray-700 font-medium">Name</label>
        <input
          type="text"
          id="name"
          class="form-input mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
          placeholder="Enter your name"
          bind:value={name}
          disabled={isLoading}
        />
        <p class="text-red-500 text-sm mt-1">{errors.name}</p>
      </div>

      <div class="mb-4">
        <label for="phone" class="text-gray-700 font-medium">Phone Number</label
        >
        <input
          type="tel"
          id="phone"
          class="form-input mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
          placeholder="Enter your phone number"
          bind:value={phone}
          disabled={isLoading}
        />
        <p class="text-red-500 text-sm mt-1">{errors.phone}</p>
      </div>

      <div class="mb-4">
        <label for="email" class="text-gray-700 font-medium">Email</label>
        <input
          type="email"
          id="email"
          class="form-input mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
          placeholder="youremail@example.com"
          bind:value={email}
          disabled={isLoading}
        />
        <p class="text-red-500 text-sm mt-1">{errors.email}</p>
      </div>

      <div class="mb-4">
        <label for="password" class="text-gray-700 font-medium">Password</label>
        <input
          type="password"
          id="password"
          class="form-input mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
          placeholder="********"
          bind:value={password}
          disabled={isLoading}
        />
        <p class="text-red-500 text-sm mt-1">{errors.password}</p>
      </div>

      <div class="mb-6">
        <label for="confirmPassword" class="text-gray-700 font-medium">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          class="form-input mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
          placeholder="********"
          bind:value={confirmPassword}
          disabled={isLoading}
        />
        <p class="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        class="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white rounded-lg p-3 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 focus:outline-none transform hover:scale-105 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Signing Up..." : "Sign Up"}
      </button>
    </form>

    <p class="text-center mt-4">
      Already have an account? <a
        href="/components/login"
        class="text-blue-600 hover:underline">Log In</a
      >
    </p>
  </div>
</main>
