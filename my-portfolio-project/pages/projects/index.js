
import React from "react"
const Projects = () => {

    return (
        
//       <div className="pic">
      
//       <figure class="snip1543">
//   <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample108.jpg" alt="sample108" />
//   <figcaption>
//     <h3>Inverness McKenzie</h3>
//     <p>The only skills I have the patience to learn are those that have no real application in life.</p>
//   </figcaption>
//   <a href="#"></a>
// </figure>
// <figure class="snip1543 hover"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample100.jpg" alt="sample100" />
//   <figcaption>
//     <h3>Alan Fresco</h3>
//     <p>The real fun of living wisely is that you get to be smug about it.</p>
//   </figcaption>
//   <a href="#"></a>
// </figure>
// <figure class="snip1543"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample101.jpg" alt="sample101" />
//   <figcaption>
//     <h3>Indigo Violet</h3>
//     <p>But Calvin is no kind and loving god! He's one of the old gods! He demands sacrifice! </p>
//   </figcaption>
//   <a href="#"></a>
// </figure>
      
//       </div>
<>
{/* <div id="conteneur-portfolio">
        <div class="portfolio">
          <h2>Portfolio</h2>
          <div class="conteneur-miniature-left">
            <div class="miniature-portfolio oneport">
            </div>
            <div class="text-miniature">
              <h3>
                Type : Video, Picture, ...
              </h3>
              <h4>
                Title here
              </h4>
              <h5>
                Duration : 10 secondes
              </h5>
            </div>
				</div>
        <div class="conteneur-miniature-right">
            <div class="miniature-portfolio twoport">
            </div>
            <div class="text-miniature">
              <h3>
                Type : Video, Picture, ...
              </h3>
              <h4>
                Title
              </h4>
              <h5>
                Duration : 10 secondes
              </h5>
            </div>
				</div>
        <div class="clear"></div>
			</div>
        </div >  */}

<div class="full-wrapper">
<div class="col-container">
				<div class="wrapper">
					<h3 class="tag-line" id="portfolio">PORTFOLIO</h3>
					<div class="container">
						<div class="project-1 project">
							<div class="project-layout">
                <a href="https://codepen.io/Aakash-dev/pen/ddJQqj">
                   <figure class='project-picture'>
                    	<img src="http://res.cloudinary.com/aakashsridev/image/upload/v1528146502/portfolio-2.png" class="pf-image" alt="marketing"/>
                    <figcaption class='project-caption'>View Project</figcaption>
                  </figure>
                </a>
							</div>
							<h3>more than one</h3>
							<p>Online searchable source for movies information including ratings, cast and others. Used MovieDB API for fetching data and applied object-oriented programming with vanilla JS.</p>
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
							<h3>MadLibs</h3>
							<p>MaDreamLibs for Kids is a phrasal template word game that consists of one player prompting others for a list of words to substitute for blanks in a story before reading. The concept is to help the dreams of kids come true :D.</p>
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
						{/* <div class="project-4 project">
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
						</div> */}
					
						</div>
					</div>
				</div>
        </div>
			
</>
       
    )
}

export default Projects;