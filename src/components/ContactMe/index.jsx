
import React from "react"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactMe = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<footer>
			
				<div className="text-center mt-40" data-aos="zoom-out">

				<h3 className="animate-pulse text-yellow-500 text-2xl">CONTACT</h3>
					<p>If you're interested in chatting or want more information about what I've been working on, I'd love to hear from you!</p>
					<p>Email: <a href="rawan.sb@yahoo.com"><b className="text-yellow-500" >rawan.sb@yahoo.com</b></a></p>

				</div>

			</footer>
		</>

	)
}

export default ContactMe;