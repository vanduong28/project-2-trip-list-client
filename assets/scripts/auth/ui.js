'use strict'
const store = require('../store')
const showCitiesTemplate = require('../templates/city-listing.handlebars')

const signUpSuccess = () => {
  console.log('sign up success')
  $('#signUp-modal').modal('hide')
  $('.game-prompt').hide()
  $('.sign-up-btn').hide()
  $('.sign-in-prompt').text('Sign in to start planning!')
  $('.game-message').text(' ')
}

const signUpFailure = () => {
  console.error('sign up failure')
  $('#sign-up-modal-label').text('Error with sign up. Please try again.')
}
const signInSuccess = (data) => {
  console.log('signIn success ran. data is: ', data)
  store.user = data.user
  $('#sign-in-modal-label').text('Sign In')
  $('#signIn-modal').modal('hide')
  $('.game-prompt').hide()
  $('.sign-in-prompt').text(' ')
  $('.hide-on-start').show()
  $('.sign-up-btn').hide()
  $('.sign-in-btn').hide()
  $('.game-message').text(' ')
  $('#city-input-fields').show()
}

const signInFailure = () => {
  // console.error('signIn failure ran. error is: ', error)
  $('#sign-in-modal-label').text('Incorrect email/password. Please try again.')
}
const signOutSuccess = () => {
  // console.log('signOut success ran. and nothing was returned')
  store.user = null
  $('#signOut-modal').modal('hide')
  $('.game-board').hide()
  $('.new-game-button').hide()
  $('.hide-on-start').hide()
  $('.game-prompt').text(' ')
  $('.game-message').text('Sign up or sign in to start playing!')
  $('.sign-up-btn').show()
  $('.sign-in-btn').show()
  $('.new-game-prompt').text('')
}

const signOutFailure = () => {
  // console.error('signOut failure ran. error is: ', error)
}

const changePasswordSuccess = () => {
  // console.log('change password success. data is: ', data)
  $('#changePasswordLabel').text('Password successfully changed')
}

const changePasswordFailure = () => {
  // console.error('change password failure ran. error is: ', error)
  $('#changePasswordLabel').text('Invalid password. Try again')
}

const createCitySuccess = (data) => {
  console.log('create city success. data is: ', data)
  // const showCitiesHtml = showCitiesTemplate({ cities: data.city })
  // $('.content').append(showCitiesHtml)
  // $('#removeBtn').on('click', hideCityInfo)
}

const createCityFailure = (error) => {
  console.log('create city failure. error is:', error)
  $('.create-city-message').text("'Name' is required")
}

const getCitiesSuccess = (data) => {
  console.log(data)
  const showCitiesHtml = showCitiesTemplate({ cities: data.cities })
  $('.content').html(showCitiesHtml)
  $('#removeBtn').on('click', hideCityInfo)
}

const getCitiesFailure = (error) => {
  console.log('get cities failure. error is:', error)
}

const hideCityInfo = () => {
  event.preventDefault()
  console.log('remove button clicked')
  $('[data-id="{{city.id}}"]').remove()
  // $(this).attr("data-id").remove()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  createCitySuccess,
  createCityFailure,
  getCitiesSuccess,
  getCitiesFailure
}
