import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { usePostCommentMutation } from '../../../redux/features/comments/commentApi';
import { useFetchBlogByIdQuery } from '../../../redux/features/blogs/blogsApi';

const PostAComment = () => {

  const navigate = useNavigate();

    const {id} = useParams();
    const [comment,setComment] = useState('')

   // handle posting function later

   const {user} = useSelector((state)=> state.auth);

  //  console.log(user);

  const [postComment] = usePostCommentMutation();

  const {refetch} = useFetchBlogByIdQuery(id,{skip:!id})

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(!user){
      alert('Please login to comment on this post');
      navigate('/login');
      return;
    }
    const newComment = {
      comment:comment,
      user:user?._id,
      postId:id
    }
    // console.log(newComment);

    try {
      const response = await postComment(newComment).unwrap();
      console.log(response);
      alert('Comment posted successfully! ');
      setComment('');
      refetch();
    } catch (error) {
      alert('An error occured with on this post.')
    }
  }

  return (
    <div className=' mt-8'>
        <h3 className=' text-lg font-medium mb-8'>Leave a Comment</h3>
        <form onSubmit={handleSubmit} >
            <textarea name='text'
            value={comment}
            onChange={(e)=>setComment(e.target.value)}
            cols='30'
            rows='10'
            placeholder='Share your opinion about this .....'
            className=' w-full bg-bgPrimary focus:outline-none p-5 '
            />
            <button type='submit' className=' w-full bg-primary hover:bg-indigo-500 text-white font-medium rounded-md py-2'>Submit</button>
        </form>
    </div>
  )
}

export default PostAComment