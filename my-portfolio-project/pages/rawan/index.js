

import React from "react"


const Rawan = () => {

  return (
    <>
  <div class="full-wrapper">
		<header id="home">
			<div class="col-container">
				<nav>
					<h2 class="title">Aakash Srivastava</h2>
					<ul class="main-nav">
						<li><a href="#home">HOME</a></li>
						<li><a href="#portfolio">PORTFOLIO</a></li>
						<li><a href="#contact">CONTACT</a></li>
					</ul>
				</nav>
				<div class="banner">
					<div class="profile-picture">
						<img src="http://res.cloudinary.com/aakashsridev/image/upload/v1528146505/myprofile.jpg" alt="profile-pic" class="profile-pic"/>
					</div>
					<div class="about-me">
						<p>Hi! I'm a front-end developer who loves responsive design and css. I recently finished a degree in front-end web development at Treehouse and am excited to put all my skills to use!</p>
					</div>
				</div>
			</div>
		</header> 
		
			<div class="col-container">
				<div class="wrapper">
					<h3 class="tag-line" id="portfolio">PORTFOLIO</h3>
					<div class="container">
						<div class="project-1 project">
							<div class="project-layout">
                <a href="https://codepen.io/Aakash-dev/pen/ddJQqj">
                   <figure class='project-picture'>
                    	<img src="http://res.cloudinary.com/aakashsridev/image/upload/v1528146502/portfolio-1.png" class="pf-image" alt="marketing"/>
                    <figcaption class='project-caption'>View Project</figcaption>
                  </figure>
                </a>
							</div>
							<h3>Marketing Page</h3>
							<p>This project shows the front page of a marketing website meant for a specific business I'm interested in.</p>
						</div>
						<div class="project-2 project">
							<div class="project-layout">
                <a href="https://aakashsr.github.io/Pagination-and-Content-Filter/">
                  <figure class='project-picture'>
                    	<img src="http://res.cloudinary.com/aakashsridev/image/upload/v1528146502/portfolio-2.png" class="pf-image" alt="search-page"/>
                    <figcaption class='project-caption'>View Project</figcaption>
                  </figure>
                </a>
							</div>
							<h3>Search Page</h3>
							<p>This project searches through a specific database to find information that the user is trying to look up.</p>
						</div>
						<div class="project-3 project">
							<div class="project-layout">            
                <a href="https://aakashsr.github.io/techdegree-project-1/">
                   <figure class='project-picture'>
                    	<img src="http://res.cloudinary.com/aakashsridev/image/upload/v1528146502/portfolio-3.png" class="pf-image" alt="travel"/>
                    <figcaption class='project-caption'>View Project</figcaption>
                  </figure>
                </a>
							</div>
							<h3>Random Quote</h3>
							<p>This project generates random quotes everytime you click on the button.The quotes also changes after a certain time interval.</p>
						</div>
						<div class="project-4 project">
							<div class="project-layout">
								<a href="https://aakashsr.github.io/Build-an-Interactive-Form/"> 
                   <figure class='project-picture'>
                      <img src="http://res.cloudinary.com/aakashsridev/image/upload/v1528146502/portfolio-4.png" class="pf-image" alt="google-map"/>
                    <figcaption class='project-caption'>View Project</figcaption>
                  </figure>
                </a>
							</div>
							<h3>Build an Interactive Form</h3>
							<p>This project uses JavaScript to enhance an interactive registration form for a fictional conference called "FullStack Conf.".</p>
						</div>
						<div class="project-5 project">
							<div class="project-layout">
								<a href="https://aakashsr.github.io/Tic-Tac-Toe/">
                    <figure class='project-picture'>
                      <img src="http://res.cloudinary.com/aakashsridev/image/upload/v1528146504/portfolio-5.png" class="pf-image" alt="photo-gallery"/>
                    <figcaption class='project-caption'>View Project</figcaption>
                  </figure>
                 </a>
							</div>
							<h3>Tic-Tac-Toe</h3>
							<p>This project build a functional, Tic Tac Toe game having both the funcionalities of Player vs Player and Player vs Computer.</p>
						</div>
						<div class="project-6 project">
							<div class="project-layout">
								<a href="https://aakashsr.github.io/Treehouse-techdegree-project-1/">
                   <figure class='project-picture'>
                       <img src="http://res.cloudinary.com/aakashsridev/image/upload/v1528146503/portfolio-6.png" class="pf-image" alt="calculator"/>
                    <figcaption class='project-caption'>View Project</figcaption>
                  </figure>
               </a>
							</div>
							<h3>Personal Profile Page</h3>
							<p>Customized a personal online profile by adding graphics, updating text, and improving the look of the web page using CSS.</p>
						</div>
						</div>
					</div>
				</div>
			</div>
		
		<footer>
			<div class="col-container" id="contact">
				<div class="contact-section">
					<h3>CONTACT</h3>
					<p>If you're interested in chatting or want more information about what I've been working on, I'd love to hear from you!</p>
					<p>Phone: <b>+919643637548</b></p>
					<p>Email: <a href="sunnyjonson123@gmail.com"><b>sunnyjonson123@gmail.com</b></a></p>
				</div>
				<hr/>
				<div class="footer-content">
					<ul>
						<li class="my-name"><b>Aakash Srivasatava</b></li>
						<li><a href="#top" class="back-btn">BACK TO TOP</a></li>
						<li><a href="#home">HOME</a></li>
						<li><a href="#portfolio">PORTFOLIO</a></li>
						<li><a href="#contact">CONTACT</a></li>
					</ul>
				</div>
			</div>
		</footer>
	
    
    </>
  )
}

export default Rawan;