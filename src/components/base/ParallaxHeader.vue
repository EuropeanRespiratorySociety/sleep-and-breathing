<template>
  <div>
    <v-toolbar v-scroll="onScroll" id="header-t" :class="setClass()" app fixed dark flat prominent>
      <v-toolbar-side-icon @click.stop="toggle" />
      <a href="/">
        <img v-if="!drawer" src="../../assets/logo-title-2021.png" width="38" d-flex >
      </a>
      <v-toolbar-title v-if="!drawer" class="mb-1">
        Sleep and Breathing
        <span v-if="offline">currently offline</span>
      </v-toolbar-title>
    </v-toolbar>
    <!-- <v-parallax src="https://sleepandbreathing.org/img/background-image2.png" class="backgroundimage" height="300"/> -->
    <v-parallax
      src="https://cdn.ersnet.org/preview/node/o:22b5fa445a50b82bc447"
      class="backgroundimage"
      height="300"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "parallax-header",
  data() {
    return {};
  },
  computed: {
    ...mapState("base", ["drawer"]),

    ...mapState("base", ["offline"])
  },

  methods: {
    ...mapActions("base", ["toggleDrawer"]),
    setClass() {
      if (this.offline) {
        return "error elevation-0";
      }
      return "primary transparent elevation-0";
    },
    toggle() {
      this.toggleDrawer();
    },
    onScroll() {
      let container = document.getElementById("header-t");
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;

      if (this.offsetTop > 100 && !this.offline) {
        container.classList.add("primary");
        container.classList.remove("transparent");
      }

      if (this.offsetTop < 100 && !this.offline) {
        container.classList.add("transparent");
        container.classList.remove("primary");
      }
    }
  }
};
</script>

<style>
.backgroundimage img {
  width: 2100px;
  background-position: bottom;
}
</style>
