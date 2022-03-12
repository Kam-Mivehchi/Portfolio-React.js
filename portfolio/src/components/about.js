import React from 'react';
// import headshot from './headshot-formal-blur.jpg'

const paragraphStyles = "w-8/12 md:min-w-xl text-xl  font-medium text-center mx-auto  md:text-2xl"

const headingStyles = "text-5xl font-extrabold py-4 mb-16"

function About(props) {
    return (


        <div className={` w-fit mx-auto   overflow-y-auto ${props.background} pt-32 `} id='about'>
            {/* <img className="scale-[10%]  " src={headshot}></img> */}
            <div className=" flex flex-col   items-center ">

                <h1 className={`${headingStyles} + ${props.titleColor}`}>About</h1>

                <p className={`${paragraphStyles} + ${props.paragraphStyle}`}>
                    R&D Analytical Chemist with experience in product development and process improvement. Seeking a web
                    development position in need of an experienced problem solver with great communication skills. Possesses a B.S. in
                    Chemistry and is adaptable, collaborative and motivated to learn. Earning a certificate in Full Stack Web development
                    from the University of California, Irvine to support this career transition
                    <br />

                    Proven research professional with experience in the development of cleaning chemicals and semiconductor growth. As an R&D Analytical Chemist for Shepard Bros Inc, I optimized several quality control processes to improve accuracy and precision of titrations substantially. Additionally, I lead efforts to resolve customers cleaning issues by developing 2 new products. In this role, I quickly adapted to the industry and was formulating new products within 6 months.
                    Orange County Native, with a passion for learning new skills and developing problem solving strategies that will optimize your business. Currently learning JavaScript, SQL, HTML, CSS and MERN through a full stack web development boot camp from UC Irvine.
                </p>

            </div>
        </div >


    );
}

export default About;