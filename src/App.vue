<template>
  <v-app>
    <parallax-header/>
    <transition name="test" mode="out-in">
      <v-content >
        <v-container fluid>
          <v-layout row>
            <router-view/>
          </v-layout>
        </v-container>
      </v-content>
    </transition>
    <site-navigation/>
    <site-footer/>
  </v-app>
</template>

<script>
import SiteFooter from "@/components/base/SiteFooter";
import SiteNavigation from "@/components/base/SiteNavigation";
import ParallaxHeader from "@/components/base/ParallaxHeader";

export default {
  name: "App",
  components: {
    SiteFooter,
    SiteNavigation,
    ParallaxHeader
  },
  data() {
    return {
      offsetTop: 0,
      height: 300,
      rightDrawer: false
    };
  }
};
</script>

<style>
@import "./css/fonts.css";
.card--flex-toolbar {
  margin-top: -145px;
}

.transparent {
  background: transparent !important;
  background-size: cover;
}

.test-enter-active,
.test-leave-active {
  transition: opacity 1s;
}

.test-enter,
.test-leave-to {
  opacity: 0;
}

.backgroundimage img {
  width: 2000px;
}

.toolbar__title {
  margin-left: 7px !important;
}
</style>
