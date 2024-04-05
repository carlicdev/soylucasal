import { getCategories, getCategoryPost } from '@/app/services/graphql'

import Sidebar from '@/app/components/Sidebar'
import PostList from '@/app/components/PostList'
import PostCountByCategory from '@/app/components/PostCountByCategory'
import Subscribe from '@/app/components/Subscribe'
import AuthorSideCard from '@/app/components/AuthorSideCard'

const Category = async ({params}) => {
    const { slug } = params
    const posts = await getCategoryPost(slug)
    const categories = await getCategories();
    
  return (
    <main className='max-w-7xl mx-auto w-full pt-[110px]'>
      <div className='grid grid-cols-10 gap-2'>
      <div className='hidden lg:block col-span-2'>
        <div className='lg:sticky relative top-14 flex flex-col gap-4'>
          <Sidebar/>
          <AuthorSideCard />
        </div>
      </div>
        <div className='col-span-10 lg:col-span-5'>
          {
            posts && <PostList posts={posts} />
          }    
        </div>
        <div className='col-span-10 lg:col-span-3 flex flex-col gap-2'>
          {
            categories && <PostCountByCategory categories={categories}/>
          }
          
          {/* {
            lastPosts && <LastPosts posts={lastPosts} />
          } */}
          {/* <LastComments /> */}
          <div className='card p-3 rounded-lg'>
            <p className='text-2xl mb-2'>Suscríbete a nuestro Boletín Informativo.</p>
            <Subscribe />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Category