const application = require('tns-core-modules/application')
const frameModule = require('tns-core-modules/ui/frame')

const AppRootViewModel = require('./app-root-view-model')

const viewModel = new AppRootViewModel()

function onLoaded(args) {
  const drawerComponent = args.object
  drawerComponent.bindingContext = viewModel
}

function onListViewLoaded() {
}

function onNavigationItemTap(args) {
  const component = args.object
  const navigateToRoute = component.route
  console.log('NavigationDrawer navigating to => ', navigateToRoute) //eslint-disable-line no-console
  frameModule.topmost().navigate({
    moduleName: navigateToRoute,
    transition: {
      name: 'fade'
    }
  })

  const drawerComponent = application.getRootView()
  drawerComponent.closeDrawer()
}

exports.onLoaded = onLoaded
exports.onListViewLoaded = onListViewLoaded
exports.onNavigationItemTap = onNavigationItemTap
