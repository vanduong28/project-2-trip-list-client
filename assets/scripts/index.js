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
  $('#register-submit').on('click', auth.onSignUp)
  $('#login-form').on('click', auth.onSignIn)
  $('#login-form-link').click(function (e) {
    $('#login-form').delay(100).fadeIn(100)
    $('#register-form').fadeOut(100)
    $('#register-form-link').removeClass('active')
    $(this).addClass('active')
    e.preventDefault()
  })
  $('#register-form-link').click(function (e) {
    $('#register-form').delay(100).fadeIn(100)
    $('#login-form').fadeOut(100)
    $('#login-form-link').removeClass('active')
    $(this).addClass('active')
    e.preventDefault()
  })
})
