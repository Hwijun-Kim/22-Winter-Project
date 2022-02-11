<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <div>
      <label for="nickname">nickname: </label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <p class= "buttons">
      <button class="button signupcomplete" type="submit">회원 가입</button>
    </p>
    <Modal v-if="showmodal" @close="showmodal = false">
      <h3 slot="header">
        알림
      </h3>
      <div slot="body">
        {{signUpUserName}}님의 회원가입을 축하합니다.
      </div>
      <div slot="footer">
        <router-link to="/login">
          <p class="buttons">
            <button class="button close">확인</button>
          </p>
        </router-link>
      </div>
    </Modal>
  </form>
</template>

<script>
import { registerUser } from '@/api/index';
import Modal from './common/Modal2.vue'

export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      logMessage: '',
      showmodal: false,
      signUpUserName : '',
    };
  },
  methods: {
    async submitForm() { // 비동기처리
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      const { data } = await registerUser(userData);
      this.signUpUserName = data.nickname
      this.initForm();
      this.showmodal = true;
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
  components: {
    Modal: Modal
  }
};
</script>

<style>
.buttons > .button { overflow:visible; cursor:pointer; min-width:125px; height:32px; margin:0 2px; padding:0 15px; line-height:32px; font-size:14px; border:1px solid #dfdfdf; background:#fff; border-radius:10px; }
.buttons > .button.signupcomplete { color:#fff; border-color:#0099d2 !important; background:#0099d2 !important; }
</style>