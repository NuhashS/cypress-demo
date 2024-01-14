# Description
This is a demonstration of the Cypress framework, using the Cypress framework.

# Folder Scructure

## Downloads

Directory where any downloaded objects will be stored.

## E2E

Directory where all tests are located.

## Fixture

Directory containing any files for mock or data structures required for the e2e tests.

## Screenshots

Directory containing screenshots taken either after a failed test or from implicit screenshots taken during tests (i.e/ When the command `cy.screenshot` is used)

## Support

Any additional support files required.

### Command.js

Any commands that can be reused by multiple tests.

### E2E.js

Any configurations that need to be made/run before your tests

## cypress.config.js

Parameters for browsers (i.e/ Viewport size, base URL, etc)

# How to run tests

From the `src/` folder:

1. `npm install` the packages
2. `npm test` will run all the tests in e2e.cy.js. (Please note: Default Browser is Chrome)

There is also support for Firefox and Electron, but please note: Test 3 will fail in Firefox, as Cypress has no native way to read from the clipboard in that browser.

To run all tests, run `npm run test:all`