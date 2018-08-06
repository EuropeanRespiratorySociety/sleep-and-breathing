<template>
  <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>
    <v-card v-if="article" id="test" class="card--flex-toolbar">
      <v-toolbar card class="white">
        <v-toolbar-title v-if="article.title" class="headline grey--text text--darken-3">{{article.title}}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <v-divider></v-divider>
      <v-card-text>
        <span v-if="article.leadParagraph" v-html="article.leadParagraph"></span>
        <span v-if="article.body" v-html="article.body"></span>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Article',
  data () {
    return {
      fixed: false,
      article: this.item
    }
  },

  created () {
    this.fetchData()
  },

  watch: {
    '$route' () {
      this.fetchData()
    }
  },

  computed: {

    slug () {
      return this.$store.getters.slug
    },

    path () {
      return this.$store.state.route.path
    },

    item () {
      return this.$store.state.pages[this.path]
    }
  },

  methods: {
    ...mapActions([
      'getArticle',
      'setArticle'
    ]),
    fetchData () {
      const payload = {
        slug: this.$route.params.slug
      }
      this.getArticle(payload).then(res => {
        if (res !== undefined) {
          this.article = res.item.data
        } else {
          this.article = this.$store.state.pages[this.path]
        }
      })
    }
  }

}
</script>

<style>
  @import '../../css/fonts.css';

  .published {
    font-size:18px!important;
    padding-right:5px;
  }

  h3 {
    font-size: 20px!important;
    font-weight: 500!important;
    line-height: 1!important;
    letter-spacing: .02em!important;
    margin: 20px 0 4px 0!important;
  }

  .card__text > span > ul {
    padding-left: 30px!important;
  }

</style>
