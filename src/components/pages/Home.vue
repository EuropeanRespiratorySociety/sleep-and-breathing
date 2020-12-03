<template>
  <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>
    <v-container grid-list-md style="margin-top:-145px;">
      <!-- temporary Alert  Registration open
      <v-alert :value="true" class="title mb-1"  icon="info">
        <div style="float: left;" class="mt-3">Registration is now open.
         <br> <span class="body-2">early bird deadline extended to 15 February 2019</span> 
        </div>
        <a
          target="_blank"
          style="text-decoration: none;"
          href="http://registration.sleepandbreathing.org/register.aspx?e=894"
        >
          <v-btn color="accent" style="float: right;" class="subheading">Registration</v-btn>
        </a>
      </v-alert>-->
      <v-layout row wrap>
        <v-flex xs12>
          <v-card id="test">
            <v-toolbar card color="white">
              <v-toolbar-title v-if="category" class="headline grey--text">{{category.title}}</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-divider />
            <v-card-text v-if="category" v-html="formatLinkTargetBlank(categoryContent)" />
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container v-if="articles" grid-list-md>
      <v-layout row wrap>
        <!-- <v-flex xs12 sm6>
          <important-dates/>
        </v-flex>-->
        <v-flex xs12 sm12>
          <access-programme />
        </v-flex>
        <v-flex xs12 sm12>
          <video-conference/>
        </v-flex>
        <v-flex v-for="post of articles" :key="post.slug" xs12 sm12>
          <v-card>
            <v-img v-if="post.image" :src="post.image" height="200px" />
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{post.title}}</h3>
                <!-- <span><v-icon class="published">query_builder</v-icon>{{post.createdOn}}</span> -->
              </div>
            </v-card-title>
            <v-card-text v-html="formatLinkTargetBlank(post.shortLead)" />
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
                href="https://k4.ersnet.org/prod/v2/front/program/?e=270"
                target="_blank"
                rel="noopener"
              >
                <v-btn color="accent">Online programme</v-btn>
              </a>

              <a
                v-if="post.slug === 'case-submission-2021'"
                style="text-decoration: none;"
                href="https://ers.app.box.com/f/3ce19a0fcbaf4de983a28506a04a0635"
                target="_blank"
                rel="noopener"
              >
                <v-btn color="accent">Submit your case</v-btn>
              </a>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <organising-committee />
        </v-flex>
      </v-layout>
     </v-container>


    <ads />

  </v-flex>
</template>

<script>
import { mapActions } from "vuex";
import { formMixin } from "@/mixins/formMixin";
import Ads from "../widgets/Ads";
import ImportantDates from "../widgets/ImportantDates";
import AccessProgramme from "../widgets/AccessProgramme";
import VideoConference from "../widgets/VideoConference";
import OrganisingCommittee from "../widgets/OrganisingCommittee";

export default {
  name: "Home",
  components: {
    Ads,
    ImportantDates,
    AccessProgramme,
    VideoConference,
    OrganisingCommittee
  },
  mixins: [formMixin],
  data() {
    return {
      fixed: false,
    };
  },
  computed: {
    slug() {
      return this.$store.getters.slug;
    },

    path() {
      return this.$store.state.route.path;
    },
    articles() {
      if (
        this.$store.state.pages[this.path].items &&
        this.$store.state.pages[this.path].items.length > 0
      )
        return this.$store.state.pages[this.path].items;
      else return false;
    },
    category() {
      return this.$store.state.pages[this.path].category;
    },
    categoryContent() {
      return (
        this.category.body +
        `<img 
          alt="Sleep and Breathing Sponsors" 
          src="./img/sleep-and-breathing-sponsors.png"
          class="sponsors"
        >`
      );
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
        request: "home",
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

.sponsors {
  height: 75px;
}
</style>
