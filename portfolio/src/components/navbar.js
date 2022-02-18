import React, { useState } from "react";
import { IoHome } from "react-icons/io5"
import { BsFillPersonLinesFill, BsFillFileEarmarkCodeFill, BsGithub } from "react-icons/bs";
import { AiFillFileText, AiTwotoneMail, AiFillLinkedin } from "react-icons/ai";
import { CgShapeHexagon } from "react-icons/cg";

function Nav() {


    const linkButton = "flex-auto text-center  flex mx-4  text-sm justify-center"
    const externalLink = "m-1 flex"
    return (
        <>


            <div className="flex absolute w-screen  flex-shrink mt-3  justify-between">
                <div className="flex basis-1/5 border border-blue-500 justify-start items-center  p-2 rounded-r-full bg-red-400 ">

                    <div className="border border-blue-500 mx-4 text-4xl "><CgShapeHexagon /></div>

                </div>
                <div className="flex basis-2/5 border border-blue-500 justify-between flex-wrap p-2 rounded-l-full bg-red-400">
                    <div className={linkButton} >
                        <IoHome />
                        <h6>Home</h6>
                    </div>
                    <div className={linkButton}  ><BsFillPersonLinesFill />About</div>
                    <div className={linkButton} ><BsFillFileEarmarkCodeFill />Projects</div>
                    <div className={linkButton} ><AiFillFileText />Resume</div>
                    <div className={linkButton, 'flex  mx-4'}>
                        <div className={externalLink}><AiFillLinkedin /></div>
                        <div className={externalLink}><BsGithub /></div>
                        <div className={externalLink}><AiTwotoneMail /></div>
                    </div>
                </div>

            </div>









        </>
    );
}

export default Nav;