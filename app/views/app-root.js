const AppRootViewModel = require('./app-root-view-model')

const viewModel = new AppRootViewModel()

function onLoaded(args) {
  const drawerComponent = args.object
  drawerComponent.bindingContext = viewModel
}

function onListViewLoaded() {
}

exports.onLoaded = onLoaded
exports.onListViewLoaded = onListViewLoaded
