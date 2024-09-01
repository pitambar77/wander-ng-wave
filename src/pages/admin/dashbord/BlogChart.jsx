import React from 'react'
import {formatDate} from '../../../utils/formatDate'
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const formatData = (blogs) =>{
    return blogs.map(blog =>({
        name:formatDate(blog.createdAt),
        post:blog.title.length,
        pv:blog.pageViews || 0,
        amt:blog.amt || 0
    }))
}

const BlogChart = ({blogs}) => {

    const data = formatData(blogs);

  return (
    <div className=' p-6 bg-bgPrimary rounded-lg shadow-md'>
        <h2 className=' text-xl font-semibold mb-4'>Blogs chart!</h2>
        <div className=' h-80'>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart 
                data={data}
                margin={{
                    top:10,
                    right:30,
                    left:0,
                    bottom:0
                }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey='name'/>
                    <YAxis/>
                    <Tooltip/>
                    <Area type='monotone' dataKey='post' stroke='#8884db' fill='#8884db' />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default BlogChart