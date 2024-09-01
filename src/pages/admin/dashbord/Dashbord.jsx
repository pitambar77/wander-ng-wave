import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import { FiUsers } from "react-icons/fi";
import { FaBlog } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { FaRegComments } from "react-icons/fa";
import { useFetchBlogsQuery } from '../../../redux/features/blogs/blogsApi';
import { useGetCommentsQuery } from '../../../redux/features/comments/commentApi';
import { useGetUserQuery } from '../../../redux/features/auth/authApi';
import BlogChart from './BlogChart';

const Dashbord = () => {

  const [query, setQuery] = useState({search:'', category:''})

  const {user} = useSelector((state) =>state.auth);

  const {data:blogs=[], error, isLoading} = useFetchBlogsQuery(query);

  const {data:comments =[]} = useGetCommentsQuery();

  const {data:users={}} = useGetUserQuery();

  const adminCounts = users.user?.filter(user => user.role === 'admin').length

  const totalUsers = users.user?.filter(user => user.role === 'user').length


  

  return (
    <>
    {isLoading && (<div>Loading ...</div>)}
      <div className=' space-y-6'>
        <div className=' bg-bgPrimary p-5'>
          <h1>Hii.., {user?.username}</h1>
          <p>Welcome to the admin dashbord </p>
          <p>Here you can manage your blog posts and other adminstrative task</p>
        </div>

        {/* card grid */}

        <div className=' flex flex-col md:flex-row justify-center gap-8 pt-8 '>
          <div className=' bg-indigo-100 py-6 w-full rounded-sm flex flex-col items-center'>
            <FiUsers className=' size-8 text-indigo-600'/>
            <p>{totalUsers} User{totalUsers !== 1?'s' :''}</p>
          </div>
          <div className=' bg-red-100 py-6 w-full rounded-sm flex flex-col items-center'>
            <FaBlog className=' size-8 text-red-600'/>
            <p>{blogs.length}  Blogs</p>
          </div>
          <div className=' bg-lime-100 py-6 w-full rounded-sm flex flex-col items-center'>
            <RiAdminLine className=' size-8 text-lime-600'/>
            <p>{adminCounts} Admin{adminCounts !==1 ? 's' :''}</p>
          </div>
          <div className=' bg-orange-100 py-6 w-full rounded-sm flex flex-col items-center'>
            <FaRegComments className=' size-8 text-orange-600'/>
            <p>{comments.comment} Comments</p>
          </div>
        </div>
    
        {/* graph and chart */}

        <div className=' pt-5 pb-5'>
            <BlogChart blogs={blogs}/>
        </div>

      </div>
    </>
  )
}

export default Dashbord