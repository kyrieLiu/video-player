<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-23 16:13:42
 * @LastEditTime: 2019-08-23 16:15:58
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
    background: black;
  }
#app {
  height: 100vh;
}

#trans-tooltip,#tip-arrow-bottom,#tip-arrow-top{
    position: fixed;
    z-index: -9999;
}
</style>
