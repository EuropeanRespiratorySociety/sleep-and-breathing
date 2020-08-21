<template>
  <v-card id="test">
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">Organising Committee</h3>
      </div>
    </v-card-title>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 sm12 md4 class="pb-3">
          <v-list>
            <h6 class="subheading pb-2 pl-2">
              <strong>CHAIRS</strong>
            </h6>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Maria Bonsignore</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider />
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Walter McNicholas</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider />
          </v-list>
        </v-flex>

        <v-flex xs12 sm12 md4 class="pb-3">
          <v-list>
            <h6 class="subheading pb-2 pl-2">
              <strong>VICE CHAIRS</strong>
            </h6>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Lino Nobili</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider />
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Anita Simonds</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider />
          </v-list>
        </v-flex>

        <v-flex xs12 sm12 md4 class="pb-3">
          <v-list>
            <h6 class="subheading pb-2 pl-2">
              <strong>MEMBERS</strong>
            </h6>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Pierre-Hervé Luppi</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider />
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Tiina Paunio</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider />
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Winfried Randerath</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider />
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Sophia E. Schiza</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider />
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Milan Sova</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider />
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Elizabeth Hill</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider />
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Erna Sif Arnardottir</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider />
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Andrea Crespo Sedano</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: "organising-committee",
};
</script>

<style>
@import "../../css/fonts.css";
</style>
