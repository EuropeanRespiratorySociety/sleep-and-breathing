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
            videoNewsUrl: 'https://www.youtube.com/embed/WZLDc9BR17M?rel=0',
            videoNewsTitle: 'ERS/ ESRS Sleep and Breathing Conference 2019',
            videoNewsSubTitle: 'Video News Subtitle',
            videoNewsLead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at nisi ac velit pretium cursus. Phasellus congue leo in dolor vehicula aliquet.'
          },
          {
            videoNewsUrl: 'https://www.youtube.com/embed/ddSHD-arwC4',
            videoNewsTitle: 'Air pollution and COVID-19 - Clearing the air and charting a post-pandemic course',
            videoNewsSubTitle: '',
            videoNewsLead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        ]
      }
    },
  }
};
