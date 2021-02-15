<template>
  <v-card id="test">
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">Access Virtual Programme</h3>
      </div>
    </v-card-title>
    <v-card-text>
      Explore the 2021 Virtual Programme, this year you will find a range of exciting formats from hot topics to skills labs, with world renown experts from ERS and ESRS providing you scientific updates, as well as giving you insights from some of the most advanced sleep centres in Europe.
      <br />The programme is accredited and offers participants 12 CME points.

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
        href="https://k4.ersnet.org/prod/v2/front/program/?e=327"
      >
        <v-btn color="accent" class="ml-2 mb-2">Browse the online programme</v-btn>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        style="text-decoration: none;"
        href="https://ers.box.com/s/6zengr4nee0lq7aqm05z0622jge5atvw"
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
  name: "access-programme",
};
</script>

<style>
@import "../../css/fonts.css";
</style>
