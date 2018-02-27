<template>
  <div id="vueVideo">
    <div id="mask"></div>
    <my-video :sources="video.sources" :options="video.options" crossorigin></my-video>
  </div>
</template>
<script type="text/ecmascript-6">
import myVideo from 'vue-video'
export default {
  name: 'vueVideo',
  components: {myVideo},
  data () {
    return {
      video: {
        sources: [{
          src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.mp4',
          type: 'video/mp4'
        }],
        options: {
          autoplay: false,
          volume: 0.6,
          poster: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg'
        }
      }
    }
  }
}
</script>
<style scoped>
#mask {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  background-color: black;
}
</style>
