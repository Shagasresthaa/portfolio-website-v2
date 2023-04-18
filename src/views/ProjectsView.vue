<template>
    <ProjectsPage></ProjectsPage>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProjectsPage from '@/components/ProjectsPage.vue'; 

export default defineComponent({
  name: 'ProjectsView',
  components: {ProjectsPage},
});
</script>