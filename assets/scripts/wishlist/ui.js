'use strict'

const store = require('../store')
const showWishes = require('../templates/wish.handlebars')

const getWishesSuccess = (data) => {
  store.wishlists = null
  // console.log('Your data looks likes', data)
  const dataForHandlebars = {}
  dataForHandlebars.wishlists = data.wishlists

  store.wishlists = data.wishlists
  if (dataForHandlebars.wishlists.length === 0) {
    $('#no-artists-alert').show()
    $('#display-wishes').hide()
  } else {
    $('#no-artists-alert').hide()
    $('#display-wishes').show()
  }
  $('#display-wishes').html('<tr class="table-header"><td>Artist</td><td>Seen</td><td>Toggle Seen</td><td>Delete</td><td>Add Concert</td><td>Seen Count</td></tr>')
  $('#display-wishes').append(showWishes(dataForHandlebars))

}

const createWishSuccess = (data) => {
  // console.log('Create wish was successful')
  // console.log('Your data looks likes', data)
}

const updateWishSucess = function (data) {
  store.wishlists = null
}

const deleteWishSuccess = function () {
  // console.log('you deleted a goal...YAY...IGuess!')
}

const failure = function (error) {
  // console.log(error)
  // console.log("That didn't work...")
}

module.exports = {
  deleteWishSuccess,
  failure,
  updateWishSucess,
  getWishesSuccess,
  createWishSuccess
}
