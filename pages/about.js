import Header from '../containers/Header'
import PageHeader from '../components/PageHeader'
import fetch from 'isomorphic-unfetch'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { nextConnect } from '../redux/store'
import * as Actions from '../actions/about'

class About extends Component {
  static getInitialProps = async ({ store }) => {
    await store.dispatch(Actions.initAboutUs())
    const aboutUs = store.getState().aboutUs
    return { aboutUs }
  }
  constructor(props) {
    super(props)
  }
  componentWillMount = () => {

  }
  componentDidMount = () => {
    this.props.actions.initAboutUs()
  }
  render = () => {
    return (
      <div>
        <PageHeader
          title='Tickermelon web'
          meta={[
            { name: 'description', content: 'Ticketmelon webapplication' },
            { name: 'keywords', content: 'Ticketmelon,ticket,event,edm' },
          ]}
        />
        <Header />
        About
        <h6>{JSON.stringify(this.props.aboutUs)}</h6>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    aboutUs: state.aboutUs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default nextConnect(mapStateToProps, mapDispatchToProps)(About)