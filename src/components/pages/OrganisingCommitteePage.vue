<template>
  <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>
    <v-card id="test" class="card--flex-toolbar">
      <v-toolbar card class="white">
        <v-toolbar-title
          class="headline grey--text text--darken-3"
        >{{ organisingCommitteeTitle() }}</v-toolbar-title>
      </v-toolbar>
      <v-divider />
      <v-card-text>
        <p>{{ organisingCommitteeLead() }}</p>
        <v-container grid-list-lg>
          <v-layout  wrap >
            <template v-for="(committee, index) in committees">
              <v-flex lg12 xl12 v-if="committee.header" :key="committee.header">
                <h3 class="mb-4">{{ committee.header }}</h3>
              </v-flex>
              <v-flex lg12 xl12 xs12  v-if="committee.divider" :key="index">
                <v-divider></v-divider>
              </v-flex>

            <v-flex v-if="committee.title" :key="index" xl6  >
              <v-card flat>
                <v-layout row>
                  <v-flex shrink>
                      <v-avatar v-if="committee.avatar" :key="committee.avatar" size="100px">
                        <img
                          :src="committee.avatar"
                          contain
                            />
                      </v-avatar>
                  </v-flex>
                  <v-flex >
                    <v-card-title primary-title>
                      <div>
                        <div v-if="committee.title"
                          :key="committee.title" class="title"> {{ committee.title }}</div>
                        <div v-if="committee.subtitle" :key="committee.subtitle" v-html="committee.subtitle" class="mt-2"></div>
                      </div>
                    </v-card-title>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
            </template>
          </v-layout>


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
      committees: [
        { header: "CHAIRS" },
        {
          avatar: "../img/people/image-Maria-Bonsignore.png",
          title: "Marisa Bonsignore",
          subtitle:
            "<p>Researcher and Professor of sleep and breathing disorders, including obstructive sleep apnoea (OSA) at the University of Palermo, Italy.</p>"
        },
        {
          avatar: "../img/people/img-Dirk-Pevernagie.png",
          title: "Dirk Pevernagie",
          subtitle:
            "<p>Dirk Pevernagie is a pulmonologist and ESRS certifi ed somnologist who is currently working at the Ghent University and GhentUniversity Hospital.Vice-President of the ESRS.</p>"
        },
        { divider: true },
        { header: "VICE CHAIRS" },
        {
          avatar: "../img/people/img-Giuseppe-Plazzi.png",
          title: "Giuseppe Plazzi",
          subtitle:
            "<p>Giuseppe Plazzi, MD and PhD, is a neurologist, chair of child neurology at the University of Modena and Reggio Emilia and director ofthe Sleep Disorders, Narcolepsy and CNS Hypersomnias Center of the IRCCS - Istituto delle Scienze Neurologiche di Bologna. Heserves as president of the Italian Sleep Society (AIMS), vice-president of the EU-Narcolepsy Network (EU-NN), board member of theEuropean Sleep Research Society (ESRS) and co-chair of the rare neurological diseases panel of the European Academy ofNeurology (EAN).</p>"
        },
        {
          avatar: "../img/people/img-Anita-Simonds.png",
          title: "Anita Simonds",
          subtitle:
            "<p>ERS President. Consultant in respiratory and sleep medicine. Professor of respiratory and sleep medicine. National Heart and Lung Institute, Imperial College London, United Kingdom.</p>"
        },
        { divider: true },
        { header: "MEMBERS" },
        {
          avatar: "../img/people/img-Erna-Sif-Arnardottir.png",
          title: "Erna Sif Arnardottir",
          subtitle:
            "<p>Director of the Reykjavik University Sleep Institute and Assistant Professor, Reykjavik University.<br />Secretary of the European Sleep Research Society.<br />President of the Icelandic Sleep Research Society.<br />Chair of the Assembly of National Sleep Societies and European Sleep Research Society (ANSS-ESRS) &ldquo;Beyond the AHI&rdquo; task force.</p>"
        },
        {
          avatar: "../img/people/img-Walter-McNicholas.png",
          title: "Walter McNicholas",
          subtitle:
            "<p>Consultant in Respiratory and Sleep Medicine at St. Vincent's Hospital Group, Dublin, Ireland. Newman Clinical Research Professor at UCD and a Principal Clinical Investigator at the UCD Conway Institute. Former President of the European Sleep Research Society (ESRS) and the European Respiratory Society (ERS).</p>"
        },
        {
          avatar: "../img/people/img-Winfried-Randerath.png",
          title: "Winfried Randerath",
          subtitle:
            "<p>Chief physician and medical director<br />Bethanien Hospital, Clinic for Pneumology and Allergology, Center for Sleep Medicine and Respiratory Care Institute for Pneumology at the University of Cologne, Germany</p>"
        },
        {
          avatar: "../img/people/img-Sophia-E-Schiza.png",
          title: "Sophia E. Schiza",
          subtitle:
            "<p>Head of Sleep Disorders Unit, Associate Professor of Respiratory Medicine<br />University of Crete Medical School, Greece.</p>"
        },
        {
          avatar: "../img/people/img-Milan-Sova.png",
          title: "Milan Sova",
          subtitle:
            "<p>Adult Pulmonologist/Clinician, Department of Pulmonary Diseases and TB, Olomouc University Hospital</p>"
        },
        {
          avatar: "../img/people/img-Matteo-Bradicich.png",
          title: "Matteo Bradicich",
          subtitle:
            "<p>ECM representative of ERS Assembly 4 (Sleep disordered breathing). He is currently working as resident physician at Department of Internal Medicine of Spital Zollikerberg (Switzerland), in the framework of the specialisation programme in internal medicine and pulmonology. His main research topics in the field of sleep medicine are obstructive sleep apnoea-related cardiovascular pathophysiology, domotics applied to sleep disordered breathing and obstructive sleep apnoea diagnostics.</p>"
        },
        {
          avatar: "../img/people/img-Refika-Hamutcu-Ersu.jpg",
          title: "Refika Hamutcu Ersu",
          subtitle:
            "<p>Professor of pediatrics at the University of Ottawa, Canada and director of sleep laboratory and home ventilation program at Children’s Hospital of Eastern Ontario, Division of Pediatric Respirology. She is specialized in pediatric respirology and sleep medicine. Her research mainly focuses on the epidemiology and diagnosis of sleep-disordered breathing in children. She is the past chair elect of European Respiratory Respiratory Pediatric Physiology and Sleep Group and current member of European Respiratory.</p>"
        },
        {
          avatar: "../img/people/img-Sebastien-Baillieul.jpg",
          title: "Sébastien Baillieul",
          subtitle:
            "<p>ECM representative of the ESRS. He is a sleep physician and assistant professor, working in the Sleep Laboratory of the Grenoble Alpes University Hospital (Head: Prof. Renaud Tamisier) and is affiliated to the HP2 Laboratory (Hypoxia-Physiopathology Laboratory, Head: Prof. Jean-Louis Pépin) – INSERM U1300 and Grenoble Alpes University, France. His research is focused on sleep and sleep disordered breathing in the aftermath of stroke, and on the impact of sleep disturbances on neurological recovery.</p>"
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
    }
  },
  watch: {
    $route() {
      this.fetchData();
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    ...mapActions(["getArticle"]),
    fetchData() {
      const payload = {
        slug: this.$route.params.slug
      };
      this.getArticle(payload).then(res => {
        if (res !== undefined) {
          this.article = res.item.data;
        } else {
          this.article = this.$store.state.pages[this.path];
        }
      });
    }
  }
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

.v-card__title--primary {
  padding-top: 16px;
}
</style>
