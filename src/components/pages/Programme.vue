<template>
  <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>
    <v-card v-if="category" id="test" class="card--flex-toolbar">
      <v-toolbar card class="white">
        <v-toolbar-title v-if="category" class="headline grey--text">{{category.title}}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <v-divider></v-divider>
      <v-card-text v-if="category.body" v-html="category.body"></v-card-text>
    </v-card>
    <v-container grid-list-md>
      <v-layout v-if="articles" row wrap>
        <v-flex xs12 sm12>
          <access-programme />
        </v-flex>
        <v-flex v-for="post of articles" xs12 sm6 :key="post.slug">
          <v-card>
            <v-card-media v-if="post.image" :src="post.image" height="200px">
            </v-card-media>
            <v-card-title v-if="post.title" primary-title>
              <div>
                <h3 class="headline mb-0">{{post.title}}</h3>
                <!--<span><v-icon class="published">query_builder</v-icon>{{post.createdOn}}</span>-->
              </div>
            </v-card-title>
            <v-card-text v-if="post.shortLead" v-html="post.shortLead">
            </v-card-text>
            <v-card-actions>
              <v-btn :to="`articles/${post.slug}`" flat>More...</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-flex>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AccessProgramme from '../widgets/AccessProgramme'

export default {
  name: 'programme',
  data () {
    return {
      fixed: false
    }
  },

  created () {
    this.fetchData()
  },

  computed: {
    ...mapGetters([
      'slug'
    ]),

    path () {
      return this.$store.state.route.path
    },

    articles () {
      return this.$store.state.pages[this.path].items
    },

    category () {
      return this.$store.state.pages[this.path].category
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
        request: 'programme',
        skip: this.$store.state.skip,
        sortDirection: 1
      }
      this.getCategory(payload)
    }
  },
  components: {
    AccessProgramme
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
</style>
