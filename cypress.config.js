const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ymd2v7',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
