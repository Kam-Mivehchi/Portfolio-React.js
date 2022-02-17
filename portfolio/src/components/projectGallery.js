import React from 'react';
import noteGIF from '../assets/NoteTaker.gif';
import typeGIF from '../assets/typing-demo (1).gif';
import workoutGIF from '../assets/WokoutWiz.gif';
import weatherGIF from '../assets/weatherDash.gif';

const leftBox = "rounded-l-3xl rounded-r-lg border-4 border-red-400  "
const rightBox = "rounded-r-3xl rounded-l-lg border-4 border-red-400   "


function Gallery() {


    return (
        <div className="flex flex-col justify-end  ">
            <div className="  w-4/6  mx-auto     grid grid-cols-2 gap-3 auto-rows-max">

                <div className="  ">
                    <img className={leftBox} src={typeGIF} alt="" />
                </div>
                <div className={rightBox, "hidden hover:flex"} id="right-box-style">
                    <h2 id="title">Project Title</h2>
                    <p id="desc"></p>
                    <a href="" id="git-link">Github</a>
                    <a href="" id="deploy-link">Live Site</a>
                </div>
                <div className={leftBox, "hidden"} id="right-box-style">
                    <h2 id="title">Project Title</h2>
                    <p id="desc"></p>
                    <a href="" id="git-link">Github</a>
                    <a href="" id="deploy-link">Live Site</a>
                </div>
                <div className="">
                    <img className={rightBox} src={workoutGIF} alt="" />
                </div>
                <div className="">
                    <img className={leftBox} src={weatherGIF} alt="" />
                </div>
                <div className={rightBox, "hidden"} id="right-box-style">
                    <h2 id="title">Project Title</h2>
                    <p id="desc"></p>
                    <a href="" id="git-link">Github</a>
                    <a href="" id="deploy-link">Live Site</a>
                </div>
                <div className={leftBox, "hidden"} id="right-box-style">
                    <h2 id="title">Project Title</h2>
                    <p id="desc"></p>
                    <a href="" id="git-link">Github</a>
                    <a href="" id="deploy-link">Live Site</a>
                </div>
                <div className="">
                    <img className={rightBox} src={noteGIF} alt="" />
                </div>

            </div>
        </div>

    );
}

export default Gallery;