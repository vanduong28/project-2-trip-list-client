'use strict'

const config = require('../config')
const store = require('../store')
const city = require('../city')
const app = require('../app')

const createCity = (data) => {
  console.log('new city created. data is:', data)
  return $.ajax({
    url: app.host + '/cities',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
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

// const deleteCity = function () {
//   return $.ajax({
//     url: app.host + '/cities', + store.city.id
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

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
  createCity,
  getCities
  // deleteCity
  // updateCity
}
