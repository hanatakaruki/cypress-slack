import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

let name
let messageText

Given('I open {string} page', (url) => {
  cy.visit(url)
  cy.frameLoaded('.iframe-class')
})

When('I set my name to {string}', (username) => {
  name = username
  cy.iframe().find('.usernameInput').type(username).type('{enter}')
})

When('I sent message {string}', (message)=>{
  messageText = message
  cy.iframe().find('.inputMessage').type(message).type('{enter}')
})

Then('I should see my message',()=>{
  cy.iframe().contains(name).should('be.visible')
  cy.iframe().contains(messageText).should('be.visible')
})