<template>
  <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>
    <v-card id="test" class="card--flex-toolbar">
      <v-toolbar card class="white">
        <v-toolbar-title
          class="headline grey--text text--darken-3"
        >Organising Committee</v-toolbar-title>
      </v-toolbar>
      <v-divider />
      <v-card-text>
        <p v-html="lead" ></p>
        <v-container grid-list-lg>
          <v-layout  wrap >
            <template v-for="(item, index) in items">
              <v-flex lg12 xl12 v-if="item.header" :key="item.header">
                <h3 class="mb-4">{{ item.header }}</h3>
              </v-flex>
              <v-flex lg12 xl12 xs12  v-if="item.divider" :key="index">
                <v-divider></v-divider>
              </v-flex>

            <v-flex v-if="item.title" :key="index" xl6  >
              <v-card flat>
                <v-layout row>
                  <v-flex shrink>
                      <v-avatar v-if="item.avatar" :key="item.avatar" size="100px">
                        <img
                          :src="item.avatar"
                          contain
                            />
                      </v-avatar>
                  </v-flex>
                  <v-flex >
                    <v-card-title primary-title>
                      <div>
                        <div v-if="item.title"
                          :key="item.title" class="title"> {{ item.title }}</div>
                        <div v-if="item.subtitle" :key="item.subtitle" v-html="item.subtitle" class="mt-2"></div>
                      </div>
                    </v-card-title>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
            </template>
          </v-layout>

          <!-- <v-layout  wrap>
            <template v-for="(items, index) in items">
              <v-flex lg12 xl6>
                <h3 v-if="item.header"
                      :key="item.header" class="mb-4">{{ item.header }}</h3>
              </v-flex>
            <v-flex lg12 xl6>
              <v-divider
                v-if="item.divider"
                :key="index"
              ></v-divider>
              <v-card flat>
                <v-layout row>
                  <v-flex shrink>
                      <v-avatar v-if="item.avatar" :key="item.avatar" size="100px" class="pr-2">
                        <img
                          :src="item.avatar"
                          contain
                            />
                      </v-avatar>
                  </v-flex>
                  <v-flex >
                    <v-card-title primary-title>
                      <div>
                        <div v-if="item.title"
                          :key="item.title" class="title"> {{ item.title }}</div>
                        <div v-if="item.subtitle" :key="item.subtitle" v-html="item.subtitle" class="mt-2"></div>
                      </div>
                    </v-card-title>
                  </v-flex>
                </v-layout>
              </v-card>
              </v-flex>
            </template>
          </v-layout> -->


        </v-container>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
import { mapActions } from "vuex";
import { formMixin } from "@/mixins/formMixin";

