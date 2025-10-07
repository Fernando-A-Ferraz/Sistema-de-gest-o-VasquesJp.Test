const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      env: {
      USER_EMAIL: "admin@vasques.dev",
      USER_PASSWORD: "******"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
