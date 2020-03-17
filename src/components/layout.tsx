import * as React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

type LayoutProps = {
  title?: string
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"
      ></link>
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
      ></script>
      <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
    </Head>
    <Header />
    <Navigation />
    <div className="container">{children}</div>
    <Footer />
  </div>
)

export default Layout
