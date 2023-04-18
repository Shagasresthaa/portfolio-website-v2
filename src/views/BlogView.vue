<template>
    <BlogPage></BlogPage>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BlogPage from '@/components/BlogPage.vue'; 

export default defineComponent({
  name: 'BlogView',
  components: {BlogPage},
});
</script>