//TODO: Find a way to initialise Kinvey asynchronously
const application = require('application')
const Promise = require('bluebird')
const KinveyService = require('./services/kinvey')

var Kinvey = require('kinvey-nativescript-sdk').Kinvey

new Promise((resolve, reject) => KinveyService.ping())
  .then(application.run({moduleName: 'views/app-root'}))
  .catch(console.log) //eslint-disable-line no-console
