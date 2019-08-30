import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import common from './common'
import auth from './auth'
import home from './home'
import article from './article'
import articleList from './articleList'

export default combineReducers({
  common,
  auth,
  home,
  article,
  articleList,
  router: routerReducer
})