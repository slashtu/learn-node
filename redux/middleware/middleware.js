var store = {

  dispatch: function( action ){
    console.log('dispatch an action ' + action)
  }

}


var logger = function logger(store) {
  return function wrapDispatchToAddLogging(next) {
    return function dispatchAndLog(action) {
      console.log('middleware log', action)
      var result = next(action)
      return result
    }
  }
}

var reporter = function reporter(store) {
  return function wrapDispatchToAddReport(next) {
    return function dispatchAndReport(action) {
      console.log('middleware report', action)
      var result = next(action)
      return result
    }
  }
}


function applyMiddleware(store, middlewares) {
  middlewares = middlewares.slice()
  middlewares.reverse()

  var dispatch = store.dispatch
  middlewares.forEach(middleware =>{
      dispatch = middleware(store)(dispatch)
      console.log(dispatch)
    }
  )

  return Object.assign({}, store, { dispatch })
}


var newStore = applyMiddleware( store, [ logger, reporter ] )

newStore.dispatch('save data')