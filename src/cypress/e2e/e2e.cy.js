describe('Cypress Website Demo Test', () => {
    beforeEach(() => {
        cy.visit("");
    })

    it('User scrolls down to check weekly downloads number => Success', () => {
        
        // User action
        cy.contains('Loved by OSS, trusted by Enterprise').scrollIntoView();
        
        //Check results
        cy.contains('Weekly downloads').should('be.visible').then(($weeklyDownloads) => {
            const weeklyDownloadsNumber = $weeklyDownloads.siblings();

            const weeklyDownloadsNumberText = weeklyDownloadsNumber.text()
            const weeklyDownloadsNumberValue = parseInt(weeklyDownloadsNumberText, 10)

            expect(weeklyDownloadsNumberValue).to.be.a('number')
        })
    })
})