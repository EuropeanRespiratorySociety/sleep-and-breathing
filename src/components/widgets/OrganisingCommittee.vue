<template>
  <v-card id="test">
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{organisingCommitteeTitle()}}</h3>
      </div>
    </v-card-title>
    <v-card-text>{{organisingCommitteeLead()}}</v-card-text>
    <v-card-actions>
      <v-btn to="/programme/organising-committee" flat>More...</v-btn>
      <v-spacer />
    </v-card-actions>

  </v-card>
</template>
<script>
import { formMixin } from "@/mixins/formMixin";
export default {
  name: "organising-committee",
  mixins: [formMixin],

};
</script>

<style>
@import "../../css/fonts.css";
</style>
