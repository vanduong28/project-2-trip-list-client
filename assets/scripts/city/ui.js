'use strict'

const showCitiesTemplate = require('../templates/city-listing.handlebars')

const createCitySuccess = (data) => {
  $('#addCity-modal').modal('hide')
  $('.user-city-message').text("City added. Click 'View Cities' for updated list")
}

const createCityFailure = () => {
  // console.log('create city failure. error is:', error)
}

const deleteCitySuccess = (id) => {
  event.preventDefault()
  // console.log('remove city clicked. data id:', id)
  $("div[data-id='" + id + "']").remove()
  $('.user-city-message').empty()
}

const deleteCityFailure = () => {
  // console.log('delete city failure.')
}

const getCitiesSuccess = (data) => {
  // console.log(data)
  const showCitiesHtml = showCitiesTemplate({ cities: data.cities })
  $('.content').html(showCitiesHtml)
  $('#removeBtn').on('click', deleteCitySuccess)
  $('.user-city-message').empty()
}

const getCitiesFailure = () => {
  // console.log('get cities failure. error is:', error)
}

const updateCitySuccess = () => {
  $('.city-form-update').text("Successfully updated. Close window and click 'View Cities' to see updates")
}

const updateCityFailure = () => {
  // $('.update-modal-label').text("'City' field cannot be blank")
  // console.log('update city failure. error is:', error)
}

module.exports = {
  createCitySuccess,
  createCityFailure,
  deleteCitySuccess,
  deleteCityFailure,
  getCitiesSuccess,
  getCitiesFailure,
  updateCitySuccess,
  updateCityFailure
}
