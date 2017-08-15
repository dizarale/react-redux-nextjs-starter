import React, { Component } from 'react'
import Header from '../containers/Header'
import PageHeader from '../components/PageHeader'
import fetch from 'isomorphic-unfetch'


class Events extends Component {
  static getInitialProps = async ({ store }) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await res.json()
    console.log('test getinit', new Date().getTime())
    return {
      show: data
    }
  }
  constructor(props) {
    super(props)
    console.log('test constructure', new Date().getTime())
  }
  componentWillmount() {
    console.log('componentWillmount', new Date().getTime())
  }
  componentDidMount = () => {
    console.log('componentDidMount', new Date().getTime())
  }
  render = () => {
    console.log('render', new Date().getTime())
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
        EVENTS
          <h6>{JSON.stringify(this.props)}</h6>
      </div>
    )
  }
}
export default Events