'use strict'

const config = require('../config')
const store = require('../store')
const city = require('../city')
const app = require('../app')

const signUp = (data) => {
  console.log('data is', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data: data
  })
}
const signOut = () => {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = (data) => {
  // console.log('data is ', data)
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const createCity = (name, state, country) => {
  console.log('new city created. data is:', name, state, country)
  return $.ajax({
    url: app.host + '/cities',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'city': {
        'name': name,
        'state': state,
        'country': country
      }
    }
  })
}

const getCities = function () {
  return $.ajax({
    url: app.host + '/cities',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const updateCity = (name, state, country) => {
//   console.log('update city to server.')
//   return $.ajax({
//     url: config.apiOrigin + '/cities/' + city.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: {
//       'city': {
//         'name': name,
//         'state': state,
//         'country': country
//       }
//     }
//   })
// }

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createCity,
  getCities
  // updateCity
}
