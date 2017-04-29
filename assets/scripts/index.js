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
  $('.view-cities-btn').on('click', city.onGetCities)

  // listen for click events on the remove button for each city entry
  // does this actually work if the remove button doesn't exist until
  // handlebars is called?
  $('#removeBtn').on('submit', city.onDeleteCity)
})
