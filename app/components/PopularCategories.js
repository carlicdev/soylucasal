
import Link from 'next/link'
import { getCategories } from '../services/graphql'

const PopularCategories = async () => {
  const categories = await getCategories()

  return (
    <div className='card p-3 rounded-lg flex flex-col justify-center'>
        <p className='text-2xl font-bold tracking-wide mb-2 text-center text-special'>Categorías Populares</p>
        <div className='flex flex-wrap justify-around gap-2'>
          {
            categories && categories.map((tag, index) => (
              <Link href={`/categoria/${tag.slug}`} key={index}>
                <p className='px-1.5 bg-blue-800 text-white rounded-full' >{tag.name}</p>
              </Link>
            ))
          }
        </div>
    </div>
  )
}

export default PopularCategories