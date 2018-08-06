<template>

  <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>
    <v-container grid-list-md style="margin-top:-145px;">
      <v-layout v-if="articles" row wrap>
        <v-flex  xs12 sm12 md12 lg12>
          <v-card id="test">
            <v-toolbar card color="white">
              <v-toolbar-title v-if="category" class="headline grey--text">{{category.title}}</v-toolbar-title>
            <v-spacer></v-spacer>
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text v-if="category" v-html="categoryContent"></v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container grid-list-md>
      <v-layout v-if="articles" row wrap>
        <v-flex xs12 sm6>
          <important-dates />
        </v-flex>

        <v-flex  sm6>
          <v-flex xs12>
            <access-programme />
          </v-flex>
          <v-flex xs12>
            <video-conference />
          </v-flex>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container grid-list-md>
      <v-layout v-if="articles" row wrap>
        <v-flex v-for="post of articles" xs12 sm6 :key="post.slug">
          <v-card>
            <v-card-media v-if="post.image" :src="post.image" height="200px">
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{post.title}}</h3>
                <!--<span><v-icon class="published">query_builder</v-icon>{{post.createdOn}}</span>-->
              </div>
            </v-card-title>
            <v-card-text v-html="post.shortLead">
            </v-card-text>
            <v-card-actions>
              <v-btn :to="`articles/${post.slug}`" flat>More...</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container grid-list-md>
      <v-flex xs12 sm12 md12 lg12>
        <organising-committee />
      </v-flex>
    </v-container>
    <ads />
  </v-flex>
</template>

<script>
import { mapActions } from 'vuex'
// import * as config from '../../config'
import Ads from '../widgets/Ads'
import OrganisingCommittee from '../widgets/OrganisingCommittee'
import ImportantDates from '../widgets/ImportantDates'
import AccessProgramme from '../widgets/AccessProgramme'
import VideoConference from '../widgets/VideoConference'

export default {
  name: 'Home',
  data () {
    return {
      fixed: false
    }
  },

  created () {
    this.fetchData()
  },

  computed: {
    slug () {
      return this.$store.getters.slug
    },

    path () {
      return this.$store.state.route.path
    },

    articles () {
      return this.$store.state.pages[this.path].items
    },

    category () {
      return this.$store.state.pages[this.path].category
    },

    categoryContent () {
      return this.category.body + `<img 
          alt="Sleep and Breathing Sponsors" 
          src="./img/sleep-and-breathing-sponsors.png"
          class="sponsors"
        >`
    }

  },

  methods: {
    ...mapActions([
      'getCategory',
      'pageNumber'
    ]),
    fetchData () {
      const payload = {
        pageNumber: parseInt(this.$route.params.id) || this.page,
        request: this.slug,
        skip: this.$store.state.skip
      }
      this.getCategory(payload)
    }
  },

  components: {
    Ads,
    OrganisingCommittee,
    ImportantDates,
    AccessProgramme,
    VideoConference
  }

}
</script>

<style>
  @import '../../css/fonts.css';
  .published {
    font-size:18px!important;
    padding-right:5px;
  }

  .card__text {
    min-height: 140px;
  }

  .sponsors {
    height: 75px;
  }

</style>