export default {
  name: "organising-committee-page",
  mixins: [formMixin],
  data() {
    return {
      fixed: false,
      lead: "The 2021 S&B organising committee brings perspectives from all over Europe, and a range of different roles in patient care.",
      items: [
        { header: 'CHAIRS' },
        {
          avatar: '../img/people/image-Maria-Bonsignore.png',
          title: 'Marisa Bonsignore',
          subtitle: "<p>Researcher and Professor of sleep and breathing disorders, including obstructive sleep apnoea (OSA) at the University of Palermo, Italy.</p>"
        },
        {
          avatar: '../img/people/img-Walter-McNicholas.png',
          title: 'Walter McNicholas',
          subtitle: "<p>Consultant in Respiratory and Sleep Medicine at St. Vincent's Hospital Group, Dublin, Ireland.<br />Newman Clinical Research Professor at UCD and a Principal Clinical Investigator at the UCD Conway Institute.<br />Former President of the European Sleep Research Society (ESRS) and the European Respiratory Society (ERS).</p>"
        },
        { divider: true},
        { header: 'VICE CHAIRS' },
        {
          avatar: '../img/people/img-Lino-Nobili.png',
          title: 'Lino Nobili',
          subtitle: "<p>Chief of the Centre of Sleep Medicine of the Department of Neuroscience of the Niguarda Hospital in Milan, and part of the “C. Munari” Epilepsy Surgery Centre, Italy.<br />Assistant Secretary of the ESRS.</p>"
        },
        {
          avatar: '../img/people/img-Anita-Simonds.png',
          title: 'Anita Simonds',
          subtitle: "<p>ERS President. Consultant in respiratory and sleep medicine. Professor of respiratory and sleep medicine.<br />National Heart and Lung Institute, Imperial College London, United Kingdom</p>"
        },
        { divider: true},
        { header: 'MEMBERS'},
        {
          avatar: '../img/people/img-Pierre-Herve-Luppi.png',
          title: 'Pierre-Hervé Luppi',
          subtitle: "<p>Research Director at the CNRS.<br />Head of the team “Physiopathologie des réseaux neuronaux du cycle veille-sommeil” of the centre of Neuroscience of Lyon, at the University Claude Bernard Lyon, France.<br />President of the European Sleep Research Society.<br />Fellow of the “Société de Neuroscience”, Society For Neuroscience, IBRO, “Société Française de Recherche sur le Sommeil (SFRS)”, European Sleep Research Society and the Sleep Research Society.</p>"
        },
        {
          avatar: '../img/people/img-Tiina-Paunio.png',
          title: 'Tiina Paunio',
          subtitle: "<p>Research Professor and Vice Dean of Education at Faculty of Medicine, UH.<br />Vice President (Clinical) and Chair of the Education Committee and Somnologist examination of European Sleep Research Society.<br />Deputy Editor for Journal of Sleep Research.</p>"
        },
        {
          avatar: '../img/people/img-Winfried-Randerath.png',
          title: 'Winfried Randerath',
          subtitle: "<p>Chief physician and medical director<br />Bethanien Hospital, Clinic for Pneumology and Allergology, Center for Sleep Medicine and Respiratory Care Institute for Pneumology at the University of Cologne, Germany</p>"
        },
        {
          avatar: '../img/people/img-Sophia-E-Schiza.png',
          title: 'Sophia E. Schiza',
          subtitle: "<p>Head of Sleep Disorders Unit, Associate Professor of Respiratory Medicine<br />University of Crete Medical School, Greece.</p>"
        },
        {
          avatar: '../img/people/img-Milan-Sova.png',
          title: 'Milan Sova',
          subtitle: "<p>Adult Pulmonologist/Clinician, Department of Pulmonary Diseases and TB, Olomouc University Hospital</p>"
        },
        {
          avatar: '../img/people/img-Elizabeth-Hill.png',
          title: 'Elizabeth Hill',
          subtitle: "<p>President of the European Society of Sleep Technologists, a member of the European Sleep Research Society exam subcommittee and part of the British Sleep Society Executive Committee.<br />Sleep Research Fellow, Centre for Clinical Brain Sciences, Sleep Research Unit</p>"
        },
        {
          avatar: '../img/people/img-Erna-Sif-Arnardottir.png',
          title: 'Erna Sif Arnardottir',
          subtitle: "<p>Director of the Reykjavik University Sleep Institute and Assistant Professor, Reykjavik University.<br />Secretary of the European Sleep Research Society.<br />President of the Icelandic Sleep Research Society.<br />Chair of the Assembly of National Sleep Societies and European Sleep Research Society (ANSS-ESRS) &ldquo;Beyond the AHI&rdquo; task force.</p>"
        },
        {
          avatar: '../img/people/img-Isaac-Almendros-Lo.png',
          title: 'Isaac Almendros Lo',
          subtitle: "<p>Assistant professor, School of Medicine, University of Barcelona, Spain.<br /Member of the College of Experts of European Respiratory Society.<br />Member of the Early Career Network of American Journal of Respiratory and Critical Care of Medicine.</p>"
        }
      ]

    };
  },

  computed: {
    slug() {
      return this.$store.getters.slug;
    },

    path() {
      return this.$store.state.route.path;
    },

    item() {
      return this.$store.state.pages[this.path];
    },
  },
  watch: {
    $route() {
      this.fetchData();
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    ...mapActions(["getArticle"]),
    fetchData() {
      const payload = {
        slug: this.$route.params.slug,
      };
      this.getArticle(payload).then((res) => {
        if (res !== undefined) {
          this.article = res.item.data;
        } else {
          this.article = this.$store.state.pages[this.path];
        }
      });
    },
  },
};
</script>

<style>
@import "../../css/fonts.css";

.published {
  font-size: 18px !important;
  padding-right: 5px;
}

h3 {
  font-size: 20px !important;
  font-weight: 500 !important;
  line-height: 1 !important;
  letter-spacing: 0.02em !important;
  margin: 20px 0 4px 0 !important;
}

.v-card__title--primary{
  padding-top: 16px;
}

</style>
