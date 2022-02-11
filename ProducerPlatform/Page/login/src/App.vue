<template>
  <div id="app">
    <page-header></page-header>
    <div class="app-container">
      <router-view></router-view>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageFooter from './components/common/PageFooter.vue'
import PageHeader from './components/common/PageHeader.vue'

export default {
    components: {
      PageHeader,
      PageFooter,
  },
};
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
