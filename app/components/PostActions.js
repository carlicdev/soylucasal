import { AiOutlineHeart, AiOutlineMessage, AiOutlineShareAlt } from 'react-icons/ai'

const PostActions = () => {
  return (
    <div className='w-full flex flex-col gap-5 items-center pt-10'>
            <div className="flex items-center gap-1">
                <span className="text-3xl text-red-600"><AiOutlineHeart /></span>
                <p className='text-lg'>2</p>
            </div>
            <div className="flex items-center gap-1">
                <span className="text-3xl text-blue-600"><AiOutlineMessage /></span>
                <p className='text-lg'>5</p>
            </div>
            <div className="flex items-center gap-1">
                <span className="text-3xl text-yellow-600"><AiOutlineShareAlt /></span>
                <p className='text-lg'>5</p>
            </div>
    </div>
  )
}

export default PostActions