import React from 'react';

import content from '../content';
// import { LazyLoadImage } from 'react-lazy-load-image-component'
import Button from './button';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import { Carousel } from '3d-react-carousal';
// const responsive = {
//     desktop: {
//         breakpoint: { max: 3000, min: 1024 },
//         items: 3,
//         slidesToSlide: 3 // optional, default to 1.
//     },
//     tablet: {
//         breakpoint: { max: 1024, min: 464 },
//         items: 2,
//         slidesToSlide: 2 // optional, default to 1.
//     },
//     mobile: {
//         breakpoint: { max: 464, min: 0 },
//         items: 1,
//         slidesToSlide: 1 // optional, default to 1.
//     }
// };

function Gallery(props) {



    // let slides = content.project.data.map((proj, index) => {
    //     return (
    //         <div className={`mx-3 border min-h-full max-h-screen rounded-xl  ${props.cardBG} ${props.descColor}`}>

    //             <img src={proj.img} className={`rounded-t-xl`} alt="" />
    //             <div className=" grid grid-cols-1 w-10/12 mx-auto">
    //                 <div className="w-full  items-center text-center lg:justify-between">

    //                     <h1 className={`${props.title} text-xl md:text-4xl font-bold `}>{proj.title}</h1>
    //                     <div className=' justify-center'>
    //                         <button className={` px-5 py-2 mb-1  w-full rounded-full   ${props.buttonColor1}`} href={proj.git} target='_blank'
    //                             rel="noopener noreferrer">Github</button>
    //                         <button className={` px-5 py-2 w-full rounded-full ${props.buttonColor2}`} href={proj.live} target='_blank'
    //                             rel="noopener noreferrer">Live Site</button>
    //                     </div>
    //                 </div>
    //                 <p className={`text-md md:text-xl text-center my-4 ${props.descColor}`}>{proj.desc}</p>
    //                 {/* <p className="text-center text-md md:text-xl font-normal">Technologies Used:</p> */}
    //                 <div className="grid grid-cols-2 justify-center md:grid-cols-5 font-normal opacity-70 pb-4">
    //                     {proj.tech.map((tech, index) => {
    //                         return <div className=" mx-2">{tech}</div>
    //                     })}
    //                 </div>
    //             </div>
    //         </div >
    //     )
    // })

    return (
        // <div className=" h-screen py-6">
        //     <div className="h-1/2">

        //         <Carousel className={``} slides={slides} autoplay={true} interval={5000} />
        //     </div>
        // </div>

        // {content.project.data.map((proj, index) => {
        //     return (
        //         <div className={`mx-3 border min-h-full max-h-screen rounded ${props.cardBG}`}>
        //             <div className="h-1/2"></div>
        //             <img src={proj.img} alt="" />
        //             <div className="flex flex-col  items-center max-w-11/12 mx-auto">

        //                 <h1 className={`${props.title} max-text-xl font-bold `}>{proj.title}</h1>
        //                 <div>
        //                     <button className={` px-3 mx-2 ${props.buttonColor1}`} href={proj.git} target='_blank'
        //                         rel="noopener noreferrer">Github</button>
        //                     <button className={` px-3 ml-2${props.buttonColor2}`} href={proj.live} target='_blank'
        //                         rel="noopener noreferrer">Live Site</button>
        //                 </div>
        //                 <p className="max-text-md text-center my-4">{proj.desc}</p>
        //                 <p className="text-center">Technologies Used:</p>
        //                 <div className="flex flex-wrap justify-center">
        //                     {proj.tech.map((tech, index) => {
        //                         return <div className=" mx-2">{tech}</div>
        //                     })}
        //                 </div>
        //             </div>
        //         </div >
        //     )
        // })}

        <div className={`min-h-screen flex flex-col items-center justify-center pt-20 ${props.pageBackground}`} id='project'>

            <h1 className={`text-5xl font-extrabold py-4 ${props.title}`}>{content.project.title} </h1>

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
                                            rel="noopener noreferrer" id="git-link"><Button className={`w-32 bg-blue-400 px-4 py-1 rounded-full font-medium mx-2 text-lg ${props.buttonColor1}`} text={'Github'} /></a>
                                        <a href={tech.live} target='_blank'
                                            rel="noopener noreferrer" id="deploy-link"><Button className={`w-32  bg-blue-400 px-4 py-1 rounded-full font-medium mx-2 text-lg flex-fit ${props.buttonColor2}`} text={'Live Site'} /></a>
                                    </div>
                                </div>
                                <p id="desc " className={`text-lg ${props.descColor}`}>{tech.desc}</p>
                                <div className="">

                                    <p id="desc " className={`text-lg flex my-2 ${props.projTitle}`}>{tech.tech.map(n => <p className={`mx-2`}>{n}</p>)} </p>
                                </div>
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