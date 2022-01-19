<template>
  <div class="logininput">
        <form class="loginform">
			<p>
                <i class="fas fa-user"></i>
				<label for="memberIdInput">ID</label>
				<input type="text" id="memberIdInput" class="input_text" ref="memberIdInput" v-model.trim="memberId" placeholder="아이디를 입력해주세요." />
			</p>
			<p>
                <i class="fas fa-key"></i>
				<label for="memberPasswordInput">비밀번호</label>
				<input type="password" id="memberPasswordInput" class="input_text" ref="memberPasswordInput" v-model.trim="memberPassword" placeholder="패스워드를 입력하세요." />
			</p>
			<p class="buttons">
				<button class="button blue">로그인</button>
                <button class="button blue">회원가입</button>
			</p>
	</form>
  </div>
</template>

<script>
export default {

};
</script>

<style>
.loginform { width:400px; margin:auto; }
.loginform p > label { display:inline-block; width:100px; font-size:14px; padding-right:10px; }
.loginform p > .input_text { width:200px; font-size:14px; height:32px; }
.buttons { position:relative; height:32px; margin-top:20px; }
.buttons > .button { overflow:visible; cursor:pointer; min-width:125px; height:32px; margin:0 2px; padding:0 15px; line-height:32px; font-size:14px; border:1px solid #dfdfdf; background:#fff; border-radius:10px; }
.buttons > .button.blue { color:#fff; border-color:#0099d2 !important; background:#0099d2 !important; }
</style>