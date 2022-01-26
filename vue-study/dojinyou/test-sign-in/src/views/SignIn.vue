<template>
  <div class="container">
    <div class="sign-in-header">
      <h1>UXM Music</h1>
      <h3>Sign In</h3>
    </div>
    <div class="content">
      <!-- <form action="" method="post"> -->
      <input type="text" id="user-id" placeholder="ID" v-model="userID" />
      <input
        type="password"
        id="user-pw"
        placeholder="PW"
        v-model="userPW"
        @keyup.enter="signIn"
      />
      <!-- <button type="submit">Sign In</button> -->
      <!-- </form> -->
    </div>
    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="body">{{ modalMessage }}</h3>
    </Modal>
  </div>
</template>

<script>
import Modal from "./common/Modal.vue";

export default {
  components: { Modal },
  data() {
    return {
      userID: "",
      userPW: "",
      modalMessage: "",
      showModal: false
    };
  },
  methods: {
    signIn() {
      const userID = this.userID.trim();
      // console.log("🚀 ~ file: SignIn.vue ~ line 41 ~ userID", userID)
      const userPW = this.userPW.trim();
      // console.log("🚀 ~ file: SignIn.vue ~ line 43 ~ userPW", userPW)
      if (this.checkInput(userID) && this.checkInput(userPW)) {
        this.$store.commit("signIn", userID, userPW);
        this.clearInput();
      }
    },
    checkInput(input) {
      console.log("🚀 ~ file: SignIn.vue ~ line 51 ~ input", input);
      if (input == "") {
        let warningMsg = "ID 또는 비밀번호를 입력해주세요";
        setModal(warningMsg);
        return false;
      }
      return true;
    },
    setModal(msg) {
      this.modalMessage = msg;
      this.showModal = true;
    },
    clearInput() {
      this.userID = "";
      this.userPW = "";
    }
  }
};
</script>

<style scoped>
.container {
  width: 500px;
  text-align: center;
  background-color: antiquewhite;
}
input,
button {
  border-radius: 5px;
  padding: 10px;
  margin: 5px 0;
  width: 350px;
}
input {
  box-sizing: border-box;
}
.content > form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
