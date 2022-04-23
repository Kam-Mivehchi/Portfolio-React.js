import React from "react";
import pdfResume from '../assets/Kamyar_Mivehchi_Resume.pdf'
import { useState } from "react";
import content from '../content';
import Button from "./button";

function Resume(props) {

    const [currentSkill, setCurrentSkill] = useState();



    function handleClick(e) {
        setCurrentSkill(e.target.textContent)
        console.log(e.target.textContent)
    }



    return (
        <div className={`min-h-screen w-2/3 mx-auto  border-2  flex justify-center items-center`}>
            <div className="flex flex-col ">
                <div className={`text-6xl font-black text-center ${props.headingText}`}>Skills</div>
                <div className="border-b-2 text-4xl ">
                    {content.resume.buttons.map((cat, idx) => {
                        return <button className={`border mx-1   ${currentSkill === cat ? 'bg-accentd' : 'bg-none'}`} onClick={handleClick}>{cat}</button>
                    })}

                    {/* hide these unless the state is equal to prgrammer */}
                    {/* <button className="border mx-1 hover:opacity-50">Front-End</button>
                    <button className="border mx-1 hover:opacity-50">Back-End</button> */}

                </div>
                <div className=" w-10/12 mx-auto">
                    {(currentSkill !== 'Chemical') && (
                        <>
                            <h1 className="  text-5xl "> Programming</h1>
                            <div className="grid  text-2xl grid-cols-3 ml-28 gap-1 ">
                                <h2 className=' text-4xl   '>{content.resume.skills.programming.front.title}</h2>
                                <p></p>
                                <p></p>
                                {content.resume.skills.programming.front.tech.map((tech) => {
                                    return <li className="list-disc  ">{tech}</li>
                                })}

                            </div>
                        </>
                    )
                    }
                    {(currentSkill !== 'Chemical') && (<div className="grid  text-2xl grid-cols-3 ml-28 gap-1 ">
                        <h2 className=' text-4xl   '>{content.resume.skills.programming.back.title}</h2>
                        <p></p>
                        <p></p>
                        {content.resume.skills.programming.front.tech.map((tech) => {
                            return <li className="list-disc  ">{tech}</li>
                        })}

                    </div>)}

                </div>
                <div className=" w-10/12 mx-auto">
                    <h1 className="  text-5xl "> Chemical</h1>
                    <div className="grid gap-1 text-2xl grid-cols-3 ml-28">

                        {content.resume.skills.chemical.map((tech) => {
                            return <li className="list-disc  ">{tech}</li>
                        })}

                    </div>


                </div>
            </div>

            {/* <div className={`  flex flex-col  py-24 `}>
                <h1 className={` ${props.headingText} text-6xl font-black mb-6 text-center`}>Proficiencies
                </h1>
                <div div='flex justify-start '>
                    <div className={`flex justify-between `}>
                        <button className=" basis-1/2 mx-4 bg-light-blue/5 hover:bg-light-blue/25 active:bg-light-blue/40 focus:bg-light-blue/30 rounded-lg ">
                            <h3 className={`text-3xl   font-black ${props.catText}`} onClick={() => setCurrentSkill('chemical')}>Chemical</h3>
                        </button>
                        <button className="basis-1/2 mx-4 bg-light-blue/5 hover:bg-light-blue/25 active:bg-light-blue/40 focus:bg-light-blue/30  rounded-lg " onClick={() => setCurrentSkill('programming')}>
                            <h3 className={`text-3xl  font-black ${props.catText} `}>Programming</h3>
                        </button>

                    </div>
                    <div className="mt-10 flex justify-center">
                        {displaySkill(currentSkill)}
                    </div>
                    <div className='flex justify-center mt-28 '>
                        <a href={pdfResume} target='_blank' rel="noopener noreferrer">

                            <Button className={` px-4 py-1 rounded-full  mx-2 text-3xl font-extrabold hover:bg-light-blue/25  ${props.resButtonColor}`} text='Resume (PDF)' />
                        </a>
                    </div>
                </div> */}
            {/* </div> */}

        </div >
    );

}

export default Resume;