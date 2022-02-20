import React from 'react'
import content from '../content'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Stack = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center ' id='stack'>
            <h1 className='text-5xl font-extrabold py-4 '>Stack </h1>
            <div className='py-2'>

                <div className='flex flex-wrap justify-center  '>{content.stack.tech.map((tech, index) => {
                    return (<span className='w-40 h-40 bg-white  outline outline-offset-4 outline-2 shadow-2xl m-2 rounded-full flex items-center p-5  '>
                        <LazyLoadImage src={tech.img} alt={tech.alt} />
                    </span>);
                })}
                </div>
                {/* <p className='w-8/12 md:min-w-xl text-xl text-center mx-auto  mt-10 '>{content.stack.desc}</p> */}
            </div>
        </div>
    );
}

export default Stack