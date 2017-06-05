'use strict'
const store = require('../store')
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

// SIGNUP FUNCTIONALITY LAUNCHED WHEN CLICKED IN MODAL___________________
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  // Criteria Check
  $('.alert').hide()
// Blank Field Check
  if (
    data.credentials.password === '' || data.credentials.password_confirmation === '' || data.email === '') {
    // console.log('Blank Fields')
    $('#sign-up-failure-alert').show()
    $('#signup-failure-message').text('Oh No. You have blank fields')

    return
  }

// Password Match Check
  if (data.credentials.password !== data.credentials.password_confirmation) {
    // // console.log('Your passwords do not match')
    $('#sign-up-failure-alert').show()
    $('#signup-failure-message').text('Oh No. Your passwords dont match')

    return
  }
  $('.loader').fadeIn(1000)
// Create User API request
  api.signUp(data)
  .then(ui.signUpSuccess)
  // if Sign up works then we will run the sign in API call to skip that step
  .then(() => {
    // console.log('this is what is passed', data)
    api.signIn(data)
      .then(ui.signInSuccess)
      .catch(ui.signInFailure)
  })
  .catch(ui.signUpFailure)
}

// SIGNIN FUNTIONALITY LAUNCHED WHEN CLICKED IN MODAL___________________
const onSignIn = function (event) {
  event.preventDefault()
  // // console.log('Sign In run')
  $('.alert').hide()
  const data = getFormFields(this)
  // Criteria Check

// Blank Field Check
  if (
    data.credentials.email === '' || data.credentials.password === '') {
    $('#sign-in-failure-alert').show()
    $('#signin-failure-message').text('You seem to have some blank fields. Please try again')
    return
  }
  // console.log('this is what is passed to sign in', data)
  $('.loader').fadeIn(1000)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// CHANGE PASSWORD FUNTIONALITY LAUNCHED WHEN CLICKED IN MODAL___________________
const onChangePassword = function (event) {
  event.preventDefault()
  // // console.log('Changing password run')
  const data = getFormFields(this)
  $('.alert').hide()
  if (
    data.passwords.old === '' || data.passwords.new === '') {
    $('#change-pass-failure-alert').show()
    $('#change-pass-failure-message').text('You seem to have some blank fields. Please try again')
    return
  }

  if (
    data.passwords.old === data.passwords.new) {
    $('#change-pass-failure-alert').show()
    $('#change-pass-failure-message').text('Your new passwords and old passwords seem to match. Please try changing them')
    return
  }
  $('.loader').fadeIn(1000)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// SIGNOUT FUNCTION EXECUTED WHEN BUTTON CLICKED___________________
const onSignOut = function (event) {
  event.preventDefault()
  $('.alert').hide()
  // // console.log('Sign out run')
  if (store.user === undefined) {
    // // console.log('Not signed In')
    return
  }
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onToggleSignUp = function () {
  ui.resetUserForms()
  $('#sign-in').slideUp()
  $('#sign-up').slideToggle()
}

const onToggleSignIn = function () {
  ui.resetUserForms()
  $('#sign-up').slideUp()
  $('#sign-in').slideToggle()
}

const onToggleChangePWord = function () {
  ui.resetUserForms()
  $('#change-password').slideToggle()
}

// HANDLER TO ASSIGN AUTHORIZATION FUNCTIONS TO OBJECTS___________________
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
  $('#jumbo-signup-but').on('click', onToggleSignUp)
  $('#jumbo-signin-but').on('click', onToggleSignIn)
  $('#jumbo-changepass-but').on('click', onToggleChangePWord)
  $('.loader').hide()
}

module.exports = {
  addHandlers
}
