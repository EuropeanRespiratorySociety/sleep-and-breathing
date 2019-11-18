<template>
  <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>
    <v-card v-if="article" id="test" class="card--flex-toolbar">
      <v-toolbar card class="white">
        <v-toolbar-title v-if="article.title" class="headline grey--text text--darken-3">{{article.title}}</v-toolbar-title>
        <!-- <v-spacer/>
        <a target="_blank" style="text-decoration: none;" href="http://registration.sleepandbreathing.org/register.aspx?e=894">
          <v-btn color="accent">Registration</v-btn>
        </a> -->
      </v-toolbar>

      <v-divider/>
      <v-card-text>
        <span v-if="article.leadParagraph" v-html="formatLinkTargetBlank(article.leadParagraph)"/>
        <span v-if="article.body" v-html="formatLinkTargetBlank(article.body)"/>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
import { mapActions } from "vuex";
import { formMixin } from "@/mixins/formMixin";

export default {
  name: "Article",
  mixins: [formMixin],
  data() {
    return {
      fixed: false,
      article: this.item
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

.published {
  font-size: 18px !important;
  padding-right: 5px;
}

h3 {
  font-size: 20px !important;
  font-weight: 500 !important;
  line-height: 1 !important;
  letter-spacing: 0.02em !important;
  margin: 20px 0 4px 0 !important;
}

.card__text > span > ul {
  padding-left: 30px !important;
}
</style>

<style>
table {
  margin-top: 20px;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  border-radius: 2px;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  max-width: 100%;
  border-color: grey;
  display: table;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 2px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12) !important;
}

thead {
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
}

thead tr:first-child {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  height: 56px;
}

thead th {
  font-weight: 500;
  font-size: 12px;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  white-space: nowrap;
  text-align: center;
  display: table-cell;
}

thead th:first-child {
  padding: 0 24px;
}

tr {
  height: 56px;
  display: table-row;
}

tbody tr:hover {
  background-color: #e1e1e1;
  text-shadow: none;
}

tbody tr:not(:last-child) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

tbody td:first-child {
  padding: 0 24px;
}

tbody td:not(:first-child) {
  text-align: center;
}
</style>
