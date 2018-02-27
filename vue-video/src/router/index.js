import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/index.vue'
import vueVideo from '@/vue-video/vueVideo.vue'
import vuePlyr from '@/vue-plyr/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      name: 'home',
      component: Home
      // component: HelloWorld
    },
    {
      path: '/vue-video',
      component: vueVideo
    },
    {
      path: '/vue-plyr',
      component: vuePlyr
    }
  ]
})
