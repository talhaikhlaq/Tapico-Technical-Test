// REQUIRED DEPENDENCIES
const axios = require('axios')

// INDEX FUNCTION FOR ALL ARTICLES
function indexRoute(req, res) {
  axios.all([
    axios.get(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=${process.env.NEWSKEY}`),
    axios.get(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${process.env.NYTKEY}`)
  ]) 
    .then(axios.spread((newsRes, nytRes) => {
      
      // NEWS API RES HANDLING
      const headlinesData = newsRes.data.articles.map(article => {
        return({
          author: article.author,
          title: article.title,
          description: article.description,
          url: article.url,
          image: article.urlToImage
        })
      })

      // NYT API RES HANDLING
      const nytResults = nytRes.data.results.map(article => {
        return({
          author: article.byline,
          title: article.title,
          description: article.abstract,
          url: article.url,
          image: article.multimedia[0].url
        })
      })

      // MERGING API RES INTO SINGLE VARIABLE
      const articlesData = [ ...headlinesData, ...nytResults ]
      res.status(200).json(articlesData)

    }))
    .catch(err => res.status(400).json(err))
}

// SHOW FUNCTION FOR SEARCHED ARTICLES
function searchRoute(req, res) {
  axios.all([
    axios.get(`https://newsapi.org/v2/everything?q=${req.params.searchQuery}&apiKey=${process.env.NEWSKEY}`),
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${req.params.searchQuery}&api-key=${process.env.NYTKEY}`)
  ])
    .then(axios.spread((newsRes, nytRes) => {

      // NEWS API RES HANDLING
      const headlinesData = newsRes.data.articles.map(article => {
        return ({
          author: article.author,
          title: article.title,
          description: article.description,
          url: article.url,
          image: article.urlToImage
        })
      })

      // NYT API RES HANDLING
      const nytResults = nytRes.data.results.map(article => {
        return ({
          author: article.byline,
          title: article.title,
          description: article.abstract,
          url: article.url,
          image: article.multimedia[0].url
        })
      })

      // MERGING SEARCHED API RES INTO SINGLE VARIABLE
      const articlesData = [...headlinesData, ...nytResults]
      res.status(200).json(articlesData)

    }))
    .catch(err => res.status(400).json(err))
}

module.exports = { 
  index: indexRoute,
  show: searchRoute
}