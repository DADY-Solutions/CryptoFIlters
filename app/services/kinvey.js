//TODO: Missing querying and removing by query
const Kinvey = require('kinvey-nativescript-sdk').Kinvey
const DataStore = require('kinvey-nativescript-sdk').Kinvey.DataStore

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

function collection(collectionName) {
  return DataStore.collection(collectionName)
}

function find(collectionName) {
  return collection(collectionName).find()
}

function findById(collectionName, elementId) {
  return collection(collectionName).findById(elementId)
}

function save(collectionName, object) {
  return collection(collectionName).save(object)
}

function removeById(collectionName, elementId) {
  return collection(collectionName).removeById(elementId)
}

module.exports = {
  init: () => init(),
  ping: () => ping(),
  getCollection: (name) => collection(name),
  selectAll: (collectionName) => find(collectionName),
  selectById: (collectionName, elementId) => findById(collectionName, elementId),
  upsert: (collectionName, object) => save(collectionName, object),
  removeById: (collectionName, elementId) => removeById(collectionName, elementId),
}
