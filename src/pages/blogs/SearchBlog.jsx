import React from 'react'

const SearchBlog = ({search,handleSearch,handleSearchChange}) => {

    const handleKeyPress = (event) =>{
        if(event.key === "Enter"){
            handleSearch();
        }
    }

  return (
    <div className=' flex w-full'>
        <input type="text"
        value={search}
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress}
        placeholder=' Search here for blogs ......'
        className=' py-2 px-4 mr-5 w-full bg-[#f7f8f9] focus:outline-none focus:border'
        />
        <button onClick={handleSearch} className=' bg-[#1E73BE] py-2 px-4 text-white'>Search</button>
    </div>
  )
}

export default SearchBlog