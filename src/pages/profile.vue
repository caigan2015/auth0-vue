<!--
 * @Author: 
 * @Date: 2022-03-08 16:47:04
 * @Descripttion: 
-->
<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

</script>

<template>
  <h1>PROFILE</h1>

  <p>
     <router-link to="/" class="" >Go to Index Page</router-link>
  </p>
  <div v-if="$auth.isAuthenticated.value">
    <dl>
      <dt>picture</dt>
      <dd><img :src="user.picture" alt="画像"/></dd>
      <dt>name</dt>
      <dd>{{ user.name }}</dd>
      <dt>email</dt>
      <dd>{{ user.email }}</dd>
      <dt>nickname</dt>
      <dd>{{ user.nickname }}</dd>
      <dt>UserId</dt>
      <dd>{{ user.sub }}</dd>
    </dl>  
    <div class="logout-container">
      <a href="javascript:void(0)" @click="authLogout">ログアウト</a>
    </div>
  </div>

</template>

<script>
export default {
  data(){
    return {
      user : {
        picture:'',
        name:'-',
        email:'-',
        nickname:'-',
        sub:'-'
      }
    }
  },
  mounted(){
    if(this.$auth.user.value != undefined){
      this.user = this.$auth.user.value
    }
  },
  methods:{
    authLogout() {
      this.$auth.logout({ returnTo: window.location.origin + "/login" });
    }
  }
}
</script>

<style lang="scss" scoped>
dl {
  text-align: left;
  dt {
    font-weight: 600;
  }
  dd {
    height: 2rem;
    &:first-of-type {
      height: 5rem;
      img{
        width: 5rem;
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
