'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('sign up button clicked')
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('sign in ran')

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  // console.log('sign out ran')

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const changePassword = function (event) {
  event.preventDefault()
  // console.log('change password ran')

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const hideButtons = function (event) {
  $('.hide-on-start').hide()
}
const hideInputFields = function (event) {
  $('#city-input-fields').hide()
}

const addCity = function (event) {
  console.log('add button clicked')
  api.createCity()
    .then(ui.createCitySuccess)
    .catch(ui.createCityFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  changePassword,
  hideButtons,
  hideInputFields,
  addCity
}
