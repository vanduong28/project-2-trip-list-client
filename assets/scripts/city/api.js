'use strict'

const config = require('../config')
const store = require('../store')

const createCity = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/cities',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getCities = function () {
  return $.ajax({
    url: config.apiOrigin + '/cities',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteCity = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/cities/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateCity = (data, id) => {
  return $.ajax({
    url: config.apiOrigin + '/cities/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createCity,
  getCities,
  deleteCity,
  updateCity
}
