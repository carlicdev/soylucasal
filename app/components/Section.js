import PostList from "./PostList";
import Link from "next/link";
import SecondaryCard from "./SecondaryCard";
import { getPosts } from "../services/graphql";
import courses from "../utils/courses";

const  Section = async () => {
    const posts = await getPosts();

  return (
    <div className='max-w-7xl mx-auto w-full pt-[20px] px-2 lg:px-0'>
        <div className='w-full flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
            {
            posts && <PostList posts={[posts[0]]} />
            } 
            <div className='flex justify-center my-10'>
            <Link href={'/blog'}>
                <div className='px-7 py-5 bg-blue-800 rounded-lg text-2xl text-white'>
                    Más Artículos de Mi Blog
                </div>
            </Link>     
            </div>
        </div>
        <div className='w-full lg:w-1/2 flex flex-col gap-5 lg:pl-5 px-5 lg:pr-0'>
            {
            courses.map((course) => (
                <SecondaryCard course={course} key={course.id} />
            ))
            }
        </div>
        </div>
    </div>
  )
}

export default Section