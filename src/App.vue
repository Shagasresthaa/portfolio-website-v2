<template>
  <div id="app">
    <NavBar />
    <router-view class="flex-item" />
    <FooterMain />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/Navigation.vue";
import FooterMain from "./components/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
    FooterMain,
  },
});
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-x: hidden;
  font-family: "Ubuntu", sans-serif;
  color: #2c3e50;
  background: linear-gradient(135deg, #8e9eab 0%, #eef2f3 100%);

  .flex-item {
    flex-grow: 1;
  }
  html,
  body {
    height: 100%;
    margin: 0;
  }
}
</style>
