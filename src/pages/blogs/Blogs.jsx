import React, { useState } from 'react'
import SearchBlog from './SearchBlog'
import {useFetchBlogsQuery} from '../../redux/features/blogs/blogsApi'
import {Link} from 'react-router-dom'

const Blogs = () => {
    const [search, setSearch] = useState('');
    const [catagory, setCatagory] = useState('');

    const [query, setQuery] = useState({search:"",catagory:""});

    // get data using redux

    const {data:blogs =[], error , isLoading} = useFetchBlogsQuery(query);
    // console.log(blogs);

    const handleSearchChange = (e) =>{
        setSearch(e.target.value);
    }

    const handleSearch = () =>setQuery({search,catagory})

  return (
    <div className=' mt-16 container mx-auto'>
        <div>
            <SearchBlog search={search} handleSearch={handleSearch} handleSearchChange={handleSearchChange}/>
        </div>
        {isLoading && <div>Loading .....</div>}
        {error && <div>{error.toString()}</div>}


        <div className=' mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 rounded-md'>
            {
                blogs.map(blog =>(
                    <Link
                        to = {`/blogs/${blog._id}`} 
                        key={blog._id} className=' shadow-md'>
                        <img src={blog.coverImage} alt="image" className=' h-80 w-full rounded-sm ' />
                        <h2 className=' text-xl  text-gray-800 p-4'>{blog.title}</h2>
                    </Link>
                )) 
            }
        </div>
    </div>
  )
}

export default Blogs