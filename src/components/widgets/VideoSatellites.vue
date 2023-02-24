<template>
  <v-card id="test">
    <div class="videoWrapper">
      <iframe src="https://www.youtube.com/embed/co7RcYKUq6g?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen/>
    </div>
  </v-card>


</template>



<script>
export default {
  name: "video-satellites"
};
</script>

<style>
@import "../../css/fonts.css";
.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
