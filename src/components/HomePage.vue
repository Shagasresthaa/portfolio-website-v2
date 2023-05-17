<template>
  <div class="app">
    <div class="intro">
      <p class="h4"><b>Greetings!</b></p>
      <p class="h1">I'm Shaga Sresthaa</p>
      <h1 class="display-5">
        I'm an Assistant Systems Engineer at Tata Consultancy Services
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
});
</script>

<style lang="scss" scoped>
body {
  background: linear-gradient(90deg, #000000 50%, #003300 100%) !important;
  height: 100vh !important;
}
.app {
  text-align: left;
  width: 100%;
  margin: 2rem;
}
</style>
