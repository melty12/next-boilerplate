import * as React from 'react'
import axios from 'axios'
import Layout from '../../components/layout'

const News = ({news}: any) => {
  return (
    <Layout title="page1">
      <div>
        <h1>{news.title}</h1>
        <div dangerouslySetInnerHTML={{__html: `${news.contents}`}}></div>
      </div>
    </Layout>
  );
};

News.getInitialProps = async (context: any) => {
  const {id} = context.query;

  const key = {
    headers: {'X-API-KEY': process.env.api_key},
  };

  const res = await axios.get(
    `https://komeiotake.microcms.io/api/v1/news/${id}`,
    key,
  );
  const news = await res.data;

  return {news};
};

export default News
