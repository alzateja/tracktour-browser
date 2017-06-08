'use strict'
const store = require('../store')
const api = require('./api')
const ui = require('./ui')

// Pull Goal List___________________
const onSelectArtists = function () {
  $('.artist-selection-list').empty()
  $('.artist-select-space').show()

  api.getArtists()
  .then(ui.getArtistsSuccess)
  .catch(ui.Failure)
}

// On Create Goal
const onSelectArtist = function (event) {
  event.preventDefault()
  $('.alert').hide()
  console.log($('#add-artist-name').val())

  let selected = $('input[name="selected-artist"]:checked').val()
  let selectedId = $('input[name="selected-artist"]:checked').data('id')

  if (selected === '' || selected === undefined) {
    $('#none-selected').show()
    return
  }

  if (selected === 'other') {
    addNewArtist()
  } else {
    ui.setArtistOnCreateWishlist(selected, selectedId)
    return
  }
}

const addNewArtist = function () {
  // Clean Data Input
  let input = $('#add-artist-name').val()
  input = input.replace(/  +/g, ' ')
  input = input.trimRight()
  input = input.trimLeft()

  if (input === '' || input === undefined) {
    $('#blank-add-artist').show()
    return
  }

  for (let i = 0; i < store.artists.length; i++) {
    if (store.artists[i].artist_name.toUpperCase() === input.toUpperCase()) {
      ui.setArtistOnCreateWishlist(input, store.artists[i].id)
      return
    }
  }

  let data = {}
  data.artist = {}
  data.artist.artist_name = input

  api.addArtists(data)
   .then(ui.addArtistSuccess)
   .catch(ui.Failure)
}

// HANDLER TO ASSIGN AUTHORIZATION FUNCTIONS TO OBJECTS___________________
const addHandlers = () => {
  $('#select-artist-button').on('click', onSelectArtists)
  $('#add-artist').on('click', onSelectArtist)
  $('#close-artist').on('click', ui.cancelSetArtist)
}

module.exports = {
  onSelectArtists,
  onSelectArtist,
  addNewArtist,
  addHandlers
}
