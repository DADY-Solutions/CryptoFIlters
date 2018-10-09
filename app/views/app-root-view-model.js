const observableModule = require('tns-core-modules/data/observable')
const {map} = require('lodash')

const {sidemenuNavigation} = require('../constants')

const menuOptionsLabels = map(sidemenuNavigation, (option) => {
  return {
    label: option.label,
  }
})

function AppRootViewModel() {
  const viewModel = observableModule.fromObject({
    menuOptions: menuOptionsLabels,
  })
  return viewModel
}

module.exports = AppRootViewModel
