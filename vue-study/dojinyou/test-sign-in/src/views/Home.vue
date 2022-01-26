<template>
  <div class="home-container">
    <div class="home-header">
      <h1>UXM Music</h1>
    </div>
    <div class="home-content">
      <p>{{ userID }}님 반갑습니다.</p>
      <button v-on="signOut">Sign Out</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["userID"])
  },
  methods: {
    ...mapMutations({
      signOut: "signOut"
    })
  }
};
</script>

<style></style>
