'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

const auth = require('./auth/events')
const city = require('./city/events')

$(() => {
  $(document).ready(auth.hideButtons)
  $(document).ready(city.hideInputFields)
  $('#sign-up').on('submit', auth.onSignUp)
  $('#sign-in').on('submit', auth.onSignIn)
  $('#sign-out').on('submit', auth.onSignOut)
  $('#change-password').on('submit', auth.changePassword)
  $('#city-form').on('submit', city.addCity)
  $('.view-cities-button').on('click', city.onGetCities)
  // clear content in modal fields
  $('#signUp-modal').on('hidden.bs.modal', function () {
    $(this).find('form')[0].reset()
    $(this).find('h4').text('Sign Up')
  })
  $('#signIn-modal').on('hidden.bs.modal', function () {
    $(this).find('form')[0].reset()
    $(this).find('h4').text('Sign In')
  })
  $('#changePassword-modal').on('hidden.bs.modal', function () {
    $(this).find('form')[0].reset()
    $(this).find('h4').text('Change Password')
  })
  $('#addCity-modal').on('hidden.bs.modal', function () {
    $(this).find('form')[0].reset()
  })
  // listen for click events on the remove button for each city entry
  $(document).on('click', '.removeBtn', city.onDeleteCity)
  // listen for click events on the submit update button
  $(document).on('submit', '.city-form-update', city.onUpdateCity)
  $('#hide-show-map').on('click', city.showMap)
})
