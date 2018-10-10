const Observable = require('tns-core-modules/data/observable').Observable

const HomeViewModel = require('./home-view-model')

const viewModel = new HomeViewModel()
const homeViewListener = viewModel.on(Observable.propertyChangeEvent, (args) => {
  viewModel.set('cryptoFilter', args.value)
})

function onLoaded(args) {
  const page = args.object
  page.bindingContext = viewModel
}

function onUnloaded() {
  viewModel.off(Observable.propertyChangeEvent, homeViewListener)
}

exports.onLoaded = onLoaded
exports.onUnloaded = onUnloaded
