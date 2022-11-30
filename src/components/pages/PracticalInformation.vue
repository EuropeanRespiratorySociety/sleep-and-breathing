<template>
  <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>
    <v-card v-if="category" id="test" class="card--flex-toolbar">
      <v-toolbar card class="white">
        <v-toolbar-title v-if="category" class="headline grey--text">{{category.title}}</v-toolbar-title>
        <v-spacer/>
      </v-toolbar>

      <v-divider/>
      <v-card-text v-if="category.body" v-html="formatLinkTargetBlank(category.body)"/>
    </v-card>
    <v-container grid-list-md>
      <v-layout v-if="articles" row wrap>
        <v-flex v-for="post of articles" :key="post.slug" xs12 sm12>
          <v-card>
            <v-img v-if="post.image" :src="post.image" height="200px"/>
            <v-card-title v-if="post.title" primary-title>
              <div>
                <h3 class="headline mb-0">{{post.title}}</h3>
                <!--<span><v-icon class="published">query_builder</v-icon>{{post.createdOn}}</span>-->
              </div>
            </v-card-title>
            <v-card-text v-if="post.shortLead" v-html="formatLinkTargetBlank(post.shortLead)"/>
            <v-card-actions>
              <v-btn :to="`articles/${post.slug}`" flat>More...</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm12>
          <hotel-booking/>
        </v-flex>
        <!-- <v-flex xs12 sm6>
          <important-dates/>
        </v-flex>-->
      </v-layout>
    </v-container>
    <!-- <v-container grid-list-md>
      <v-flex xs12>
        <organising-committee/>
      </v-flex>
    </v-container> -->
  </v-flex>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { formMixin } from "@/mixins/formMixin";
import OrganisingCommitteePage from "./OrganisingCommitteePage";
import ImportantDates from "../widgets/ImportantDates";
import HotelBooking from "../widgets/HotelBooking";

export default {
  name: "practical-information",
  components: {
    OrganisingCommitteePage,
    ImportantDates,
    HotelBooking
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
        request: "practical-information",
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
