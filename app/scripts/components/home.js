import SearchResults from './SearchResults'

/**
 * This file will hold the Main content that lives in the main body of the site
 *
 */
import React from 'react'

class Home extends React.Component {
  handleSearchQueryChange(query) {
    this.setState({ searchQuery: query })
  }

  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof Home
   */
  render() {
    const { searchQuery } = this.props
    return (
      <section id="home">
        <div className="content">
          <SearchResults searchQuery={searchQuery} />
        </div>
      </section>
    )
  }
}

// Export out the React Component
export default Home
