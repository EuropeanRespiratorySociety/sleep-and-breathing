<template>
  <v-card id="test">
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">Programme</h3>
      </div>
    </v-card-title>
    <v-card-text>A call for topics is now open.</v-card-text>
    <v-card-actions>
      <v-btn to="/programme" flat>More...</v-btn>
      <v-spacer />
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "programme-card"
};
</script>

<style>
@import "../../css/fonts.css";
</style>
