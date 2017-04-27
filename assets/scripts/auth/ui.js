'use strict'
// const store = require('../store')

const signUpSuccess = () => {
  console.log('sign up success')
}

const signUpFailure = () => {
  console.error('sign up failure')
  // $('#sign-up-modal-label').text('Error with sign up. Please try again.')
}
const signInSuccess = (data) => {
  console.log('signIn success ran. data is: ', data)
  // store.user = data.user
}

const signInFailure = () => {
  console.log('sign in failure')
  // console.error('signIn failure ran. error is: ', error)
  // $('#sign-in-modal-label').text('Incorrect email/password. Please try again.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
