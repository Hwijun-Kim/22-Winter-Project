<template>
<div>
  <div>약관 1 : </div>
  <br>
  <textarea>약관 내용</textarea>
  <br>
  <input type="checkbox" id="Agreed1" v-model="Agreed1">
  <label for="Agreed1">동의합니다.</label>

  <div>약관 2 : </div>
  <br>
  <textarea>약관 내용</textarea>
  <br>
  <input type="checkbox" id="Agreed2" v-model="Agreed2">
  <label for="Agreed2">동의합니다.</label>
  <p></p>
  <input type="checkbox" @click="CheckAll" id="CheckAll" v-model="CheckAllBox">
  <label for="CheckAll">모두 동의</label>
  <router-link to="/signup/form">
    <p class="buttons">
      <button class="button close" :class="disablebutton" :disabled="disablebutton">다음</button>
    </p>
  </router-link>
</div>

</template>

<script>
export default {
  data() {
    return {
      Agreed1: false,
      Agreed2: false,
      CheckAllBox: false,
    };
  },
  computed: {
    disablebutton() {
      return  !this.Agreed1 || !this.Agreed2 ? 'disalbed' : null;
    },
  },
    methods : {
      CheckAll: function() {
        if(!this.CheckAllBox) {
          this.Agreed1 = true
          this.Agreed2 = true
        } 
        }
      }
  }

</script>

<style>
.buttons > .button { overflow:visible; cursor:pointer; min-width:125px; height:32px; margin:0 2px; padding:0 15px; line-height:32px; font-size:14px; border:1px solid #dfdfdf; background:#fff; border-radius:10px; }
.buttons > .button.nextpage { color:#fff; border-color:#0099d2 !important; background:#0099d2 !important; }
</style>