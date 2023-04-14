<template>
  <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>
    <v-card id="test" class="card--flex-toolbar">
      <v-toolbar card class="white">
        <v-toolbar-title
          class="headline grey--text text--darken-3"
        >{{ faqTitle() }}</v-toolbar-title>
      </v-toolbar>
      <v-divider />
      <v-card-text>
        <v-container grid-list-lg>
          <v-layout  wrap >
            <template>
              <v-expansion-panel focusable >
                <v-expansion-panel-content
                  v-for="(faq,index) in faqs"
                  :key="index"
                >
                  <template v-slot:header>
                    <div v-if="faq.title" :key="index">{{ index + 1 + "." }}&nbsp;{{ faq.title }}</div>
                  </template>
                  <v-card v-if="faq.answer" :key="faq.answer" >
                    <v-card-text>
                      <div v-html="faq.answer"></div>
                      <p v-if="faq.link"><a :href="faq.link">{{ faq.linkText }}</a></p>
                    </v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </template>

          </v-layout>

        </v-container>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
import { mapActions } from "vuex";
import { formMixin } from "@/mixins/formMixin";

export default {
  name: "faq-page",
  mixins: [formMixin],
  data() {
    return {
      fixed: false,
      faqs: [
        {
          title: 'How can I access the conference platform?',
          answer: '<p>Registered participants can access the live streaming sessions and replays via the virtual platform by logging in with their myERS credentials.</p>',
          linkText: 'The S&B conference platform',
          link: 'https://sleepandbreathing2023.key4.live/'
        },
        {
          title: 'Will on-site participants have access to live streaming sessions?',
          answer: '<p>Yes, all registered participants will have access to the virtual platform to access live streaming sessions and replays.</p><p>Participants registered for Day pass will access the sessions corresponding to the day registered.</p>'
        },
        {
          title: 'Will the live sessions be recorded and available as replay?',
          answer: 'All sessions will be live streamed with the exception of the following:<ul><li>Skills workshop</li><li>Clinical updates</li><li>Thematic poster session</li></ul><br />The replay of live sessions should generally be available after 24 hours on the conference platform.<p>Replays will remain accessible until October 2023.</p>'
        },
        {
          title: 'When will the session replays be available?',
          answer: '<p>The replay of live sessions should generally be available after 24 hours on the conference platform.</p><p>Replays will remain accessible until October 2023.</p>'
        },
        {
          title: 'What is the recommended browser for the live stream?',
          answer: 'We recommend all participants to use Google Chrome as a browser.'
        },
        {
          title: 'Will a certificate of attendance be available for the conference?',
          answer: '<p>Yes, the attendance certificates will be downloadable one week after the conference on your myERS account.</p>'
        },
        {
          title: 'Will a certificate of attendance be available for the conference?',
          answer: '<p>The Sleep and Breathing conference 2023, Prague, Czech Republic, 20/04/2023-22/04/2023 has been accredited by <strong>the European Accreditation Council for Continuing Medical Education (EACCME®) with 19 European CME credits (ECMEC®s)</strong>. Each medical specialist should claim only those credits that he/she actually spent in the educational activity.</p><p>This event has been granted <strong>26 CME credits by the European Board for Accreditation in Pneumology (EBAP)</strong>.</p><p>The number of credits that you will receive corresponds to your attendance during the conference.</p>Please note that you need to sign the register of attendance each day to ensure that you receive the CME credits.<p>Participants of the live stream can claim CME credits for the hours spent viewing the sessions live.</p><p>Participants will not accrue credits for watching session replays.</p>'
        },
        {
          title: 'Will a CME certificate be available for participants of the live stream?',
          answer: '<p>Participants of the live stream can claim CME credits for the hours spent viewing the sessions live.</p><p>CME certificates will be downloadable one week after the conference on your myERS account.</p><p>Participants will not accrue credits for watching session replays.</p>'
        },
        {
          title: 'Will participants receive CME credits for session replays?',
          answer: '<p>Participants will not accrue credits for watching session replays.</p>'
        }
      ]
    };
  },

  computed: {
    slug() {
      return this.$store.getters.slug;
    },

    path() {
      return this.$store.state.route.path;
    },

    item() {
      return this.$store.state.pages[this.path];
    }
  },
  watch: {
    $route() {
      this.fetchData();
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    ...mapActions(["getArticle"]),
    fetchData() {
      const payload = {
        slug: this.$route.params.slug
      };
      this.getArticle(payload).then(res => {
        if (res !== undefined) {
          this.article = res.item.data;
        } else {
          this.article = this.$store.state.pages[this.path];
        }
      });
    }
  }
};
</script>

<style>
@import "../../css/fonts.css";
</style>
