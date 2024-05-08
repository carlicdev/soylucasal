
import Link from "next/link"
import styleDate from "../utils/date"

const LastPosts = ({posts}) => {

  return (
    <div className='card p-3 rounded-lg flex flex-col justify-center'>
        <p className='text-2xl text-special font-black tracking-wide mb-2 text-center'>Últimas entradas</p>
        <div className='flex flex-col justify-around'>
            {
                posts.map((post, index) => (
                    <div className='py-4 border-y border-gray-500' key={index}>
                        <Link href={`/post/${post.slug}`} className="hover:text-red-600">
                            <p className='text-lg font-light tracking-wide capitalize'>{post.title}</p>
                        </Link>
                        <p className='text-sm font-light text-gray-500'>{styleDate(post.createdAt)}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default LastPosts