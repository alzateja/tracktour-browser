'use strict'

const config = require('../config.js')

// GET request to the API to retrieve all goals for the current user
const getArtists = function () {
  return $.ajax({
    url: config.apiOrigin + '/artists',
    method: 'GET',
    beforeSend: function () {
      $('loader').show()
    },
    complete: function () {
      $('.loader').hide()
    }
  })
}

// POST request to the API to create a goal for the current user
const addArtists = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/artists',
    method: 'POST',
    beforeSend: function () {
      $('loader').show()
    },
    complete: function () {
      $('.loader').hide()
    },
    data
  })
}

module.exports = {
  getArtists,
  addArtists

}
