<!--
 * @Author: 
 * @Date: 2022-03-08 16:47:38
 * @Descripttion: 
-->
<script setup>
import { ref } from "vue";

const mail = ref("");
const password = ref("");
const socialType = ref({
  google: "google-oauth2",
  apple: "apple",
  line: "line",
  twitter: "twitter",
});
</script>

<template>
  <h1>LOGIN</h1>
  <p>
    <router-link to="/" class="">トップへ</router-link>
  </p>
  <div v-if="!$auth.loading.value">
    <div class="login-container" v-if="!$auth.isAuthenticated.value">
      <!-- <div>
        <span>メール：</span>
        <input
          type="text"
          class="mail-input"
          placeholder="メールを入力してください"
          v-model="mail.value"
        />
      </div>
      <div>
        <span>パスワード：</span>
        <input
          type="password"
          class="password-input"
          placeholder="パスワードを入力してください"
          v-model="password.value"
        />
      </div>
      <div>
        <button class="submit" @click="loginSubmit">ログイン</button>
      </div> -->
      <div class="social-login-container">
        <a href="javascript:void(0)" @click="authLogin">auth0</a>
        <a href="javascript:void(0)" @click="socialLogin(socialType.google)">google</a>
        <a href="javascript:void(0)" @click="socialLogin(socialType.apple)">apple</a>
        <a href="javascript:void(0)" @click="socialLogin(socialType.line)">line</a>
        <a href="javascript:void(0)" @click="socialLogin(socialType.twitter)">twitter</a>
      </div>
    </div>
    <div class="logout-container" v-if="$auth.isAuthenticated.value">
      <a href="javascript:void(0)" @click="authLogout">ログアウト</a>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {

  },
  methods: {
    loginSubmit() {
      const mail = this.mail;
      const password = this.password; 
      alert('開発中')
    },
    authLogin() {
      this.$auth.loginWithPopup().then(() => {
        if (this.$auth.isAuthenticated.value) {
          this.$router.push("/profile");
        }
      });
    },
    authLogout() {
      this.$auth.logout({ returnTo: window.location.origin + "/login" });
    },
    socialLogin(type) {
      console.log(type);
      this.$auth
        .buildAuthorizeUrl({
          redirect_uri: window.location.origin + "/callback",
          connection: type,
        })
        .then((value) => {
            window.location = value;
        });
    },
  },
};
</script>
<style scoped lang="scss">
p button {
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: rgb(4, 0, 255);
  color: white;
}
.login-container {
  width: 90%;
  margin: 0 auto;
  padding: 0;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span {
      display: block;
      width: 30%;
      text-align: left;
    }
    input {
      width: 60%;
      border-radius: 0.3rem;
      height: 2rem;
    }
    button {
      font-size: 1.2rem;
      color: #ffffff;
      margin: 0 auto 2rem;
      width: 80%;
      border-radius: 0.5rem;
      padding: 0.5rem;
      background-color: blue;
      border: none;
    }
    &.social-login-container {
      justify-content: space-around;
      a {
        border: none;
        display: block;
        width: 100%;
        padding: 0.5rem;
        text-decoration: none;
        border-radius: 0.3rem;
        color: #ffffff;
        background-color: blue;
        margin-bottom: .5rem;
        &:hover {
          background-color: aqua;
        }
      }
    }
  }
}

.logout-container {
  margin-top: 2rem;
  a {
    border: none;
    display: block;
    padding: 0.5rem;
    text-decoration: none;
    border-radius: 0.3rem;
    color: #ffffff;
    background-color: rgb(255, 0, 0);
  }
}
</style>
