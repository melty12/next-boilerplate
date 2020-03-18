import * as React from 'react'
import axios from 'axios'
import Link from 'next/link'
import Layout from '../components/layout'

const IndexPage = ({news}: any) => (
  <Layout title="page1">
    <h1>articles</h1>
    <div>
      {news.map((page: any) => (
        <React.Fragment key={page.id}>
          <Link href="/news/[id]" as={`news/${page.id}`}>
            <a>
              <h2>{page.title}</h2>
            </a>
          </Link>
        </React.Fragment>
      ))}
    </div>
</Layout>
)

IndexPage.getInitialProps = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.api_key},
  }
  const res = await axios.get(
    `https://komeiotake.microcms.io/api/v1/news/`,
    key,
  )
  const data = await res.data.contents
  return {news: data}
}

export default IndexPage
