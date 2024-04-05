import React from 'react'
import Link from 'next/link'

const PostCountByCategory = ({categories}) => {
  return (
    <div className='card p-3 rounded-lg flex flex-col justify-center'>
        <p className='text-2xl text-special tracking-wide font-bold mb-2 text-center'>Categorías</p>
            {categories.map((category) => (
                <Link key={category.slug} href={`/categoria/${category.slug}`}>
                    <span className='cursor-pointer block pb-3 mb-1 text-light text-lg tracking-wide hover:text-blue-800'>
                        {category.name} ({category.posts.length})
                    </span>
                </Link>
            ))}
    </div>
  )
}

export default PostCountByCategory