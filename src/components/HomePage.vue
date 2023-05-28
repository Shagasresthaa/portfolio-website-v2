<template>
  <div class="mainContainer">
    <div class="introMain">
      <div class="intro">
        <p class="h4"><b>Greetings!</b></p>
        <p class="h1">I'm Shaga Sresthaa</p>
        <h1 class="display-5">
          I'm an Assistant Systems Engineer at Tata Consultancy Services
        </h1>
      </div>
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
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
}

.mainContainer {
  //background: linear-gradient(90deg, #000000 50%, #003300 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}

.introMain {
  text-align: center;
  padding: 1.5rem;
}

.intro {
  text-align: left;
}
</style>
