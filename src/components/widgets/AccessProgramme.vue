<template>
  <v-card id="test">
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">Access Programme</h3>
      </div>
    </v-card-title>
    <v-card-text>
      Explore the 2023 programme, this year you will find a range of exciting formats from hot topics to round table, with world renown experts from ERS and ESRS providing you scientific updates, as well as giving you insights from some of the most advanced sleep centres in Europe.

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
        href="https://k4.ersnet.org/prod/v2/front/program/?e=448"
      >
        <v-btn color="accent" class="ml-2 mb-2">Browse the online programme</v-btn>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        style="text-decoration: none;"
        href="https://ers.box.com/s/gof0ux4cviixfmbv26u2vbjdqtfb79dy"
      >
        <v-btn flat color="accent" class="ml-2 mb-2">
          <v-icon left dark>save_alt</v-icon>Download the programme in PDF
        </v-btn>
      </a>
      <br />
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
