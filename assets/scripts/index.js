'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const auth = require('./auth/events')
const wishlist = require('./wishlist/events')
const artist = require('./artist/events')

$(() => {
  setAPIOrigin(location, config)
  auth.addHandlers()
  wishlist.addHandlers()
  artist.addHandlers()
  onInitialPageLoadHide()
})

const onInitialPageLoadHide = function () {
  $('form').hide()
  $('.hide-on-initial-load').hide()
  $('.artist-select-space').hide()
}

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
