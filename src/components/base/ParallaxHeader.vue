<template>
  <div>
    <v-toolbar app fixed dark flat id="header-t" :class="setClass()" v-scroll="onScroll" prominent >
      <v-toolbar-side-icon @click.stop="toggle"></v-toolbar-side-icon>
      <a href="/"><img src="../../assets/logo-title2.png" width="38" d-flex v-if="!drawer" /></a>
      <v-toolbar-title v-if="!drawer" class="mb-1">Sleep and Breathing <span v-if="offline">currently offline</span></v-toolbar-title>
    </v-toolbar>
    <v-parallax src="https://sleepandbreathing.org/img/background-image2.png" class="backgroundimage" height="300">
    </v-parallax>
  </div>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex'

export default {
  name: 'parallax-header',
  data () {
    return {
    }
  },
  computed: {
    ...mapState('base', [
      'drawer'
    ]),

    ...mapState([
      'offline'
    ])
  },

  methods: {
    ...mapActions('base', [
      'toggleDrawer'
    ]),
    setClass () {
      if (this.offline) {
        return 'error elevation-0'
      }
      return 'primary transparent elevation-0'
    },
    toggle () {
      this.toggleDrawer()
    },
    onScroll (e) {
      let container = document.getElementById('header-t')
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop

      if (this.offsetTop > 100 && !this.offline) {
        container.classList.add('primary')
        container.classList.remove('transparent')
      }

      if (this.offsetTop < 100 && !this.offline) {
        container.classList.add('transparent')
        container.classList.remove('primary')
      }
    }
  }

}

</script>