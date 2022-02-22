import React from 'react';

import content from '../content';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Button from './button';

const leftBox = "rounded-xl border-4 border-blue-300 p-1 shadow-lg "
const rightBox = "rounded-xl border-4 border-blue-300 p-1  shadow-lg "

function Gallery(props) {

    const headingStyles = "text-5xl font-extrabold mx-auto mb-4  py-4 "

    return (

        <div className={`min-h-screen flex flex-col items-center justify-center ${props.pageBackground}`} id='project'>
            <h1 className='text-5xl font-extrabold py-4 '>{content.project.title} </h1>
            <div className='py-2'>

                <div className='flex flex-col pb-10 w-5/6 md:w-1/2  mx-auto  '>{content.project.data.map((tech, index) => {
                    return (
                        <div className={`rounded-xl border-4 border-blue-400 p-1  shadow-lg my-2 ${props.cardBG}`}>
                            <div className=" p-2 ">
                                <img className='rounded-xl border-4 border-blue-300 p-1  shadow-lg ' src={tech.img} alt="" />
                            </div>
                            <div className='p-3' id="right-box-style">
                                <div className="flex justify-between items-center flex-wrap">

                                    <h2 id="title" className={`text-2xl font-semibold ${props.projTitle}`}>{tech.title}</h2>
                                    <div className="flex m-2 justify-center flex-wrap ">
                                        <a href={tech.git} target='_blank'
                                            rel="noopener noreferrer" id="git-link"><Button className={`w-24 bg-blue-400 px-4 py-1 rounded-full font-medium mx-2 text-lg ${props.buttonColor1}`} text={'Github'} /></a>
                                        <a href={tech.live} target='_blank'
                                            rel="noopener noreferrer" id="deploy-link"><Button className={`w-24  bg-blue-400 px-4 py-1 rounded-full font-medium mx-2 text-lg flex-fit ${props.buttonColor2}`} text={'Live Site'} /></a>
                                    </div>
                                </div>
                                <p id="desc " className={`text-lg ${props.descColor}`}>{tech.desc}</p>
                            </div>

                        </div>
                    );
                })}
                </div>

            </div>
        </div>


    );
}

export default Gallery;