const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'j2ssa9',
    "reporter": "mochawesome",
    "reporterOptions": {
      "reportDir": "cypress/reports",
      reportPageTitle: 'ACME Login Test',
      charts: true,
      embeddedScreenshots: true,
      inlineAssets: false,
      saveAllAttempts: false,
      "overwrite": true,
      "html": true,
      "json": false
    },
  e2e: {
    setupNodeEvents(on, config) {
      
    },
  },
});

