<!--
 * @Author: 
 * @Date: 2022-03-11 14:27:40
 * @Descripttion: 
-->
<script setup>
import { ref } from '@vue/reactivity';
// let timeout = ref(5)
</script>
<template>
  <h3>Callback</h3>
  <p><span>Jump to Profile after {{timeout}}s</span></p>
</template>

<script>
export default {
  name: 'Callback',
  data(){
    return {
      timeout: 2
    }
  },
  created() {
    if (this.$route.query.error) {
      this.$auth.logout({
        returnTo: window.location.origin + `/error?error=${encodeURI(this.$route.query.error)}&error_description=${encodeURI(this.$route.query.error_description)}`
      })
    }
  },
  mounted(){
    console.log(this.$auth.user);
    const user = this.$auth.user ? this.$auth.user : null
    const that = this
    if(user){
      const T = setInterval(function(e){
          that.timeout--
        if(that.timeout == 0){
          clearInterval(T);
          that.$router.push('/profile')
        }
      },1000)
    }
  }
}
</script>