<template>
  <div id="home">
    <ul>
      <li>
        <a href="#/vue-video">vue-video（垃圾组件）</a>
      </li>
      <li>
        <a href="#/vue-plyr">vue-plyr</a>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'home',
  computed: {
    host () {
      return window.location.host
    }
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
