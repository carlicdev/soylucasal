import Contact from '@/app/components/Contact';
import Subscribe from '@/app/components/Subscribe'
import guides from '@/app/utils/guides'

const GuideDetails = async ({params}) => {
    const { slug } = params
    const guide = guides.find((item) => item.slug === slug);
    
  return (
    <main className='max-w-7xl mx-auto w-full pt-[110px]'>
        <p className='text-4xl font-bold tracking-wide mb-10 capitalize'>{guide.title}</p>
        <p className='text-2xl'>Me encuentro trabajando en esta guia...</p>
        <div className='card max-w-2xl p-5 mt-10'>
            <p className='text-xl lg:text-2xl mb-5'>Entérate antes que nadie del lanzamiento de esta guía registrándote a mi <span className='font-bold'>Newsletter.</span></p>
            <Subscribe />
        </div>
        <Contact />
    </main>
  )
}

export default GuideDetails