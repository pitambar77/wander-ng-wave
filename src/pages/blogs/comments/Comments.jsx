import React from 'react'
import commentorIcon from '../../../assets/hero-carousel/commentor.png'
import { formatDate } from '../../../utils/formatDate'
import PostAComment from './PostAComment'
import { useSelector } from 'react-redux'

const Comments = ({comments}) => {

    const user = useSelector((state) => state.auth.user);
    // console.log(user);

  return (
    <div className=' my-6 bg-white p-8'>
        <div>
            {
                comments?.length > 0 ? <div>
                    <h3 className=' text-lg font-medium'>All Comments</h3>
                    <div>
                        {
                            comments.map((comment,index)=>(
                                <div key={index} className=' mt-4' >
                                    <div className=' flex gap-4 items-center'>
                                        <div className=' size-10'>
                                        <img src={commentorIcon} alt="commentor Image" className='  h-full w-full rounded-full' />
                                        </div>
                                        <div>
                                            <p className=' text-lg font-medium underline capitalize underline-offset-4 text-blue-400 '>
                                                {comment?.user?.username}
                                            </p>
                                            <p className=' text-[12px] italic'>{formatDate(comment.createdAt)}</p>
                                        </div>
                                    </div>

                                    {/* comment details */}

                                    <div className=' text-gray-600 mt-5 border border-gray-200 rounded-md p-3'>
                                        <p className=' w-full'>{comment?.comment}</p>
                                    </div>


                                </div>
                            ))
                        }
                    </div>
                </div>:<div className=' text-lg font-medium'>No comments found!</div>
            }
        </div>

        {/* Comment input here */}
        <PostAComment/>
    </div>
  )
}

export default Comments