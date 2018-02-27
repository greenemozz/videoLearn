<template>
  <div id="vuePlyr">
    <plyr-video :poster="poster" :width="width" :videos="videos" controls crossorigin></plyr-video>
  </div>
</template>
<script type="text/ecmascript-es6">
import { PlyrVideo } from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'
export default {
  name: 'vuePlyr',
  components: { PlyrVideo },
  data () {
    return {
      poster: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
      videos: [
        { src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.mp4', format: 'mp4' }
      ],
      subtitles: {
        label: '',
        src: ''
      },
      width: ''
    }
  },
  methods: {
  },
  mounted: function () {
    this.width = document.body.clientWidth + 'px'
  }
}
</script>
<style scoped>

</style>
