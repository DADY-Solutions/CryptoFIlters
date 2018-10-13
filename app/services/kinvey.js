const Kinvey = require('kinvey-nativescript-sdk').Kinvey

const config = require('../config')

function init() {
  Kinvey.init({
    appKey: config.kinvey.appKey,
    appSecret: config.kinvey.appSecret,
  })
}

function ping() {
  Kinvey.ping()
    .then(function(response) {
      console.log('Kinvey Ping Success. Kinvey Service is alive, version: ' + response.version + ', response: ' + response.kinvey) //eslint-disable-line no-console
    })
    .catch(function(error) {
      console.log('Kinvey Ping Failed. Response: ' + error.description) //eslint-disable-line no-console
    })
}

module.exports = {
  init: () => init(),
  ping: () => ping(),
}
