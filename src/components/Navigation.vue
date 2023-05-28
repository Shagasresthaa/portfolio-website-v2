<template>
  <nav>
    <span class="custom-text">Custom Text</span>
    <div class="nav-links">
      <router-link to="/" v-slot="{ isActive, navigate }">
        <a :class="{ 'nav-link': true, active: isActive }" @click="navigate"
          >Home</a
        >
      </router-link>
      <!-- Repeat for other links -->
      <router-link to="/about" v-slot="{ isActive, navigate }">
        <a :class="{ 'nav-link': true, active: isActive }" @click="navigate"
          >About</a
        >
      </router-link>
      <router-link v-if="isAdmin" to="/admin" v-slot="{ isActive, navigate }">
        <a :class="{ 'nav-link': true, active: isActive }" @click="navigate"
          >Admin</a
        >
      </router-link>
      <router-link to="/blog" v-slot="{ isActive, navigate }">
        <a :class="{ 'nav-link': true, active: isActive }" @click="navigate"
          >Blog</a
        >
      </router-link>
      <router-link to="/contact" v-slot="{ isActive, navigate }">
        <a :class="{ 'nav-link': true, active: isActive }" @click="navigate"
          >Contact</a
        >
      </router-link>
      <router-link to="/projects" v-slot="{ isActive, navigate }">
        <a :class="{ 'nav-link': true, active: isActive }" @click="navigate"
          >Projects</a
        >
      </router-link>
      <router-link to="/login" v-slot="{ isActive, navigate }">
        <a :class="{ 'nav-link': true, active: isActive }" @click="navigate"
          >Login</a
        >
      </router-link>
      <!-- Add other links here... -->
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
  data() {
    return {
      // change this value to true when admin integration is added
      isAdmin: false,
    };
  },
});
</script>

<style scoped lang="scss">
nav {
  background: #333;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  backdrop-filter: blur(8px);
}

.nav-links {
  display: flex;
}

.nav-link {
  color: #fff;
}

.nav-link:hover {
  color: #ccc;
}

.nav-link.active {
  color: #ff0;
}

a {
  padding-left: 0.5rem;
  padding-right: 0.5rem !important;
  text-decoration: none !important;
}
</style>
