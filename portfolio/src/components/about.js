import React from 'react';
// import headshot from './headshot-formal-blur.jpg'

const paragraphStyles = "text-xl  w-3/4 p-5  border-l-2 border-black m-4"

const headingStyles = "text-4xl font-bold basis-1/4  flex justify-center items-start  py-4 border-b-2 border-black h-fit m-4"

function About() {
    return (


        <div className=' flex w-1/2 mx-auto ' id=''>
            {/* <img className="scale-[10%]  " src={headshot}></img> */}
            <div className=" flex mt-32">

                <h1 className={headingStyles}>About</h1>

                <p className={paragraphStyles}>
                    Proven research professional with experience in the development of cleaning chemicals and semiconductor growth. As an R&D Analytical Chemist for Shepard Bros Inc, I optimized several quality control processes to improve accuracy and precision of titrations substantially. Additionally, I lead efforts to resolve customers cleaning issues by developing 2 new products. In this role, I quickly adapted to the industry and was formulating new products within 6 months.
                    <br></br>

                    <br></br>
                    Orange County Native, with a passion for learning new skills and developing problem solving strategies that will optimize your business. Currently learning JavaScript, SQL, HTML, CSS and MERN through a full stack web development boot camp from UC Irvine.
                    <br></br>

                    <br></br>
                    As for my future, I hope to work as a product/software developer for a role that can utilize my Chemistry and R&D background. Additionally, I’m interested in opportunities that utilize modern technology to optimize laboratory and quality control processes.
                    <br></br>

                    <br></br>
                    Bachelor of Science in Chemistry from UC Riverside. Soon to be graduate of Full Stack Web Development Bootcamp (Mar. 2022)
                </p>

            </div>
        </div>


    );
}

export default About;