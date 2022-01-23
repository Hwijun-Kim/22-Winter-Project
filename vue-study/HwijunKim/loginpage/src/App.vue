<template>
  <div id="app">
    <LoginHeader></LoginHeader>
    <LoginInput></LoginInput>
  </div>
</template>

<script>
import LoginHeader from './components/LoginHeader.vue';
import LoginInput from './components/LoginInput.vue';
//import LoginFooter from './components/LoginFooter.vue';

export default {
  components: {
    'LoginHeader': LoginHeader,
    'LoginInput': LoginInput,
    //'LoginFooter': LoginFooter
  }
}
</script>

<style>

</style>