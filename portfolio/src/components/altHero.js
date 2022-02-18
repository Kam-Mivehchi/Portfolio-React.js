import React from 'react'
import content from '../content'
const altHero = () => {
    return (
        <div className='flex flex-col h-screen bg-blue-100 items-center justify-center '>
            <div className="flex flex-col text-center">
                <div className=''>
                    <div >

                        <h2 className="text-4xl ">{content.header.text}</h2>
                        <h2 className="text-2xl ">

                            <span>{content.header.typical[0]}</span>
                        </h2>
                    </div>

                    <button>{content.header.btnText}</button>
                </div>
                <div>
                </div>
            </div>

            <img className='h-128 object-cover ' height='' src={content.header.imgPlaceholder} alt="" />

        </div>
    )
}

export default altHero