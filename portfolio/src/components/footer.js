import React from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
    return (
        <div className='pb-2' id='footer'>
            <div className="flex justify-center items-center ">
                <div className='text-6xl text-blue-300 mx-4'><a href="mailto:kammivehchi@gmail.com" target='_blank'
                    rel="noopener noreferrer">
                    <AiOutlineMail />
                </a>
                </div>
                <div className='text-5xl text-blue-300 mx-4'><a href="https://github.com/Kam-Mivehchi" target='_blank' rel="noopener noreferrer">
                    <BsGithub />
                </a>
                </div>
                <div className='text-5xl text-blue-300 mx-4'><a href="https://www.linkedin.com/in/kamyar-mivehchi/" target='_blank' rel="noopener noreferrer">
                    <BsLinkedin />
                </a>
                </div>
            </div>

        </div>
    )
}

export default Footer