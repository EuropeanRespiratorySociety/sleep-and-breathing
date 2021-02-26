<template>
  <!-- <v-layout row>
    <v-flex md12>
      <v-card id="test">
        <div class="videoWrapper">
          <iframe src="https://www.youtube.com/embed/WZLDc9BR17M?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen/>
        </div>
      </v-card>

    </v-flex>
  </v-layout> -->

  <v-layout row>
    <v-flex md12>
      <v-card id="test">
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0 mt-1">{{filterVideos.videoNewsTitle}}</h3>
        </div>
      </v-card-title>
          <vue-plyr v-if="filterVideos.providerType === 'youtube'">
            <div data-plyr-provider="youtube" :data-plyr-embed-id="filterVideos.videoNewsId"></div>
          </vue-plyr>
          <vue-plyr v-if="filterVideos.providerType === 'vimeo'">
            <div data-plyr-provider="vimeo" :data-plyr-embed-id="filterVideos.videoNewsId"></div>
          </vue-plyr>

        <v-card-actions>
          <v-btn href="/resources" flat>More Videos...</v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-flex>
    <!-- <v-flex md12>
      <v-card id="test">
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0 mt-1">{{ videoResourse().videoNews[0].videoNewsTitle }}</h3>
        </div>
      </v-card-title>
          <vue-plyr v-if="videoResourse().videoNews[0].providerType === 'youtube'">
            <div data-plyr-provider="youtube" :data-plyr-embed-id="videoResourse().videoNews[0].videoNewsId"></div>
          </vue-plyr>
          <vue-plyr v-if="videoResourse().videoNews[0].providerType === 'vimeo'">
            <div data-plyr-provider="vimeo" :data-plyr-embed-id="videoResourse().videoNews[0].videoNewsId"></div>
          </vue-plyr>
        <v-card-actions>
          <v-btn to="/resources" flat>More Videos...</v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-flex> -->
  </v-layout>

</template>
<script>
import { formMixin } from "@/mixins/formMixin";

export default {
  name: "video-conference",
  mixins: [formMixin],
  computed: {
  filterVideos() {
    const showOnHome = this.videoResourse().videoNews;
    const result = showOnHome.find(x => x.showVideoOnHome);
    return result;
  }
}
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
