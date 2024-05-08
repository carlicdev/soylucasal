import React from 'react';
import styleDate from '../utils/date'
import { TbPointFilled } from 'react-icons/tb'
import Link from 'next/link';
import Image from 'next/image';

const PostDetail = ({post}) => {

    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;
    
        if (obj) {

          if (obj.href) {
            modifiedText = (<a key={index} href={obj.href} rel="noopener noreferrer" target={obj.openInNewTab ? '_blank' : null}  className="mb-8 text-red-300 font-semibold" >{obj.children[0].text}</a>);
          }

          if (obj.bold) {
            modifiedText = (<b key={index} className='font-bold'>{text}</b>);
          }
    
          if (obj.italic) {
            modifiedText = (<em key={index} className='italic'>{text}</em>);
          }
    
          if (obj.underline) {
            modifiedText = (<u key={index}>{text}</u>);
          }

          if (obj.code) {
            modifiedText = (
                <div key={index} className='font-mono mx-auto px-2 py-4 bg-black text-gray-200 font-thin'>
                    {text}
                </div>
                );
          }
        }
    
        switch (type) {

          case 'bulleted-list':
            return <div key={index} className='text-black my-4 p-4 bg-gray-100 border-l-2  border-yellow-300'>{
                obj.children.map(({children}, index) => (
                    <p key={index} className='flex items-start text-lg font-bold mb-1 text-justify '><span className='mt-1'><TbPointFilled/></span>{children[0].children[0].text}</p>
                ))
            }</div>
          case 'block-quote':
            return <p key={index} className="text-lg font-semibold text-black my-4 p-4 bg-gray-100 border-l-2  border-blue-500">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
          case 'heading-two':
            return <h2 key={index} className="text-4xl text-special font-black mb-4 mt-10">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>;
          case 'paragraph':
            return <p key={index} className="my-4 text-justify tracking-wide text-lg">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
          case 'heading-four':
            return <h4 key={index} className="text-2xl font-black text-special mb-4 mt-14">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
          case 'image':
            return (
              <img
                key={index}
                alt={obj.title}
                height={obj.height}
                width={obj.width}
                src={obj.src}
                className='mx-auto my-5 rounded-lg'
              />
            );
          default:
            return modifiedText;
        }
      };

  return (
    <div className='card  rounded-lg'>
        <img src={post.featuredImage.url} alt='postImg' className='w-full h-[400px] rounded-t-lg mb-4'/>
        <div className='p-4 rounded-lg'>
            <h2 className='text-center text-4xl lg:text-5xl font-black mb-2 text-special capitalize'>{post.title}</h2>
            <div className='flex max-w-2xl mx-auto w-full mb-5 px-5'>
                <p className='ml-0 mr-auto'>{styleDate(post.createdAt)}</p>
                <div className='flex gap-2 ml-auto mr-0'>
                    <Image src={'/man.png'} width={25} height={25} />
                    <p>{post.author.name}</p>
                </div>
            </div>
            <div className='p-5'>
                {
                    post.content.raw.children.map((typeObj, index) => {
                        const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))
                    
                        return getContentFragment(index, children, typeObj, typeObj.type)
                    })
                }
            </div>
            <div className='flex flex-wrap justify-center gap-2'>
                {
                    post.categories.map((category, index) => (
                      <Link href={`/categoria/${category.slug}`} key={index} >
                        <div className='bg-yellow-500 text-black font-light px-2 py-1 rounded-full'>
                            <p className={`text-sm text-${category.color}`}>#{category.name}</p>
                        </div>
                      </Link>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default PostDetail