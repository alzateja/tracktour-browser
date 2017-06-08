'use strict'

const config = require('../config.js')
const store = require('../store')

// GET request to the API to retrieve all goals for the current user
const getWishes = function () {
  return $.ajax({
    url: config.apiOrigin + '/wishlists',
    method: 'GET',
    beforeSend: function () {
      $('loader').show()
    },
    complete: function () {
      $('.loader').hide()
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// POST request to the API to create a goal for the current user
const createWish = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/wishlists',
    method: 'POST',
    beforeSend: function () {
      $('loader').show()
    },
    complete: function () {
      $('.loader').hide()
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const updateWish = function (data) {
  return $.ajax({
    method: 'PATCH',
    beforeSend: function () {
      $('loader').show()
    },
    complete: function () {
      $('.loader').hide()
    },
    url: config.apiOrigin + '/wishlists/' + data.wishlist.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const deleteWish = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiOrigin + '/wishlists/' + id,
    beforeSend: function () {
      $('loader').show()
    },
    complete: function () {
      $('.loader').hide()
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  deleteWish,
  updateWish,
  getWishes,
  createWish

}
