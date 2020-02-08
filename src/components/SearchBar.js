// IMPORT MAIN DEPENDENCIES
import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return( 
      <>
        <div className="container form">
          <form className="control" onSubmit={this.props.handleSubmit}>
            <input
              className="input"
              placeholder="search headlines here"
              name="searchQuery"
              type="text"
              onChange={this.props.handleChange}
            />
            <button className="button is-info">Submit</button>
          </form>
        </div>
      </>
    )
  }
}

export default SearchBar