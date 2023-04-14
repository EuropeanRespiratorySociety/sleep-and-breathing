<template>
  <v-card id="test">
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{faqTitle()}}</h3>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn to="/practical-information/faq" flat>More...</v-btn>
      <v-spacer />
    </v-card-actions>

  </v-card>
</template>
<script>
import { formMixin } from "@/mixins/formMixin";
export default {
  name: "faq",
  mixins: [formMixin]
};
</script>

<style>
@import "../../css/fonts.css";
</style>
