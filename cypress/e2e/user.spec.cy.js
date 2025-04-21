import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myinfoPage'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myinfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myinfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.name())
    myinfoPage.fillEmployeeDetails(chance.natural({ min: 1, max: 4 }), chance.natural({ min: 4, max: 20 }), chance.natural(), '2025-03-02', '1990-01-07')
    myinfoPage.fillStatus()
    myinfoPage.saveForm()
  })

})