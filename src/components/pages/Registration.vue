<template>
  <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>
    <v-container grid-list-md style="margin-top:-145px;"> <!-- -190px for two banners instead of -145px -->
      <!-- <v-alert :value="true" class="title mb-1"  icon="info" color="orange" style="padding: 8px 16px;">
        <div style="display: flex; align-items: center; justify-content:space-between;">
        <div >The conference replay is available
         <br> <span class="body-2">early bird deadline extended to 15 February 2019</span> 
        </div>
        <a
          target="_blank"
          style="text-decoration: none;"
          href="https://live.sleepandbreathing.org/user/login"
        >
          <v-btn color="accent">Access the conference</v-btn>
        </a>
        </div>
      </v-alert> -->
      <v-layout row wrap>
        <v-flex xs12>
          <v-card v-if="category" id="test">
            <v-toolbar card class="white">
              <v-toolbar-title v-if="category" class="headline grey--text">{{category.title}}</v-toolbar-title>
              <v-spacer/>
              <!-- Regsiter Button Start -->
              <a target="_blank" style="text-decoration: none;" href="https://my.ersnet.org/SleepAndBreathing/Main">
                <v-btn v-if="category.slug === 'registration-2023' " color="accent">Register now</v-btn>
              </a>
              <!-- Regsiter Button End -->
            </v-toolbar>
            <v-divider/>
            <v-card-text v-if="category.body" v-html="formatLinkTargetBlank(category.body)"/>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout v-if="articles" row wrap>
        <v-flex v-for="post of articles" :key="post.slug" xs12 sm6>
          <v-card  class="pb-2">
            <v-card-media v-if="post.image" :src="post.image" height="200px"/>
            <v-card-title v-if="post.title" primary-title>
              <div>
                <h3 class="headline mb-0">{{post.title}}</h3>
              </div>
            </v-card-title>
            <v-card-text v-if="post.shortLead" v-html="formatLinkTargetBlank(post.shortLead)"/>
            <v-card-actions>
              <v-btn :to="`articles/${post.slug}`" flat>More...</v-btn>
              <v-spacer/>
            </v-card-actions>
          </v-card>
        </v-flex>


        <v-flex xs12 sm12>
          <video-satellites />
          <!-- The title is now Access Preliminary Programme -->
        </v-flex>

      </v-layout>
    </v-container>
  </v-flex>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { formMixin } from "@/mixins/formMixin";
import VideoSatellites from "../widgets/VideoSatellites";

export default {
  name: "registration",
  components: {
    VideoSatellites
  },
  mixins: [formMixin],
  data() {
    return {
      fixed: false
    };
  },
  computed: {
    ...mapGetters(["slug"]),

    path() {
      return this.$store.state.route.path;
    },

    articles() {
      return this.$store.state.pages[this.path].items;
    },

    category() {
      return this.$store.state.pages[this.path].category;
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    ...mapActions(["getCategory", "pageNumber"]),
    fetchData() {
      const payload = {
        pageNumber: parseInt(this.$route.params.id) || this.page,
        request: "registration",
        skip: this.$store.state.skip,
        sortDirection: 1
      };
      this.getCategory(payload);
    }
  }
};
</script>

<style>
@import "../../css/fonts.css";
.published {
  font-size: 18px !important;
  padding-right: 5px;
}

.card__text {
  min-height: 140px;
}
</style>
