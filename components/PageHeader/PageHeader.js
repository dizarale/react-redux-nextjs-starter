import Head from 'next/head'

const PageHeader = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        {props.meta.map((tag,key) => {
          return (
            <meta key={key} name={tag.name} content={tag.content} />
          )
        })}
      </Head>
    </div>
  )
}
export default PageHeader