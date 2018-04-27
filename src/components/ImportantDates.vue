<template>
  <v-card id="test">
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">Important Dates</h3>
      </div>
    </v-card-title>
    <v-list three-line>
      <v-list-tile>
          <v-list-tile-action>
            <v-icon color="primary">event</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>23 August 2018</v-list-tile-title>
            <v-list-tile-sub-title>Registration opens</v-list-tile-sub-title>
          </v-list-tile-content>
      </v-list-tile>
        <v-divider inset></v-divider>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon color="primary">event</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="mt-1">22 January 2019</v-list-tile-title>
            <v-list-tile-sub-title class="mb-1">Early bird registration closes</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider inset></v-divider>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon color="primary">event</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="mt-1">Late August 2018</v-list-tile-title>
            <v-list-tile-sub-title class="mb-1">abstracts submission opens</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider inset></v-divider>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon color="primary">event</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="mt-1">31 October 2018</v-list-tile-title>
            <v-list-tile-sub-title class="mb-1">abstracts submission deadline</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
    </v-list>
  </v-card>
</template>
<script>
export default {
  name: 'important-dates'
}
</script>

<style>
  @import '../css/fonts.css';
</style>
