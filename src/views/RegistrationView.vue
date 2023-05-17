<template>
  <RegistrationPage></RegistrationPage>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RegistrationPage from "@/components/RegistrationPage.vue";

export default defineComponent({
  name: "RegistrationView",
  components: { RegistrationPage },
});
</script>
