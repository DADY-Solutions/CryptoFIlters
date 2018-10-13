const application = require('application')
const Promise = require('bluebird')
const KinveyService = require('./services/kinvey')

KinveyService.init()
new Promise(() => KinveyService.ping())
  .then(application.run({moduleName: 'views/app-root'}))
  .catch(console.log) //eslint-disable-line no-console
