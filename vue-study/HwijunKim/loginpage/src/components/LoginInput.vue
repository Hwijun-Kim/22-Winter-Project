<template>
  <div class="box">
    <h1>Login</h1>
    <p>
      <i class="fas fa-user-circle"></i>
      <input
        type="text"
        class="inputBox"
        v-model="newId"
        placeholder="아이디"
      />
    </p>
    <p>
      <i class="fas fa-lock"></i>
      <input
        type="password"
        class="inputBox"
        v-model="newPassword"
        v-on:keyup.enter="enterLogin"
        placeholder="비밀번호"
      />
    </p>
    <button v-on:click="enterLogin">로그인</button>
    <button>회원가입</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      newId: "",
      newPassword: "",
    };
  },
  methods: {
    enterLogin: function () {
      // 1함수에 1가지 일만 시킨다.
      if (this.newId !== "") {
        if (this.newPassword !== "") {
          if (this.newId == "KHwijun") {
            if (this.newPassword == "572129") {
              alert("로그인 성공!");
            } else {
              alert("아이디 및 비밀번호가 틀렸습니다.");
              this.clearInput();
            }
          } else {
            alert("아이디 및 비밀번호가 틀렸습니다.");
            this.clearInput();
          }
        } else {
          alert("비밀번호를 입력하세요!");
          this.clearInput();
        }
      } else {
        alert("아이디를 입력하세요!");
        this.clearInput();
      }
    },
    clearInput: function () {
      this.newId = "";
      this.newPassword = "";
    },
  },
};
</script>

<style scoped>
.box {
  width: 400px;
  padding: 100px;
  border-radius: 40px 40px 40px 40px;
  box-shadow: 2px 2px 8px;
  text-align: center;
  margin: auto;
}
.inputBox {
  width: 300px;
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
i {
  width: 5rem;
  height: 50px;
}
</style>
