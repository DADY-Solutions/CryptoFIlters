const Observable = require('tns-core-modules/data/observable')

function HomeViewModel() {
  const viewModel = Observable.fromObject({
    cryptoFilter: 'test',
  })

  return viewModel
}

module.exports = HomeViewModel
