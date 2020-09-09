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
    }
  }
};
