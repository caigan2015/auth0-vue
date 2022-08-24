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
  <h1>TOP</h1>
  <p>
     <router-link to="/login" class="" >ログインへ</router-link>
  </p>
</template>

<script>
export default {
  beforeCreate(){
    
  }
}
</script>

<style scoped lang="scss">
button {
  border: none;
  border-radius: .5rem;
  padding: .5rem 1rem;
  background-color: rgb(4, 0, 255);
  color: white
}
</style>
