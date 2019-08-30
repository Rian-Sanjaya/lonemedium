import React from 'react'
import { connect } from 'react-redux'

import agent from '../../agent'
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER
} from '../../constants/actionTypes'

const Promise = global.Promise

class Home extends React.Component {
  render() {
    return (
      <div className="container page">
        <div className="row">
          Home
        </div>
      </div>
    )
  }
}

export default connect()(Home)