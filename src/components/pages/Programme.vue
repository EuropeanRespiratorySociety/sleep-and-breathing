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
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-card>
          <v-card-text>The aim of the Sleep and Breathing Conference is to support the exchange of knowledge among the international scientifi ccommunity. Writing an abstract for this conference is an important way for you to communicate your scientifi c research or clinicalpractice with your peers.
            <ol>
              <li>An abstract is a summary of a research publication. The study and results reported should be novel and not simply an extensionof previously published work.</li>

              <li>Accepted abstracts will be presented by the presenting author in Thematic Poster sessions.</li>
              <li>Accepted abstracts will be published in the <a href="https://openres.ersjournals.com/" target="_blank">ERJ Open Research</a>.</li>
            </ol>
            <br>
            <br>
            <p>We look forward to receiving your abstracts!</p>
          </v-card-text>
        </v-card>
      </v-layout>
      <v-layout v-if="articles" row wrap>
        <!-- <v-flex xs12 sm12>
          <access-programme />
        </v-flex> -->

        <v-flex xs12 sm12>
          <organising-committee />
        </v-flex>

        <!-- <v-flex xs12 sm12>
          <v-card>
            <v-card-title  primary-title>
              <div>
                <h3 class="headline mb-0">Organising Committee</h3>
              </div>
            </v-card-title>
            <v-card-text>The 2021 S&B organising committee brings perspectives from all over Europe, and a range of different roles in patient care.</v-card-text>
            <v-card-actions>
              <v-btn to="/programme/organising-committee" flat>More...</v-btn>
              <v-spacer />
              
            </v-card-actions>
          </v-card>
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
              <!-- <a
                v-if="post.slug === 'abstract-submission' && hasSubmitAbstractOption()"
                style="text-decoration: none;"
                href="https://my.ersnet.org/AbstractsSubmission/Main/SLBSubmission"
                target="_blank"
                rel="noopener"
              >
                <v-btn color="accent">Submit your abstract</v-btn>
              </a> -->
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
      </v-layout>
    </v-container>
  </v-flex>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { formMixin } from "@/mixins/formMixin";
import AccessProgramme from "../widgets/AccessProgramme";
import OrganisingCommittee from "../widgets/OrganisingCommittee";

export default {
  name: "programme",
  components: {
    AccessProgramme,
    OrganisingCommittee
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
        request: "programme",
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
