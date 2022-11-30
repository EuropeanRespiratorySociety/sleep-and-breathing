<template>
  <v-card id="test">
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">Hotel booking</h3>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-spacer />
      <a
        target="_blank"
        style="text-decoration: none;"
        href="https://www.clarioncongresshotelprague.com/en/reservations/c_1?price_group=64&date_in=2023-04-20&date_out=2023-04-22&hotel_id=2679&guide_id=802&hotel_id=2679&show_filter=0"
      >
        <v-btn color="accent" class="right mb-2 mr-2">Book your hotel room now</v-btn>
      </a>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "hotel-booking"
};
</script>

<style>
@import "../../css/fonts.css";
</style>
