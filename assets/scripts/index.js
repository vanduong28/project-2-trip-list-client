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

$(() => {
  $(document).ready(auth.hideButtons)
  $(document).ready(auth.hideInputFields)
  $('#sign-up').on('submit', auth.onSignUp)
  $('#sign-in').on('submit', auth.onSignIn)
  $('#sign-out').on('submit', auth.onSignOut)
  $('#change-password').on('submit', auth.changePassword)
  $('.add-city-btn').on('click', auth.addCity)
  // ^revisit click vs. submit - click currently works, unsure why submit doesn't
  $('.view-cities-btn').on('click', auth.onGetCities)
})
