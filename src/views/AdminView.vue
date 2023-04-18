<template>
    <AdminPage></AdminPage>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AdminPage from '@/components/AdminPage.vue'; 

export default defineComponent({
  name: 'AdminView',
  components: {AdminPage},
});
</script>