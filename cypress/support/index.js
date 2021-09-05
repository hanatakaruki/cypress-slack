// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

after(() => {
  let reportedTests
  let url = 'https://api.slack.com/apps/A0115472K32/incoming-webhook'
  const findTests = suite => {
    suite.tests.forEach(test => {
      if (test.state === "failed") {
        reportedTests = {
          "username": "Report notifier",
          "text": "New Report  <!here>",
          "attachments": [{
            "color": "#FF0000",
            "fields": [{
                "title": test.parent.title + " " + test.title,
                "value": test.state,
                "short": true
              }

            ]

          }]
        }
        cy.request({
          method: 'POST',
          url: url,
          followRedirect: false,
          headers: {
            'Content-Type': 'application/json'
          },
          body: reportedTests
        })
      }
    })
  }
})