import React from 'react'

const Filter = ({nameFilter, handleFilter}) => {
  return (
    <div>
      filter: <input value={nameFilter} onChange={handleFilter}/>
    </div>
  )
}

export default Filter