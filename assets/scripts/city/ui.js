'use strict'
const store = require('../store')
const showCitiesTemplate = require('../templates/city-listing.handlebars')

const createCitySuccess = (data) => {
  console.log('create city success.')
  // const showCitiesHtml = showCitiesTemplate({ cities: data.city })
  // $('.content').append(showCitiesHtml)
  // $('#removeBtn').on('click', hideCityInfo)
  $('#addCity-modal').modal('hide')
  $('.create-city-message').text('City added')
}

const createCityFailure = (error) => {
  console.log('create city failure. error is:', error)
  $('.create-city-message').text("'Name' is required")
}

const deleteCitySuccess = () => {
  event.preventDefault()
  console.log('remove city clicked')
  $('[data-id="{{city.id}}"]').remove()
  // $(this).attr("data-id").remove()
}

const getCitiesSuccess = (data) => {
  console.log(data)
  const showCitiesHtml = showCitiesTemplate({ cities: data.cities })
  $('.content').html(showCitiesHtml)
  $('#removeBtn').on('click', deleteCitySuccess)
}

const getCitiesFailure = (error) => {
  console.log('get cities failure. error is:', error)
}

module.exports = {
  createCitySuccess,
  createCityFailure,
  deleteCitySuccess,
  getCitiesSuccess,
  getCitiesFailure
}