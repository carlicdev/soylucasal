
import books from '../utils/books'
import BookBanner from '../components/BookBanner'

const Libros = () => {
  return (
    <div className='max-w-7xl mx-auto w-full pt-[110px]'>
        <p className='text-5xl font-black text-center'>Los Libros de Luca</p>
        <div className='flex flex-wrap mt-5 justify-around gap-5'>
          {
            books.map((book) => (
              <BookBanner key={book.id} book={book} />
            ))
          }
        </div>
    </div>
  )
}

export default Libros