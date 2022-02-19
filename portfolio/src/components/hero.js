import React, { useState, useEffect } from "react";



function Hero() {


    return (
        <div className="h-screen  bg-red-300 flex flex-col ">
            <div className="bg-red-100 h-5/6 w-full flex flex-col justify-center items-center ">
                <h2 className="text-4xl font-bold my-3">Kamyar Mivehchi</h2>
                <div className="flex ">

                    <h3 className="text-3xl font-bold mx-2 border-2 border-black">filler</h3>
                    <h3 className="text-3xl font-bold mx-2 border-2 border-black">Filler</h3>


                </div>
                <div className="button border rounded-full bg-blue-400 p-2" type="button">This button</div>

            </div>
            <div className="mx-auto  my-auto border">
                Arrow Icon</div>
        </div>
    );
}

export default Hero;