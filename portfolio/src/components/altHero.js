import React from 'react'
import content from '../content'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Typical from 'react-typical'
import Button from './button';
import { Link as ScrollLink } from 'react-scroll'
const altHero = () => {
    return (
        <div className=' ' >
            <div className="flex flex-col  min-h-screen md:flex-row-reverse items-center justify-evenly md:justify-between w-10/12 mx-auto   ">
                <div className="w-full md:w-2/5  ">

                    <LazyLoadImage src={content.header.imgPlaceholder} className=' h-128 object-cover  ' />
                </div>
                <div className="flex flex-col text-center items-center mb-12 md:items-start ">


                    <h2 className="text-4xl md:text-5xl font-extrabold my-2 ">{content.header.text}</h2>
                    <Typical
                        steps={content.header.typical}
                        loop={Infinity}
                        wrapper="h2"
                        className="text-2xl font-semibold my-2"
                    />
                    <div className='flex'>

                        <ScrollLink to="project" smooth={true}>
                            <Button className={'bg-blue-400 px-4 py-1 rounded-full text-xl font-medium my-2 w-40 mx-1 '} text={'Projects'} />
                        </ScrollLink>
                        <ScrollLink to="about" smooth={true}>
                            <Button className={'bg-blue-400 px-4 py-1 rounded-full text-xl font-medium my-2 w-40 mx-1'} text={'Learn More...'} />
                        </ScrollLink>

                    </div>
                </div>
            </div>



        </div>
    )
}

export default altHero