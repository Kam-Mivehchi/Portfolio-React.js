import React from 'react';

import content from '../content';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Button from './button';

const leftBox = "rounded-xl border-4 border-blue-300 p-1 shadow-lg "
const rightBox = "rounded-xl border-4 border-blue-300 p-1  shadow-lg "

function Gallery() {

    const headingStyles = "text-5xl font-extrabold mx-auto mb-4  py-4 "

    return (

        <div className='min-h-screen flex flex-col items-center justify-center ' id='project'>
            <h1 className='text-5xl font-extrabold py-4 '>{content.project.title} </h1>
            <div className='py-2'>

                <div className='flex flex-col pb-10 w-5/6 md:w-1/2  mx-auto  '>{content.project.data.map((tech, index) => {
                    return (
                        <div className='rounded-xl border-4 border-blue-400 p-1  shadow-lg my-2'>
                            <div className=" p-2 ">
                                <img className='rounded-xl border-4 border-blue-300 p-1  shadow-lg ' src={tech.img} alt="" />
                            </div>
                            <div className='p-3' id="right-box-style">
                                <div className="flex justify-between items-center flex-wrap">

                                    <h2 id="title" className="text-2xl font-semibold">{tech.title}</h2>
                                    <div className="flex m-2 justify-center flex-wrap ">
                                        <a href="" id="git-link"><Button className={'w-24 bg-blue-400 px-4 py-1 rounded-full font-medium mx-2 text-lg'} text={'Github'} /></a>
                                        <a href="" id="deploy-link"><Button className={'w-24  bg-blue-400 px-4 py-1 rounded-full font-medium mx-2 text-lg flex-fit'} text={'Live Site'} /></a>
                                    </div>
                                </div>
                                <p id="desc " className='text-lg'>{tech.desc}</p>
                            </div>

                        </div>
                    );
                })}
                </div>
                {/* <p className='w-8/12 md:min-w-xl text-xl text-center mx-auto  mt-10 '>{content.stack.desc}</p> */}
            </div>
        </div>
        // <div className="flex flex-col pb-10  ">
        //     <h1 className={headingStyles}>Projects</h1>
        //     <div className="  w-4/6  mx-auto     grid grid-cols-2 gap-10 auto-rows-max">
        //         <div className="  ">
        //             <img className={leftBox} src={typeGIF} alt="" />
        //         </div>
        //         <div className={rightBox, "hidden hover:flex"} id="right-box-style">
        //             <h2 id="title">Project Title</h2>
        //             <p id="desc"></p>
        //             <a href="" id="git-link">Github</a>
        //             <a href="" id="deploy-link">Live Site</a>
        //         </div>
        //         <div className={leftBox, "hidden"} id="right-box-style">
        //             <h2 id="title">Project Title</h2>
        //             <p id="desc"></p>
        //             <a href="" id="git-link">Github</a>
        //             <a href="" id="deploy-link">Live Site</a>
        //         </div>
        //         <div className="">
        //             <img className={rightBox} src={workoutGIF} alt="" />
        //         </div>
        //         <div className="">
        //             <img className={leftBox} src={weatherGIF} alt="" />
        //         </div>
        //         <div className={rightBox, "hidden"} id="right-box-style">
        //             <h2 id="title">Project Title</h2>
        //             <p id="desc"></p>
        //             <a href="" id="git-link">Github</a>
        //             <a href="" id="deploy-link">Live Site</a>
        //         </div>
        //         <div className={leftBox, "hidden"} id="right-box-style">
        //             <h2 id="title">Project Title</h2>
        //             <p id="desc"></p>
        //             <a href="" id="git-link">Github</a>
        //             <a href="" id="deploy-link">Live Site</a>
        //         </div>
        //         <div className="">
        //             <img className={rightBox} src={noteGIF} alt="" />
        //         </div>

        //     </div>
        // </div>

    );
}

export default Gallery;