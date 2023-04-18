<template>
  <AboutPage></AboutPage>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AboutPage from '@/components/AboutPage.vue'; 

export default defineComponent({
name: 'AboutView',
components: {AboutPage},
});
</script>
