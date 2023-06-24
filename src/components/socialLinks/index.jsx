
import React from "react"
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub } from '@fortawesome/pro-github-svg-icons'
//import github from "https://w7.pngwing.com/pngs/435/424/png-transparent-github-computer-icons-source-code-github.png"
//import { GitHubIcon } from '@heroicons/react/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const SocialLinks = () => {

    return (
        <>

            <div class="flex flex-col">
        
                <div class="flex items-center mb-4">
                    <div class="w-2 h-2  mr-2"></div>
                    <a href="https://github.com/rrawann" target="_blank">
                        
                        <i class="fa fa-github fa-2x"></i>
                        {/* <GitHubIcon className="w-6 h-6" /> */}
                        </a>
                </div>
                <div class="flex items-center mb-4">
                    <div class="w-2 h-2  mr-2"></div>
                    <a href="mailto:rawan.sb@yahoo.com" target="_blank">
                    <FontAwesomeIcon icon="fa-regular fa-envelope" />

                    
                    </a>
                  
                </div>
                <div class="flex items-center mb-4">
                    <div class="w-2 h-2  mr-2"></div>
                    <p class="text-gray-700">TW</p>
                </div>
            </div>

        </>

    )
}

export default SocialLinks;