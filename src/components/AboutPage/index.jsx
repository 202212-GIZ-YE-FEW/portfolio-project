
import * as React from "react";
import SocialLinks from "../socialLinks";
import CV from "../CvButton";
const Aboutpage = () => {
    return (
        <>
            <div className="text-black dark:text-white h-1/2  py-20 flex font-Rampart">
                <div class="container mx-auto px-4 grid md:grid-cols-2 md:gap-16 sm:grid-cols-1 sm:gap-10  ">
                    <div class="flex flex-wrap flex-col ">
                        <div class="loader">
                            <div class="scanner">
                                <span>WELCOME ........ </span>
                            </div>
                        </div>
                        <span className="md:text-5xl sm:text-2xl py-4 font-Rampart" data-aos="flip-up" data-aos-duration="2000">
                            {/* Hello,<br></br> */}
                            My name is RAWAN.
                            {/* <span className="animate-waving-hand text-5xl p-7 text-center">
                                👋
                            </span> */}
                        </span>
                        <div>
                            <p className="animate-pulse text-yellow-400">Web Devloper</p>

                        </div>
                        <span className="md:text-xl sm:text-2xl py-4 font-Rampart" data-aos="zoom-in" data-aos-duration="2000">
                            {/* <p>I'm a Web developer who loves responsive design and css.<br></br> Passionate about tech, fast learner and love new challenges.</p> */}
                            <p>Web developer experienced in using various web development <br></br>tools and frameworks.I am passionate about staying up-to-date<br></br> with the latest trends and technologies in web development<br></br> to deliver high-quality solutions to clients.</p>
                        </span>
                    </div>
                    <div>
                        <img src="https://media4.giphy.com/media/hpXdHPfFI5wTABdDx9/giphy.gif?cid=ecf05e47ktbynzqdbinfa2jtzmat77nqz1g713cvfzsazywf&ep=v1_gifs_related&rid=giphy.gif&ct=g" alt="profile-pic" class="rounded-full" data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom" data-aos-duration="2000" />
                    </div>

                </div>
                <SocialLinks />

            </div>

        </>
    );
};
export default Aboutpage;
