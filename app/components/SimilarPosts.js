import Link from 'next/link'
import styleDate from '../utils/date'
import { getSimilarPosts } from '../services/graphql'

const SimilarPosts = async ({slug, categories}) => {
    const posts = await getSimilarPosts(categories, slug)

    if (!posts.length){
        return null
    }

    return (
    <div className='card p-3 rounded-lg flex flex-col justify-center'>
        <p className='text-2xl text-special font-bold mb-2 text-center tracking-wide'>Posts Similares</p>
        <div className='flex flex-col justify-around'>
            {
                posts.map((post, index) => (
                    <div className='py-4 border-y border-gray-500' key={index}>
                        <Link href={`/post/${post.slug}`} className="hover:text-blue-800">
                            <p className='text-lg text-light'>{post.title}</p>
                        </Link>
                        <p className='text-sm font-light text-gray-500'>{styleDate(post.createdAt)}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default SimilarPosts