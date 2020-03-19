const axios = require('axios');

require('dotenv').config();

module.exports = {
  exportPathMap: async function() {
    const paths = {
      '/': {page: '/'},
    };
    const key = {
      headers: {'X-API-KEY': process.env.API_KEY},
    };
    const res = await axios.get(
      `https://komeiotake.microcms.io/api/v1/news/`,
      key,
    );
    const data = await res.data.contents;

    data.forEach(page => {
      paths[`/news/${page.id}`] = {page: '/news/[id]', query: {id: page.id}};
    });

    return paths;
  },
  env: {
    api_key: process.env.API_KEY,
    write_api_key: process.env.WRITE_API_KEY
  },
};
