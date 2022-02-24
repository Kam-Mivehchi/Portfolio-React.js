import React from 'react';
// import headshot from './headshot-formal-blur.jpg'

const paragraphStyles = "w-8/12 md:min-w-xl text-xl  font-medium text-center mx-auto py-2  md:text-2xl"

const headingStyles = "text-5xl font-extrabold py-4 "

function About(props) {
    return (


        <div className={` w-fit mx-auto  overflow-y-auto ${props.background} mt-20`} id='about'>
            {/* <img className="scale-[10%]  " src={headshot}></img> */}
            <div className=" flex flex-col   items-center ">

                <h1 className={`${headingStyles} + ${props.titleColor}`}>About</h1>

                <p className={`${paragraphStyles} + ${props.paragraphStyle}`}>
                    Proven research professional with experience in the development of cleaning chemicals and semiconductor growth. As an R&D Analytical Chemist for Shepard Bros Inc, I optimized several quality control processes to improve accuracy and precision of titrations substantially. Additionally, I lead efforts to resolve customers cleaning issues by developing 2 new products. In this role, I quickly adapted to the industry and was formulating new products within 6 months.
                    Orange County Native, with a passion for learning new skills and developing problem solving strategies that will optimize your business. Currently learning JavaScript, SQL, HTML, CSS and MERN through a full stack web development boot camp from UC Irvine.
                    <br />
                    <br />
                    As for my future, I hope to work as a product/software developer for a role that can utilize my Chemistry and R&D background. Additionally, I’m interested in opportunities that utilize modern technology to optimize laboratory and quality control processes.



                    Bachelor of Science in Chemistry from UC Riverside. Soon to be graduate of Full Stack Web Development Bootcamp (Mar. 2022)
                </p>

            </div>
        </div >


    );
}

export default About;