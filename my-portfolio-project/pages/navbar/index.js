
import Link from "next/link";
import React from "react"
import About from "../about";

const Navbar = () => {

  return (
    <>
      {/* <div class="nav-header">
        <div class="nav-brand">
          <div className="test">
            <h1> <i class="fa fa-code"></i></h1>
            RAWAN <br />SALEM BAMHDI
          </div>
        </div>
        <i class="fa fa-bars fa-3x"></i>
        <div class="header-links">
          <ul>
            <li data-menuanchor="thirdPage"><a href="#portfolio">PORTFOLIO</a></li>
            <li data-menuanchor="secondPage"><a href="#about">ABOUT</a></li>

      
     
          </ul>
        </div>
      </div> */}

      {/* <div class="nav-screen">
        <i class="fa fa-times fa-3x"></i>
        <div class="nav-container">
          <div class="nav-links">
            <ul id='myMenu'>
              <li data-menuanchor="secondPage"><a href="#about">ABOUT</a></li>
              <li data-menuanchor="thirdPage"><a href="#portfolio">PORTFOLIO</a></li>
              <li data-menuanchor="fourthPage"><a href="#contact">CONTACT</a></li>
            </ul>
          </div>
        </div>
      </div> */}
   
      {/* <About/> */}
   
{/* //-------------------------------------------------------------- */}

   
      {/* <div id="conteneur-menu">
        <div class="menu">
          <ul>
            <li><a href="#conteneur-home">HOME</a></li>
            <li><a href="#conteneur-about">ABOUT</a></li>
            <li><a href="#conteneur-skills">SKILLS</a></li>
            <li><a href="#conteneur-qualification">Qualification</a></li>
            <li><a href="#conteneur-portfolio">PORTFOLIO</a></li>
            <li><a href="#conteneur-contact">CONTACT</a></li>
          </ul>
       </div>
      </div> */}
        <div class="full-wrapper">
  		<header id="home">
			<div class="col-container">
				<nav>
					<h2 class="title">RAWAN SALEM</h2>
					<ul class="main-nav">
						<li><a href="#home">HOME</a></li>
						<li><a href="#portfolio">PORTFOLIO</a></li>
						<li><a href="#contact">CONTACT</a></li>
					</ul>
				</nav>
				<div class="banner">
					<div class="profile-picture">
						<img src="https://avatars.githubusercontent.com/u/101040863?v=4" alt="profile-pic" class="profile-pic"/>
					</div>
					<div class="about-me">
					
          	<p>Hi! I'm a front-end developer who loves responsive design and css. Passionate about tech, fast learner and love new challenges</p>
					</div>
				</div>
			</div>
		</header>
    </div>
    
    </>
  )
}

export default Navbar;