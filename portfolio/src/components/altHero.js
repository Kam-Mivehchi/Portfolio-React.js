import React from 'react'
import content from '../content'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Typical from 'react-typical'
import Button from './button';
import { Link as ScrollLink } from 'react-scroll'
const altHero = () => {
    return (
        <div className=' '>
            <div className="flex flex-col  min-h-screen md:flex-row-reverse items-center justify-evenly md:justify-between w-10/12 mx-auto   ">
                <div className="w-full md:w-2/5  ">

                    <LazyLoadImage src={content.header.imgPlaceholder} className=' h-128 object-cover  ' />
                </div>
                <div className="flex flex-col text-center items-center mb-12 md:items-start">


                    <h2 className="text-4xl md:text-5xlfont-bold ">{content.header.text}</h2>
                    <Typical
                        steps={content.header.typical}
                        loop={Infinity}
                        wrapper="h2"
                        className="text-2xl  "
                    />
                    <ScrollLink to="stack" smooth={true}>

                        <Button className={'bg-blue-500 px-4 py-1 rounded-full '} text={content.header.btnText} />
                    </ScrollLink>

                </div>
            </div>



        </div>
    )
}

export default altHero