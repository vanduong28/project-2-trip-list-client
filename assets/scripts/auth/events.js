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
  event.preventDefault()
  const name = document.getElementById('city-input').value
  const state = document.getElementById('state-input').value
  const country = document.getElementById('country-input').value
  console.log(name, state, country)
  api.createCity(name, state, country)
    .then(ui.createCitySuccess)
    .catch(ui.createCityFailure)
}

const onGetCities = function (event) {
  event.preventDefault()
  console.log('hello')
  api.getCities()
    .then(ui.getCitiesSuccess)
    .catch(ui.getCitiesfailure)
}

const onDeleteCity = function (event) {
  event.preventDefault()
  console.log('remove button clicked')
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  changePassword,
  hideButtons,
  hideInputFields,
  addCity,
  onGetCities,
  onDeleteCity
}
