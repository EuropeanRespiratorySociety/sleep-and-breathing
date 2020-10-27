<template>
  <v-navigation-drawer
    v-resize="onResize"
    v-model="drawer"
    :mini-variant="mini"
    app
    fixed
    light
    disable-route-watcher
  >
    <div class="ml-5 mt-4">
      <img src="../../assets/Sleep_and_breathing_virtual_2021_logo_vector_rgb.svg" width="200" height="112" >
    </div> 

    <v-toolbar :style="!mini? 'margin-bottom:10px;' : ''" flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <i v-if="mini && showMini" class="icon-ers icon" style="font-size:50px; color:#d0043c;"/>
          </v-list-tile-avatar>
          <v-list-tile-content style="height:130px;padding: 10px 0">
            <v-list-tile-title style="height:100px;margin-top:30px">
              <!-- <div class="text-xs-center">
                <i class="icon-ers icon" style="font-size:80px; color:#d0043c;"></i>
              </div> -->
            </v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn v-if="showMini" icon @click.native.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list class="pa-1">
      <v-list-tile v-if="mini && showMini" @click.stop="mini = !mini">
        <v-list-tile-action>
          <v-icon>chevron_right</v-icon>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>

    <v-list dense class="pt-3">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        :to="!item.external ? item.path : null"
        :href="item.external ? item.path : null"
        :target="item.external ? '_blank' : null"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import paths from "../../router/paths";
// reminder this.$vuetify.breakpoint.mdAndUp -> let you know the size of screen (bool)
import { mapActions } from "vuex";

export default {
  name: "site-navigation",
  data() {
    return {
      mini: false,
      showMini: false,
      items: paths,
      right: null
    };
  },
  computed: {
    drawer: {
      get: function() {
        return this.$store.state.base.drawer;
      },
      set: function(value) {
        this.setDrawer(value);
      }
    }
  },

  created() {
    if (this.$vuetify.breakpoint.mdAndDown) {
      this.setMobile(true);
    }
  },
  methods: {
    ...mapActions("base", ["setDrawer", "setMobile"]),

    onResize() {
      this.$vuetify.breakpoint.mdAndDown
        ? this.setMobile(true)
        : this.setMobile(false);
    }
  }
};
</script>

<style>
@import "../../css/fonts.css";
.logo-title {
  height: 112px !important;
}
</style>
