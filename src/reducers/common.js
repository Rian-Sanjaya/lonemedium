import {
  APP_LOAD,
  REDIRECT,
  LOGOUT,
  ARTICLE_SUBMITTED,
  SETTINGS_SAVED,
  LOGIN,
  REGISTER,
  DELETE_ARTICLE,
  ARTICLE_PAGE_UNLOADED,
  EDITOR_PAGE_UNLOADED,
  HOME_PAGE_UNLOADED,
  PROFILE_PAGE_UNLOADED,
  PROFILE_FAVORITES_PAGE_UNLOADED,
  SETTINGS_PAGE_UNLOADED,
  LOGIN_PAGE_UNLOADED,
  REGISTER_PAGE_UNLOADED
} from '../constants/actionTypes'

const intialState = {
  appName: 'LoneMedium',
  token: null,
  viewChangeCounter: 0
}

export default (state = intialState, action) => {
  switch(action.type) {
    case APP_LOAD:
      return {
        ...state,
        token: action.token,
        appLoaded: true,
        currentUser: action.payload ? action.payload.user : null
      }

    default:
      return state
  }
}