<script setup>
  import { ref } from 'vue';
  import Header from './Header.vue'


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
  <div class="sample" id="me">
    <h1>Example use of @carbon/vue</h1>
    <cv-text-input
      label="Who are you?"
      v-model="yourName"
      placeholder="your name" />
    <cv-button @click="onClick">Hello {{yourName}}</cv-button>
    <cv-button @click="onClick">Hello {{yourName}}</cv-button>
    <cv-modal :visible="visible" @modal-hidden="modalClosed">
      <template #title>Welcome to @carbon/vue {{yourName}}</template>
      <template #content>
      </template>
    </cv-modal>
  </div>
</template>

<style scoped lang="css">
  .sample {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 600px;
    margin: 5% auto;
  }
  .sample > div {
    margin: 30px 0;
  }
</style>