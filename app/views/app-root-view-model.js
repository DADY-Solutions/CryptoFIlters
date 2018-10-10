const Observable = require('tns-core-modules/data/observable')
const {map} = require('lodash')

const {sidemenuNavigation} = require('../constants')

const menuOptionsArray = map(sidemenuNavigation, (option) => {
  return {
    label: option.label,
    route: option.route,
  }
})

function AppRootViewModel() {
  const viewModel = Observable.fromObject({
    menuOptions: menuOptionsArray,
  })
  return viewModel
}

module.exports = AppRootViewModel
