import DropDown from './dropDown'
import content from '../content'
import { useState } from 'react';



const mobileNav = (props) => {

    return (
        <div className={props.divbg}>
            <div className={`flex justify-between items-center text-md w-5/6 mx-auto pt-1  font-extrabold  + ${props.textColor}`}>
                <a href="">
                    <h1 className='text-3xl hover:text-light-blue/25  rounded-lg px-2 ' onClick={() => props.setCurrentPage('altHero')} >{content.nav.logoSmall}</h1>

                </a>
                <DropDown setCurrentPage={props.setCurrentPage} />
                {/* <bigNav /> */}
                <div className="hidden md:flex items-center space-x-4 ">
                    <button>
                        <h1 className='text-accentd text-2xl font-extrabold hover:text-light-blue/25 rounded-lg px-2' onClick={() => props.setCurrentPage('about')}>About</h1>

                    </button>
                    <button>
                        <h1 className='text-accentd text-2xl font-extrabold hover:text-light-blue/25 rounded-lg px-2' onClick={() => props.setCurrentPage('project')}>Projects</h1>

                    </button>
                    <button>
                        <h1 className='text-accentd text-2xl font-extrabold hover:text-light-blue/25 rounded-lg px-2' onClick={() => props.setCurrentPage('resume')}>Resume</h1>

                    </button>
                    <button>
                        <h1 className='text-accentd text-2xl font-extrabold hover:text-light-blue/25 rounded-lg px-2' onClick={() => props.setCurrentPage('contact')}>Contact</h1>

                    </button>
                    <button>

                        <h1 className='text-accentd text-2xl font-extrabold' onClick={() => props.setCurrentPage('About')}></h1>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default mobileNav;