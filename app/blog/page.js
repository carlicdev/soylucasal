import Sidebar from '../components/Sidebar'
import PopularCategories from '../components/PopularCategories'
import PostList from '../components/PostList'
import { getCategories, getPosts, getRecentPosts } from '../services/graphql'
import LastPosts from '../components/LastPosts'
import AuthorSideCard from '../components/AuthorSideCard'
import PostCountByCategory from '../components/PostCountByCategory'
import Subscribe from '../components/Subscribe'

const Blog = async () => {
    const posts = await getPosts();
    const lastPosts = await getRecentPosts();
    const categories = await getCategories();

    
  return (
    <div className='max-w-7xl mx-auto w-full pt-[110px]'>
    <div className='grid grid-cols-10 gap-4'>
      <div className='hidden lg:block col-span-2'>
        <div className='lg:sticky relative top-14 flex flex-col gap-4'>
          <Sidebar/>
          <AuthorSideCard />
          {
            categories && <PostCountByCategory categories={categories}/>
          }
        </div>
      </div>
      <div className='col-span-10 lg:col-span-5'>
        {
          posts && <PostList posts={posts} />
        }    
      </div>
      <div className='col-span-10 lg:col-span-3 '>
        <div className='lg:sticky relative top-14 flex flex-col gap-4'>
        <PopularCategories />
        {
          lastPosts && <LastPosts posts={lastPosts} />
        }
        {/*<LastComments />  */}
        <div className='card p-3 rounded-lg'>
            <p className='text-xl mb-2 text-justify'>Entérate de nuevos posts, cursos, productos y promociones.</p>
            <Subscribe />
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Blog