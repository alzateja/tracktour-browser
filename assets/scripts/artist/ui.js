'use strict'

const store = require('../store')
const showArtists = require('../templates/artist.handlebars')

const getArtistsSuccess = (data) => {
  console.log('Get goals was successful')
  console.log('Your data looks likes', data)

  store.artists = data.artists
  let artistList = data.artists
  $('.artist-selection-list').append(showArtists({artists: artistList}))
}

const addArtistSuccess = (data) => {
  console.log('Create goal was successful')
  console.log('Your data looks likes', data)
  setArtistOnCreateWishlist(data.artist.artist_name, data.artist.id)
  cancelSetArtist()
}

const setArtistOnCreateWishlist = function (artist, id) {
  $('#selected-artist-wishlist').text(artist)
  $('#selected-artist-id-wishlist').text(id)
  $('.artist-select-space').hide()
}

const cancelSetArtist = function (artist) {
  $('.artist-select-space').hide()
  $('#add-artist-name').val('')
  $('.alert').hide()
}

const failure = function (error) {
  console.log("That didn't work...", error)
}

module.exports = {
  setArtistOnCreateWishlist,
  getArtistsSuccess,
  addArtistSuccess,
  cancelSetArtist,
  failure
}
