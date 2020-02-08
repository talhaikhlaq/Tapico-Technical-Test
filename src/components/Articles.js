// IMPORT MAIN DEPENDENCIES
import React from 'react'
import axios from 'axios'

// IMPORT COMPONENTS
import ArticlesCard from './ArticlesCard'
import SearchBar from './SearchBar'

class Https extends React.Component {
  constructor() {
    super()

    this.state = { 
      articles: null,
      searchQuery: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get('/api/headlines')
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err))
  }

  handleChange({ target: { name, value }}) {
    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.get('/api/headlines/', {
      params: {
        searchQuery: this.state.searchQuery
      }
    })
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err))
  }


  render() {
    if(!this.state.articles) return null
    const { articles } = this.state
    return(
      <>
        <SearchBar 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <section className="section">
          <div className="container">
            <div className="columns is-mobile is-multiline">
              
              {articles.map(article =>
                <div key={article.url}className="column">
                  <ArticlesCard 
                    key={article.url}
                    {...article}
                  />
                </div>
              )}
              
            </div>
          </div>
        </section>
        
      </>
    )
  }

}

export default Https