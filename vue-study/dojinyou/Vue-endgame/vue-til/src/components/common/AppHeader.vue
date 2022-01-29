<template>
  <header>
    <div>
      <router-link :to="logoLink" class="logo">
        TIL
        <span v-if="isLogin" class="username">by {{ getUsername }}</span>
      </router-link>
    </div>
    <div class="navigations">
      <template v-if="isLogin">
        <a href="javascript:;" @click="logoutUser" class="logout-btn">Logout</a>
      </template>
      <template v-else>
        <router-link to="/login">로그인</router-link>
        <router-link to="/signup">회원가입</router-link>
      </template>
    </div>
  </header>
</template>

<script>
import { deleteCookie } from '@/utils/cookies';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isLogin', 'getUsername']),
  },
  methods: {
    logoutUser() {
      this.$store.commit('clearToken');
      this.$store.commit('clearUsername');
      deleteCookie('til_auth');
      deleteCookie('til_user');
      this.$router.push('/login');
    },
    logoLink() {
      return this.$store.getter.isLogin ? '/main' : '/login';
    },
  },
};
</script>

<style scoped>
.logout-btn {
  font-size: 14px;
}
.username {
  color: white;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #927dfc;
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}
a {
  color: #dedede;
  font-size: 18px;
}
a.logo {
  font-size: 30px;
  font-weight: 900;
  color: white;
}
.logo > span {
  font-size: 14px;
  font-weight: normal;
}
.navigations a {
  margin-left: 10px;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
a.router-link-exact-active {
  color: white;
  font-weight: bold;
}
</style>
