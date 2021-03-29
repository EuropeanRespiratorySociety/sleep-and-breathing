<template>
  <v-flex xs12 sm6 md8 lg8 offset-md2 offset-lg2>
    <v-card v-if="category" id="test" class="card--flex-toolbar">
      <v-toolbar card class="white">
        <v-toolbar-title v-if="category" class="headline grey--text">{{category.title}}</v-toolbar-title>
        <v-spacer />
      </v-toolbar>

      <v-divider />
      <v-card-text v-if="category.body" v-html="formatLinkTargetBlank(category.body)" />
    </v-card>

    <v-container grid-list-md align-center>
      <!-- To display the video info start-->

      <v-layout row wrap>
        <!-- <v-flex xs12 sm12 v-for="(videoNew, index) in videoResourse().videoNews" :key="index">
          <v-card id="test" class="fill-height">
            <div class="videoWrapper">
              <iframe :src="videoNew.videoNewsUrl" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen/>
            </div>
          <v-card-title >
            <div>
              <div>
                <h3 class="title mb-0 mt-0">{{ videoNew.videoNewsTitle }}</h3>
              </div>
              <div v-if="videoNew.videoNewsSubTitle" class="grey--text">{{ videoNew.videoNewsSubTitle }}</div>
            </div>
            <div>{{ videoNew.videoNewsLead }}</div>
          </v-card-title>
          </v-card>
        </v-flex> -->

        <v-flex xs12 sm6 v-for="(videoNew, index) in videoResourse().videoNews" :key="index" >
          <v-card id="test">
              <vue-plyr v-if="videoNew.providerType === 'vimeo' && videoNew.videoNewsId==='511570665'">
                <iframe src="https://player.vimeo.com/video/511570665?title=0&byline=0&portrait=0&transparent=0" width="100%" background-color="#000000" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
              </vue-plyr>
              <vue-plyr v-if="videoNew.providerType === 'youtube'">
                <div data-plyr-provider="youtube" :data-plyr-embed-id="videoNew.videoNewsId"></div>
              </vue-plyr>
              <vue-plyr v-if="videoNew.providerType === 'vimeo' && videoNew.videoNewsId !=='511570665'">
                <div data-plyr-provider="vimeo" :data-plyr-embed-id="videoNew.videoNewsId"></div>
              </vue-plyr>

            <v-card-text style="min-height: 210px;">
                <div>
                  <h3 class="title mb-2 mt-0">{{ videoNew.videoNewsTitle }}</h3>
                </div>
                <div v-if="videoNew.videoNewsSubTitle" class="grey--text">{{ videoNew.videoNewsSubTitle }}</div>
                <div>{{ videoNew.videoNewsLead }}</div>
          </v-card-text>
          </v-card>
        </v-flex>

      </v-layout>
      <!-- To display the video info end-->

      <v-layout row wrap>
        <!-- <v-flex xs12 sm12>
          <organising-committee />
        </v-flex> -->

        <v-flex v-for="post of articles" :key="post.slug" xs12 sm12>
          <v-card>
            <v-img v-if="post.image" :src="post.image" height="200px" />
            <v-card-title v-if="post.title" primary-title>
              <div>
                <h3 class="headline mb-0">{{post.title}}</h3>
                <!--<span><v-icon class="published">query_builder</v-icon>{{post.createdOn}}</span>-->
              </div>
            </v-card-title>
            <v-card-text v-if="post.shortLead" v-html="formatLinkTargetBlank(post.shortLead)" />
            <v-card-actions>
              <v-btn :to="`articles/${post.slug}`" flat>More...</v-btn>
              <v-spacer />
              <a
                v-if="post.slug === 'abstract-submission' && hasSubmitAbstractOption()"
                style="text-decoration: none;"
                href="https://my.ersnet.org/AbstractsSubmission/Main/SLBSubmission"
                target="_blank"
                rel="noopener"
              >
                <v-btn color="accent">Submit your abstract</v-btn>
              </a>
              <a
                v-if="post.slug === 'programme-2021'"
                style="text-decoration: none;"
                href="https://k4.ersnet.org/prod/v2/front/program/?e=327"
                target="_blank"
                rel="noopener"
              >
                <v-btn color="accent">Online programme</v-btn>
              </a>
              <!-- <a
                v-if="post.slug === 'case-submission-2021'"
                style="text-decoration: none;"
                href="https://ers.app.box.com/f/3ce19a0fcbaf4de983a28506a04a0635"
                target="_blank"
                rel="noopener"
              >
                <v-btn color="accent">Submit your case</v-btn>
              </a> -->
            </v-card-actions>
          </v-card>
        </v-flex>
        <ads />
      </v-layout>
    </v-container>
  </v-flex>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import { formMixin } from "@/mixins/formMixin";
import AccessProgramme from "../widgets/AccessProgramme";
import OrganisingCommittee from "../widgets/OrganisingCommittee";
import Ads from "../widgets/Ads";

export default {
  name: "resources",
  components: {
    AccessProgramme,
    OrganisingCommittee,
    Ads
  },
  mixins: [formMixin],
  data() {
    return {
      fixed: false,
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
    },
    player() {
          return this.$refs.plyr.player;
        },
  },
  created() {
    this.fetchData();
  },
  methods: {
    ...mapActions(["getCategory", "pageNumber"]),
    fetchData() {
      const payload = {
        pageNumber: parseInt(this.$route.params.id) || this.page,
        request: "resources",
        skip: this.$store.state.skip,
        sortDirection: 1,
      };
      this.getCategory(payload);
    },
  },
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

.vimeo {
  position: relative;
  height: 0;
  padding: 0 0 56.25%;
  overflow: hidden;
}

.vimeo iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
