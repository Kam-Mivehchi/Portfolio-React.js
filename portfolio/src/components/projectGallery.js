import React from 'react';
import noteGIF from '../assets/NoteTaker.gif';
import typeGIF from '../assets/typing-demo (1).gif';
import workoutGIF from '../assets/WokoutWiz.gif';
import weatherGIF from '../assets/weatherDash.gif';

const leftBox = "rounded-l-3xl rounded-r-lg border-4 border-red-400  "
const rightBox = "rounded-r-3xl rounded-l-lg border-4 border-red-400   "


export default function () {
    return (
        <div className="  flex mx-auto w-1/2">
            <div className="mt-32   gap-2 grid grid-cols-3">

                <div className=" col-span-2 ">
                    <img className={leftBox} src={typeGIF} alt="" />
                </div>
                <div className={rightBox} id="right-box-style">
                    <h2 id="title">Project Title</h2>
                    <p id="desc"></p>
                    <a href="" id="git-link">Github</a>
                    <a href="" id="deploy-link">Live Site</a>
                </div>
                <div className={leftBox} id="right-box-style">
                    <h2 id="title">Project Title</h2>
                    <p id="desc"></p>
                    <a href="" id="git-link">Github</a>
                    <a href="" id="deploy-link">Live Site</a>
                </div>
                <div className="col-span-2">
                    <img className={rightBox} src={workoutGIF} alt="" />
                </div>
                <div className="col-span-2">
                    <img className={leftBox} src={weatherGIF} alt="" />
                </div>
                <div className={rightBox} id="right-box-style">
                    <h2 id="title">Project Title</h2>
                    <p id="desc"></p>
                    <a href="" id="git-link">Github</a>
                    <a href="" id="deploy-link">Live Site</a>
                </div>
                <div className={leftBox} id="right-box-style">
                    <h2 id="title">Project Title</h2>
                    <p id="desc"></p>
                    <a href="" id="git-link">Github</a>
                    <a href="" id="deploy-link">Live Site</a>
                </div>
                <div className="col-span-2">
                    <img className={rightBox} src={noteGIF} alt="" />
                </div>

            </div>
        </div>

    );
}