'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const hideInputFields = function (event) {
  $('#city-input-fields').hide()
  $('.view-cities-button').hide()
  $('.new-city-button').hide()
  $('.map-container').hide()
  $('.map-button').hide()
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
  const cityId = $(this).data('id')
  api.deleteCity(cityId)
    .then(ui.deleteCitySuccess(cityId))
    .catch(ui.deleteCityFailure)
}

const onUpdateCity = function (event) {
  event.preventDefault()
  const cityId = $(this).data('id')
  console.log('update info button clicked cityId is:', cityId)
  const updateInfo = getFormFields(this)
  console.log('updated info:', updateInfo)
  api.updateCity(updateInfo, cityId)
    .then(ui.updateCitySuccess(cityId))
    .catch(ui.updateCityFailure)
}

const showMap = function (event) {
  event.preventDefault()
  $('.map-container').toggle()
}

module.exports = {
  hideInputFields,
  addCity,
  onGetCities,
  onDeleteCity,
  onUpdateCity,
  showMap
}
