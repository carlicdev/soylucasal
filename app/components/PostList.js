
import PostCard from './PostCard'

const PostList = ({posts}) => {
  return (
    <div className='flex flex-col gap-3'>
        {posts.map((post, index) => <PostCard post={post.node} index={index} key={index} />)}
    </div>
  )
}

export default PostList