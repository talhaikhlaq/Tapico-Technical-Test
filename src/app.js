// IMPORT MAIN DEPENDENCIES
import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import './style.scss'

// IMPORT COMPONENTS
import Articles from './components/Articles'

const App = () => {
  
  return(
    <>
      <h1 className="titleHeader">GLOBAL HEADLINES</h1>
      <Articles />
    </>
  )
  
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
