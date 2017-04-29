'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const hideInputFields = function (event) {
  $('#city-input-fields').hide()
  $('#view-cities').hide()
  $('.new-city-button').hide()
}

const addCity = function (event) {
  console.log('add button clicked')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is: ', data)
  api.createCity(data)
    .then(ui.createCitySuccess)
    .catch(ui.createCityFailure)
}

const onGetCities = function (event) {
  event.preventDefault()
  console.log('view cities clicked')
  api.getCities()
    .then(ui.getCitiesSuccess)
    .catch(ui.getCitiesfailure)
}

const onDeleteCity = function (event) {
  event.preventDefault()
  console.log('remove button clicked')
  ui.deleteCitySuccess()
}

module.exports = {
  hideInputFields,
  addCity,
  onGetCities,
  onDeleteCity
}
