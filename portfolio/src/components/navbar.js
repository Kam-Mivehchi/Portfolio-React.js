import React, { useState } from "react";
import About from './about'
import Hero from './hero'
import Projects from './projectGallery'
import Resume from './resume'

function Nav() {




    return (
        <>


            <div className="flex absolute w-screen mt-3  justify-between">
                <div className="flex basis-1/5 border border-blue-500 justify-start  p-2 rounded-r-full bg-red-400 ">

                    <div className="border border-blue-500 mx-4">Logo</div>
                    <div className="border border-blue-500 mx-4">Kamyar Mivehchi</div>
                </div>
                <div className="flex basis-2/5 border border-blue-500 justify-between p-2 rounded-l-full bg-red-400">
                    <div className="border border-blue-500 flex-auto text-center mx-4 rounded-full" >Home</div>
                    <div className="border border-blue-500 flex-auto text-center mx-4 rounded-full"  >About</div>
                    <div className="border border-blue-500 flex-auto text-center mx-4 rounded-full" >Projects</div>
                    <div className="border border-blue-500 flex-auto text-center mx-4 rounded-full" >Resume</div>
                    <div className="border border-blue-500 flex-auto text-center mx-4 flex rounded-full">
                        <div className="border border-blue-300 flex-auto text-center rounded-full">L</div>
                        <div className="border border-blue-300 flex-auto text-center rounded-full">G</div>
                        <div className="border border-blue-300 flex-auto text-center rounded-full">M</div>
                    </div>
                </div>

            </div>









        </>
    );
}

export default Nav;