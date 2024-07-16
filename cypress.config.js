const { defineConfig } = require("cypress");

const cucumber = require('cypress-cucumber-preprocessor').default

async function setupNodeEvents(on,config){
  // implement node event listeners here
  return config;
}


module.exports = defineConfig({
  e2e: {
   setupNodeEvents,
  // specPattern:'cypress/integration/Day1/*.js',
   specPattern:'cypress/integration/Day1/Testing PO'
  }
});
