<script setup>
  import { ref } from 'vue';
  import Header from './Header.vue';
  import Login from './Login.vue';

  const yourName = ref('');
  const visible = ref(false);
  function onClick() {
    visible.value = true;
  }
  function modalClosed() {
    visible.value = false;
  }
</script>

<template>
  <Header />
  <Login />

</template>

<style scoped lang="css">

</style>