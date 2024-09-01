import React, { useEffect, useRef, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useSelector } from 'react-redux';
import EditorJS from '@editorjs/editorjs';
import List from "@editorjs/list"
import Header from '@editorjs/header'
import { useFetchBlogByIdQuery, useUpdateBlogMutation } from '../../../redux/features/blogs/blogsApi';

const UpdatePost = () => {

    const {id} = useParams();

    const editorRef = useRef(null);

  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [description, setDescription] = useState("");
  const [catagory, setCatagory] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  
  const [updateBlog] = useUpdateBlogMutation()
  const {data:blog={}, error, isLoading, refetch } = useFetchBlogByIdQuery(id);

  const {user} = useSelector((state) =>state.auth);
  
  useEffect(()=>{
    if(blog.post){
        const editor = new EditorJS({
            holder:'editorjs',
            onReady:() =>{
              editorRef.current = editor
            },
            autofocus:true,
            tools:{
              header: {
                class: Header, 
                inlineToolbar: true,
              },

              list: {
                class: List,
                inlineToolbar: true,
              }, 
            },
            data:blog.post.content
          })
      
          return () =>{
            editor.destroy();
            editorRef.current = null;
          }
    }
  },[])

  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const content = await editorRef.current.save();

    try {
      
      
      
      const updatedPost = {
        title :title || blog.post.title,
        coverImage:coverImage || blog.post.coverImage,
        description:description || blog.post.description,
        content:content || blog.post.content,
        catagory:catagory || blog.post.catagory,
        author:user?._id,
        rating:rating || blog.post.rating
      }

      // console.log(updatedPost);

      const response =await updateBlog({ id, ...updatedPost}).unwrap();
      // console.log(response);
      alert("Blog is updated successfully");
      refetch();
      navigate('/dashbord');

    } catch (error) {
      console.error("Failed to submit ",error);
      setMessage("Failed to submit post please try agin !!!")
    }
  }

  return (
    <div className=' bg-white md:p-8 p-2'>
    <h2 className=' text-2xl font-semibold'> Edit or Update Post </h2>
    <form
    onSubmit={handleSubmit} 
    className=' space-y-5 pt-8' >
      <div className=' space-y-4'>
        <label className=' font-semibold text-xl'>Blog Title :</label>
        <input
        className=' w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3' 
        type='text'
        defaultValue={blog?.post?.title}
        onChange={(e)=>setTitle(e.target.value)}
        placeholder='Ex: Jagannath Temple, Puri ...  ' required />
      </div>

      {/* blog details */}

      <div className=' flex flex-col md:flex-row justify-between items-start gap-4'>
        {/*left side */}
        <div className=' md:w-2/3 w-full'>
          <p className=' font-semibold text-xl mb-5'>Content Section</p>
          <p className=' text-xs italic '>Write your post below here...</p>
          <div id='editorjs'></div>
        </div>

        {/*right side */}
        <div className='md:w-1/3 w-full border p-5 space-y-5'>
          <p className=' text-xl font-semibold'>Choose Blog Format</p>

          {/* images */}
          <div className=' space-y-4'>
            <label className=' font-semibold '>Blog Cover :</label>
            <input
              className=' w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3' 
              type='text'
              defaultValue={blog?.post?.coverImage}
              onChange={(e)=>setCoverImage(e.target.value)}
              placeholder='Ex: https://unsplash.com/image/cover-phote-of-blog.png ...  ' 
              required 
            />
          </div>

          {/* category */}
          <div className=' space-y-4'>
            <label className=' font-semibold '>Category :</label>
            <input
              className=' w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3' 
              type='text'
              defaultValue={blog?.post?.catagory}
              onChange={(e)=>setCatagory(e.target.value)}
              placeholder='Ex: Temple/travel/ ...  ' 
              required 
            />
          </div>

          {/*  description */}
          <div className=' space-y-4'>
            <label className=' font-semibold '>Description :</label>
            <input
              className=' w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3' 
              type='text'
              cols={4}
              rows={4}
              defaultValue={blog?.post?.description}
              onChange={(e)=>setDescription(e.target.value)}
              placeholder=' write your blog description ...  ' 
              required 
            />
          </div>

          {/* rating */}
          <div className=' space-y-4'>
            <label className=' font-semibold '>Rating :</label>
            <input
              className=' w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3' 
              type='number'
              defaultValue={blog?.post?.rating}
              onChange={(e)=>setRating(e.target.value)}
              required 
            />
          </div>

         {/* author */}
         <div className=' space-y-4'>
            <label className=' font-semibold '>Author:</label>
            <input
              className=' w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3' 
              type='text'
              
              value={user.username}
              placeholder={`{user.username} (not editable)`} 
              disabled
            />
          </div>
          
        </div>
      </div>

    {
      message && <p className=' text-red-500'>{message}</p>

    }

    <button
    disabled={isLoading}
    className=' w-full mt-5 bg-primary hover:bg-indigo-500 text-white font-medium py-3 rounded-md' 
    type='submit'
    >
      Update Blog
    </button>

    </form>
  </div>
  )
}

export default UpdatePost