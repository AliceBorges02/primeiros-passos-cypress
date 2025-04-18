class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            middleNameField: "[name='middleName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            genderButton: ".oxd-radio-input",
            saveButton: "[type='submit']",
            genericCombobox: ".oxd-select-text--arrow"
        }

        return selectors

    }

    fillPersonalDetails(firstName, lastName, middleName) {        
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
    }

    fillEmployeeDetails(employeeId, otherId, driverslicense, driverslicenseDate, datebirth) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driverslicense)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(driverslicenseDate)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().dateField).eq(1).clear().type(datebirth)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genderButton).eq(1).click()
    }

    saveForm() {
        cy.get(this.selectorsList().saveButton).eq(0).click({ force: true })
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }

    fillStatus() {
        cy.get(this.selectorsList().genericCombobox).eq(0).click({ force: true })
        cy.get(':nth-child(6) > span').click()
        cy.get(this.selectorsList().genericCombobox).eq(1).click({ force: true })
        cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
    }


}

export default MyInfoPage