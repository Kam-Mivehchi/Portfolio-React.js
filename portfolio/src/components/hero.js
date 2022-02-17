import React, { useState, useEffect } from "react";



function Hero() {
    // const [count, setCount] = useState(1);
    // const [jobs, setJobs] = useState("Chemist")
    // const roles = ["Chemist.", "Full Stack Web Developer.", "Problem-Solver."]




    // const handleClick = () => {
    //     //set jobs to a different state in the array
    //     setCount(count + 1);
    //     if (count === roles.length - 1) {
    //         setCount(0);
    //     }
    //     setJobs(roles[count]);
    //     console.log(count, roles[count])

    // }

    return (
        <div className="h-screen  bg-red-300 flex flex-col ">
            <div className="bg-red-100 h-5/6 w-full flex flex-col justify-center items-center ">
                <h2 className="text-4xl font-bold my-3">Kamyar Mivehchi</h2>
                <div className="flex ">

                    <h3 className="text-3xl font-bold mx-2 border-2 border-black">filler</h3>
                    <h3 className="text-3xl font-bold mx-2 border-2 border-black">Filler</h3>


                </div>
                <div className="button border rounded-full bg-blue-400 p-2" type="button"  >This button</div>

            </div>
            <div className="mx-auto  my-auto border">
                Arrow Icon</div>
        </div>
    );
}

export default Hero;