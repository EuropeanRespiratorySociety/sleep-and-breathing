export const formMixin = {
  methods: {
    formatLinkTargetBlank(html) {
      if (html) return html.replace(/<a /g, '<a target="_blank" ');
      return html;
    }
  }
};
