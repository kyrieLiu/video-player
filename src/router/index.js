import Vue from 'vue'
import Router from 'vue-router'
import VideoMain from '@/components/VideoMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VideoMain',
      component: VideoMain
    }
  ]
})
