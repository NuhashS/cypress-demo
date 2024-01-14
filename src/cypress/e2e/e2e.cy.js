describe('Cypress Website Demo Test', () => {
    beforeEach(() => {
        cy.visit("");
        cy.on('uncaught:exception', () => {
            return false;
        })
    })
    /*
    afterEach(() => {
        cy.screenshot()
    })
    */
    it('User scrolls down to check weekly downloads number => Success', () => {
        
        // User action
        cy.contains('Loved by OSS, trusted by Enterprise').scrollIntoView();
        
        //Check results
        cy.contains('Weekly downloads').should('be.visible').then(($weeklyDownloads) => {
            const weeklyDownloadsNumber = $weeklyDownloads.siblings();

            // Check for number beside weekly downloads
            const weeklyDownloadsNumberText = weeklyDownloadsNumber.text()
            const weeklyDownloadsNumberValue = parseInt(weeklyDownloadsNumberText, 10)

            expect(weeklyDownloadsNumberValue).to.be.a('number')
        })
    })

    it('User is able to click on Company and then on "About Cypress" => Success', () =>{
        
        // Hover over "Company" dropdown
        cy.getTestID('dropdown-company').trigger('mouseover')
        
        // Wait for dropdown to load
        cy.getTestID('submenu').should('be.visible')

        // Click button
        cy.contains('About Cypress').click()

        //Check if you've been redirected to the about-us page
        cy.url().should('include', '/about-us')
    })

    it('User is able to click on “Install” and then on “npm install cypress” and make sure the copied text is “npm install cypress --save-dev” => Success', () => {

        // Find and click the install button
        cy.getTestID('header-install').click()

        //Click the button to copy the npm install cypress text
        cy.getTestID('modal-install-copy').click()

        //Check that the text copied is what's expected
        cy.getCopiedText("npm install cypress --save-dev")
    })

    it.only('User is able to click on “Product” and then “visual review” => Success', () =>{
        
        // Hover over "Company" dropdown
        cy.getTestID('dropdown-product').trigger('mouseover')
        
        // Wait for dropdown to load
        cy.getTestID('submenu').should('be.visible')

        // Click button
        cy.contains('Visual Reviews').click()

        //Check if you've been redirected to the about-us page
        cy.url().should('include', 'visual_reviews')
    })
})