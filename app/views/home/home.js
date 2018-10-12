//TODO: When navigating away from this page, clear filters. Later on implement a user setting where the user can toggle to clear or not the filters
//FIXME: When navigating to home page, the bindings do not work!
const Observable = require('tns-core-modules/data/observable').Observable
const application = require('tns-core-modules/application')

const HomeViewModel = require('./home-view-model')

const viewModel = new HomeViewModel()

function onLoaded(args) {
  console.log('Home loaded event') //eslint-disable-line no-console
  const page = args.object
  page.bindingContext = viewModel
  viewModel.on(Observable.propertyChangeEvent, (args) => {
    viewModel.set(`${args.propertyName}`, args.value)
  })
}

function onUnloaded() {
  console.log('Home unloaded event') //eslint-disable-line no-console
  viewModel.off(Observable.propertyChangeEvent)
}

function toggleNavigationDrawer() {
  application.getRootView().showDrawer()
  console.log('NavigationDrawer triggered') //eslint-disable-line no-console
}

exports.onLoaded = onLoaded
exports.onUnloaded = onUnloaded
exports.toggleNavigationDrawer = toggleNavigationDrawer
