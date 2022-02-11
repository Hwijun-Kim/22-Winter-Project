<template>
  <form @submit.prevent="submitForm">
    <div>
      <p class="loginIDinput">
      <i class="fas fa-user"></i>
      <label for="username">ID : </label>
      <input id="username" type="text" v-model="username" placeholder="이메일을 입력해주세요."/>
      </p>
    </div>
    <div>
      <p class="loginPWinput">
      <i class="fas fa-key"></i>
      <label for="password">PW : </label>
      <input id="password" type="text" v-model="password" placeholder="패스워드를 입력하세요."/>
      </p>
    </div>
      <p class = "buttons">
        <button class="button login " :disabled="!isUsernameValid || !password" type="submit">로그인</button>
      </p>
    <p>{{ logMessage }}</p>
    <router-link to="/signup/term">
        <p class="buttons">
        <button class="button signup">회원가입</button>
      </p>
    </router-link>
  </form>
</template>

<script>
import { loginUser } from '../api/index';
import { validateEmail } from '@/utils/validate';

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
        };
        const { data } = await loginUser(userData);
        console.log(data.user.username);
        this.$router.push('/main');
      } catch (error) {
        console.log(error.response.data);
        this.logMessage = error.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style scoped>
.loginform { width:400px; margin:auto; }
.loginform p > label { display:inline-block; width:100px; font-size:14px; padding-right:10px; }
.loginform p > .input_text { width:200px; font-size:14px; height:32px; }
.loginIDinput label { display:inline-block; width:100px; font-size:14px; padding-right:10px; }
.loginPWinput label { display:inline-block; width:100px; font-size:14px; padding-right:10px; }
.buttons { position:relative; height:32px; margin-top:20px; }
.buttons > .button { overflow:visible; cursor:pointer; min-width:125px; height:32px; margin:0 2px; padding:0 15px; line-height:32px; font-size:14px; border:1px solid #dfdfdf; background:#fff; border-radius:10px; }
.buttons > .button.login { color:#fff; border-color:#0099d2 !important; background:#0099d2 !important; position: relative; top: 50%; left: 50%; margin-top: -100px; margin-left: -150px;}
.buttons > .button.signup { color:#fff; border-color:#0099d2 !important; background:#0099d2 !important;  position: relative; top: 50%; left: 50%; margin-top: -100px; margin-left: -150px;}
</style>
