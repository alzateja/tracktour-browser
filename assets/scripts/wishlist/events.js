'use strict'
const store = require('../store')
const api = require('./api')
const ui = require('./ui')

const onGetWishes = function () {
  store.wishlists = null
  api.getWishes()
  .then(ui.getWishesSuccess)
  .catch(ui.Failure)
}

// On Create Goal
const onCreateWish = function (event) {
  event.preventDefault()
  $('.alert').hide()
  let artistId = $('#selected-artist-id-wishlist').text()

  if (artistId === null || artistId === undefined || artistId === '' || artistId === ' ') {
    console.log('Enter valid artist')
    $('#add-wish-failure-alert').show()
    return
  }

  let inputStatus = $('#wishlist-status-select').text()
  const data = {}
  data.wishlist = {}
  data.wishlist.wish_status = inputStatus
  data.wishlist.artist_id = artistId

  for (let i = 0; i < store.wishlists.length; i++) {
    console.log('what is the store list' + store.wishlists[i].artist.id)
    if (store.wishlists[i].artist.id.toString() === artistId) {
      console.log('Entry Already exists')
      $('#wish-already-exists-failure-alert').show()

      return
    }
  }
  api.createWish(data)
    .then(ui.createWishSuccess)
    .then(resetAddWishList)
    .then(onGetWishes)
    .catch(ui.Failure)
}

// On Delete Goal
const onDeleteWish = function (event) {
  event.preventDefault()
  const id = $(event.target).parents('tr').attr('data-id')
  api.deleteWish(id)
    .then(ui.deleteWishSuccess)
    .then(onGetWishes)
    .catch(ui.failure)
}

// Modify Goal
const toggleWishStatus = function (event) {
  event.preventDefault()
  $('.alert').hide()
  const id = $(event.target).parents('tr').attr('data-id')
  const currentStatus = $('#status-' + id).text()
  let data = {}
  data.wishlist = {}
  data.wishlist.id = id

  if (currentStatus === 'Not Yet!') {
    data.wishlist.wish_status = 'Have Seen!'
  } else if (currentStatus === 'Have Seen!') {
    data.wishlist.wish_status = 'Not Yet!'
  }

  console.log(data)
  api.updateWish(data)
      .then(ui.updateWishSucess)
      .then(onGetWishes)
      .catch(ui.failure)
}

// Render button based on dropdown select
const wishStatusSetState = function (event) {
  event.preventDefault()
  $('#wishlist-status-select').text(event.currentTarget.text)
}


const resetAddWishList = function () {
  $('.alert').hide()
  $('#add-wish').slideToggle()
  $('#selected-artist-wishlist').text('')
  $('#selected-artist-id-wishlist').text('')
  $('.artist-select-space').hide()
}

// HANDLER TO ASSIGN AUTHORIZATION FUNCTIONS TO OBJECTS___________________

const addHandlers = () => {
  $('#add-wish').on('submit', onCreateWish)
  $('.status-select').on('click', wishStatusSetState)
  $('#add-wishlist-item').on('click', resetAddWishList)
  $(document).on('click', '.delete-button', onDeleteWish)
  $(document).on('click', '.modify-button', toggleWishStatus)
}

module.exports = {
  addHandlers,
  onDeleteWish,
  onCreateWish,
  wishStatusSetState,
  onGetWishes
}
