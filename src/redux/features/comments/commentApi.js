import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const commentApi = createApi({
    reducerPath:"commentApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://wander-wave-blog-backend.onrender.com/api/comments",
        credentials:"include",

    }),
    tagTypes:['Comments'],
    endpoints:(buider) =>({
        postComment:buider.mutation({
            query:(commentData) =>({
                url:"/post-comment",
                method:"POST",
                body:commentData,
            }),
            invalidatesTags:(result, error, {postId}) =>[{type:'Comments', id:postId}],
        }),
        getComments:buider.query({
            query:() =>({
                url:"/total-comments",
                method:"GET"
            }),
        })
    }),
})

export const {useGetCommentsQuery,usePostCommentMutation} = commentApi;

export default commentApi;
