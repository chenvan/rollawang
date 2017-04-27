import ReactGA from 'react-ga'
ReactGA.initialize('UA-70164066-1')

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.pathname)
}
