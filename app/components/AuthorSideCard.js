import Image from "next/image"

const AuthorSideCard = () => {
    return (
      <div className='card p-3 rounded-lg flex flex-col justify-center z-10'>
          <Image src={'/man.png'} width={100} height={100} className="mx-auto"/>
          <p className="text-2xl font-black my-2">Quién es Luca?</p>
          <p className='mb-4 font-light'>Soy escritor, programador y emprendedor. <span className="font-bold">Comprometido con ayudar a otros hombres a diseñar la vida que siempre soñaron.</span></p>
      </div>
    )
  }
  
  export default AuthorSideCard