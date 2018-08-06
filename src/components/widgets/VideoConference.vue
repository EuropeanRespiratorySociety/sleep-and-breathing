<template>
  <v-layout row>
    <v-flex md12>
      <v-card id="test">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">ERS / ESRS Sleep and Breathing Conference 2019</h3>
          </div>
        </v-card-title>
        <div class="videoWrapper">
          <iframe src="https://www.youtube.com/embed/WZLDc9BR17M?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </v-card>

    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'video-conference'
}
</script>

<style>
  @import '../../css/fonts.css';

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
