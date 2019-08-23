<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-23 10:33:10
 * @LastEditTime: 2019-08-23 16:20:35
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div  style="height: 100%;display: flex;">
    <div class="outer-container">
    <div class="menu-container">
      <div
        class="video-menu"
        v-for="(item,index) in videoList"
        v-bind:key="index"
        @click="clickMenu(item,index)"
        :class="{'selectMenu':selectIndex===index}"
      >{{item.name}}</div>
    </div>
    </div>

    <div style="float: left;background: black;width: 85%;height: 100%;">
      <!--      <video id="video" src="https://security-test.jingcaiwang.cn/group1/M00/00/BF/rBMBLF1eSL2AKx9lAGzGJXfnZnE784.mp4"
      controls width="100%" height="100%"></video>-->
      <video id="video" width="100%" height="100%" controls="controls">
        <source
          src="https://security-test.jingcaiwang.cn/group1/M00/00/BF/rBMBLF1eSL2AKx9lAGzGJXfnZnE784.mp4"
          type="video/ogg"
        />
        <source
          src="https://security-test.jingcaiwang.cn/group1/M00/00/BF/rBMBLF1eSL2AKx9lAGzGJXfnZnE784.mp4"
          type="video/mp4"
        />
        <source
          src="https://security-test.jingcaiwang.cn/group1/M00/00/BF/rBMBLF1eSL2AKx9lAGzGJXfnZnE784.mp4"
          type="video/webm"
        />
        <object
          data="https://security-test.jingcaiwang.cn/group1/M00/00/BF/rBMBLF1eSL2AKx9lAGzGJXfnZnE784.mp4"
          width="100%"
          height="100%"
        >
          <embed width="100%" height="100%" src="/i/movie.swf" />
        </object>
      </video>
    </div>
  </div>
</template>

<script>
import { videoList } from '../lib/videopath'
export default {
  name: 'HelloWorld',
  data () {
    return {
      selectIndex: 0,
      videoList: []
    }
  },
  mounted () {
    this.videoList = videoList
  },
  methods: {
    clickMenu (item, index) {
      this.selectIndex = index
      let url = item.url
      document.querySelector('#video').src = url
    }
  }
}
</script>

<style scoped>
.video-menu {
  color: rgb(120 125 130);
  cursor: pointer;
  /* height: 60px; */
  align-items: center;
  display: -webkit-flex;
  margin-left: 20px;
  /* line-height: 30px; */
  margin-top:20px;
  word-break: break-all;

}
.video-menu:hover {
  color: rgb(23 130 59);
}
.selectMenu {
  color: rgb(23 130 59);
}
  .menu-container{
    float: left;
    background: black;
    height: 100%;
    overflow: scroll;
  }

.menu-container::-webkit-scrollbar {
  display: none;
}
.outer-container {
  position: relative;
  overflow: hidden;
  width: 15%;
}
</style>
