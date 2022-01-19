<template>
  <div id="app">
    <login-header></login-header>
    <login-input></login-input>
    <loginfooter></loginfooter>
  </div>
</template>

<script>
import Loginfooter from './components/Loginfooter..vue'
import LoginHeader from './components/LoginHeader.vue'
import LoginInput from './components/LoginInput.vue'

export default {
  name: 'App',
  components: {
    LoginHeader,
    LoginInput,
    Loginfooter
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #f6f8f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
</style>
