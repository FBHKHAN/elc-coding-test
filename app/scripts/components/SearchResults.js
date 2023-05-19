import React from 'react'
import data from '../../../server/data'

const SearchResults = ({ searchQuery }) => {
  const filteredData = data.filter((item) => {
    const itemTags = item.tags.join(' ').toLowerCase()

    return (
      item.name.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
      itemTags.includes(searchQuery.toLowerCase())
    )
  })

  return (
    <div className="search-results">
      {filteredData.map((item) => (
        <div key={item._id} className="product-card">
          <img src={item.picture} alt={item.name} />
          <div class="product-name">{item.name}</div>
        </div>
      ))}
    </div>
  )
}

export default SearchResults
