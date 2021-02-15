export const formMixin = {
  methods: {
    formatLinkTargetBlank(html) {
      if (html) return html.replace(/<a /g, '<a target="_blank" ');
      return html;
    },
    hasSubmitAbstractOption() {
      let today = new Date();
      today.setHours(0, 0, 0, 0);
      let appearDate = new Date("2020-09-15");
      appearDate.setHours(0, 0, 0, 0);
      if (today >= appearDate) {
        return true;
      }
      return false;
    },
    organisingCommitteeTitle(){
      return "Organising Committee"
    },
    organisingCommitteeLead(){
      return "The 2021 S&B organising committee brings perspectives from all over Europe, and a range of different roles in patient care."
    },
    videoResourse(){
      return {
        videoNews: [
          {
            videoNewsUrl: 'https://www.youtube-nocookie.com/embed/zJG1toNLn5U?rel=0',
            videoNewsTitle: 'Sleep and Breathing 2021',
            videoNewsSubTitle: '',
            videoNewsLead: 'Taking place online from 16–17 April, 2021, the Sleep and Breathing conference offers an integrated approach to the investigation and treatment of sleep disorders and will focus on professional development and education. The conference is organised by the European Respiratory Society (ERS) and the European Sleep Research Society (ESRS).'
          },
          // {
          //   videoNewsUrl: 'https://vimeo.com/510715784',
          //   videoNewsTitle: 'Cough assistance and secretion management in neuromuscular disease',
          //   videoNewsSubTitle: '',
          //   videoNewsLead: 'Tiina Andersen (Bergen, Norway). Cough assistance and secretion management in neuromuscular disease.'
          // },
        //   {
        //     videoNewsUrl: 'https://www.youtube.com/embed/ddSHD-arwC4',
        //     videoNewsTitle: 'Air pollution and COVID-19 - Clearing the air and charting a post-pandemic course',
        //     videoNewsSubTitle: '',
        //     videoNewsLead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        // },
        ]
      }
    },
  }
};
