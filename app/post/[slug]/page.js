import Comments from '@/app/components/Comments';
import LastComments from '@/app/components/LastComments';
import PostActions from '@/app/components/PostActions';
import PostDetail from '@/app/components/PostDetail';
import SimilarPosts from '@/app/components/SimilarPosts';
import Subscribe from '@/app/components/Subscribe';
import PostCountByCategory from '@/app/components/PostCountByCategory';
import { getPostDetails, getCategories } from '@/app/services/graphql';
import Sidebar from '@/app/components/Sidebar';
import AuthorSideCard from '@/app/components/AuthorSideCard';


const PostPage = async ({params}) => {
    const { slug } = params;
    const post = await getPostDetails(slug)
    const categories = await getCategories();

  return (
    <div className='max-w-7xl mx-auto w-full pt-[110px] '>
        <div className=' w-full grid grid-cols-10 gap-4'>
            <div className='hidden'>
                <PostActions />
            </div>
            <div className='col-span-10 lg:col-span-7 flex flex-col'>
                {post && <PostDetail post={post}/> }
                <Comments />
            </div>
            <div className='col-span-10 lg:col-span-3'>
                <div className='lg:sticky relative top-14 flex flex-col gap-4'>
                    <Sidebar />
                    <Subscribe />
                    <AuthorSideCard />
                    <SimilarPosts slug={post.slug} categories={post.categories.map((category) => category.slug)} />
                    {/**<LastComments /> /** */}
                    {
                        categories && <PostCountByCategory categories={categories}/>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostPage