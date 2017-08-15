import Header from '../containers/Header'
import PageHeader from '../components/PageHeader'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <div>
    <PageHeader
      title='Tickermelon web'
      meta={[
        {name:'description', content:'Ticketmelon webapplication'},
        {name:'keywords', content:'Ticketmelon,ticket,event,edm'},
      ]}
    />
    <Header />
    {JSON.stringify(props)}
  </div>
)
Index.getInitialProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  const data = await res.json()
  return {
    show: data
  }
}
export default Index