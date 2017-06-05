'use strict'

const store = require('../store')
// const artists = require('../artists/events')

const resetUserForms = function () {
  $('.alert').hide()
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-password').trigger('reset')
}
// Sign UP SUCCESS AND FAILURE MESSAGING ________________________
const signUpSuccess = (data) => {
  // console.log('User sucessfully created:', data)
  // console.log('Store looks like ', store)
  $('.alert').hide()
  $('.loader').hide()
  resetUserForms()
}

const signUpFailure = (error) => {
  console.log(error)
  $('#sign-up-failure-alert').show()
  $('#signup-failure-message').text('Oh No. Someone may already taken that email. Try Signing in')
  $('.loader').hide()
  // console.log('Store looks like ', store)
}

//  SIGN IN SUCCESS AND FAILURE MESSAGING ________________________
const signInSuccess = (data) => {
  // console.log('signIn success ran, data is: ', data)
  store.user = data.user
  // console.log('Store looks like ', store)
  signInSuccessRenderUI()
  $('.alert').hide()
  $('.loader').hide()
  resetUserForms()
}

const signInFailure = (error) => {
  console.error('signIn error ran, error is: ', error)
  if (error.responseText === '{"error":{"message":"Not Authorized","error":{}}}') {
    $('#sign-in-failure-alert').show()
    $('#signin-failure-message').text('UNAUTHORIZED. Check your password.')
    $('.loader').hide()
  }

  $('#sign-in-failure-alert').show()
  $('#signin-failure-message').text('Unknown error. Try again.')
  $('.loader').hide()
  // console.log(error.statusText)
  // console.log('Store looks like ', store)
}

//  Change Password SUCCESS AND FAILURE MESSAGING ______________________________

const changePasswordSuccess = (data) => {
  // console.log('Password was succesfully changed, data is: ', data)
  // console.log('Store looks like ', store)
  $('.alert').hide()
  $('#change-password').hide()
  $('.loader').hide()
  resetUserForms()
}

const changePasswordFailure = (error) => {
  console.log('Password was not succesfully changed', error)
  $('#change-pass-failure-alert').show()
  $('#change-pass-failure-message').text('You were unable to change your password. Check your entries and try again')
  $('.loader').hide()
  // console.log(error.statusText)
  // console.log('Store looks like ', store)
}

//  SIGN OUT SUCCESS AND FAILURE MESSAGING ______________________

const signOutSuccess = () => {
  // console.log('signOut success ran, and nothing was returned')
  // console.log('Store looks like ', store)

  store.user = null
  store.user_ratings = null

  // console.log('Store looks like ', store)
  signOutSuccessRenderUI()
  $('.alert').hide()
  $('.loader').hide()
}

const signOutFailure = (error) => {
  console.error('signOut error ran, error is: ', error)
  // console.log('Store looks like ', store)
  $('.loader').hide()
}

const signInSuccessRenderUI = function () {
  $('form').hide()
  $('.hide-on-initial-load').show()
  $('.hide-on-sign-in').hide()
  $('.alert').hide()
  $('.loader').hide()
}

const signOutSuccessRenderUI = function () {
  $('form').hide()
  $('.hide-on-initial-load').hide()
  $('.hide-on-sign-in').show()
  $('.alert').hide()
  $('.loader').hide()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutFailure,
  signOutSuccess,
  changePasswordFailure,
  changePasswordSuccess,
  resetUserForms
}
