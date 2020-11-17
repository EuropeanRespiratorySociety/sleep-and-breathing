<template>
  <v-layout row wrap>
    <v-flex xs12 sm6>
      <v-card
        color="rgba(141,111,172,0.8)"
        class="white--text"
        href="https://esrs.eu/esrs-sleep-medicine-textbook/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <v-container fluid grid-list-lg>
          <v-layout row>
            <v-flex xs8>
              <div>
                <div class="headline">Sleep Medicine Textbook</div>
                <p class="white--text">Endorsed by ERS</p>
                <p class="grey--text text--darken-4">
                  Based on the
                  <a
                    target="_blank"
                    href="https://onlinelibrary.wiley.com/doi/full/10.1111/jsr.12095"
                    rel="noopener noreferrer"
                  >Catalogue of knowledge and skills for sleep medicine</a>
                </p>
              </div>
            </v-flex>
            <v-flex xs4>
              <v-img src="./img/ESRS-Sleep-Medicine-Textbook_150.jpg" height="215px" contain />
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6>
      <v-card
        color="rgba(141,111,172,0.8)"
        class="white--text"
        href="https://books.ersjournals.com/content/ers-handbook-of-respiratory-sleep-medicine"
        target="_blank"
        rel="noopener noreferrer"
      >
        <v-container fluid grid-list-lg>
          <v-layout row>
            <v-flex xs8>
              <div>
                <div class="headline">ERS Handbook of respiratory sleep medicine</div>
                <p class="white--text">Endorsed by ESRS</p>
                <p
                  class="grey--text text--darken-4"
                >Accredited by European Board for Accreditation in Pneumology (EBAP)</p>
              </div>
            </v-flex>
            <v-flex xs4>
              <v-img src="./img/sleep-handbook.jpg" height="215px" contain />
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: "ads"
};
</script>

<style>
@import "../../css/fonts.css";
</style>
