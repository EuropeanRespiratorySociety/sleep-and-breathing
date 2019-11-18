<template>
  <v-card id="test">
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">Access Programme 2019</h3>
      </div>
    </v-card-title>
    <v-card-text>
      Please use one of the button below to access our programme.
      <!-- <br>
      <span class="caption">
        &nbsp;(PDF document : Last updated on
        <strong>12 November</strong>)
      </span>-->
    </v-card-text>
    <div class="ml-2 pb-3">
      <a
        target="_blank"
        style="text-decoration: none;"
        href="http://k4.ersnet.org/prod/v2/front/program/?e=114"
      >
        <v-btn color="accent" class="ml-2 mb-2">Browse the online programme</v-btn>
      </a>
      <a
        target="_blank"
        style="text-decoration: none;"
        href="https://ers.box.com/shared/static/h73cc6rm9pdc5j4hao8e7qgk0506jz2a.pdf"
      >
        <v-btn flat color="accent" class="ml-2 mb-2">
          <v-icon left dark>save_alt</v-icon>Download the programme in PDF
        </v-btn>
      </a>
      <br >
    </div>
  </v-card>
</template>
<script>
export default {
  name: "access-programme"
};
</script>

<style>
@import "../../css/fonts.css";
</style>
