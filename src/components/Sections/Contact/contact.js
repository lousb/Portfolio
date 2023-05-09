import React from "react";
import {useEffect, useRef} from "react";
import anime from "animejs/lib/anime.es.js";
import './contact.css';


function Contact(){
    const sectionRef = useRef(null);
        //every view function
        useEffect(() => {

            const observer = new IntersectionObserver(
              entries => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {



                     
                    anime({
                        targets: '.footer-home',
                        color: '#202A45', // change to red
                        duration: 2000, // duration of the animation in milliseconds
                        easing: 'easeOutSine'
                      });
                      anime({
                        targets: '.canvas',
                        marginTop: '-100vh',
                        marginLeft: '-100vw', // change to red
                        duration: 0, // duration of the animation in milliseconds
                      });
                      anime({
                        targets: '.footer-about',
                        color: '#202A45', // change to red
                        duration: 2000, // duration of the animation in milliseconds
                        easing: 'easeOutSine'
                      });
                      anime({
                        targets: '.footer-projects',
                        color: '#202A45', // change to red
                        duration: 2000, // duration of the animation in milliseconds
                        easing: 'easeOutSine'
                      });
                      anime({
                        targets: '.footer-process',
                        color: '#202A45', // change to red
                        duration: 2000, // duration of the animation in milliseconds
                        easing: 'easeOutSine'
                      });
                      anime({
                        targets: '.footer-contact',
                        color: '#202A45', // change to red
                        duration: 2000, // duration of the animation in milliseconds
                        easing: 'easeOutSine'
                      });
                            
                            
  
                      
                  }
              });
          },
          { threshold: 0.1} //adjust the threshold to determine how far into the section to observe
        );
  
        observer.observe(sectionRef.current);
  
        return () => observer.disconnect();
      });

      function handleGetInTouchClick() {
        const getInTouchElement = document.querySelector(".get-in-touch");
        const email = "louisjwyeth@gmail.com";
        navigator.clipboard.writeText(email)
          .then(() => {
            getInTouchElement.textContent = "Email Copied";
          })
          .catch((err) => {
            console.error('Could not copy text: ', err);
          });
      }


    return(
        <section className="page-five page" ref={sectionRef}>
            <div className="contact-wrap">
              <div className="get-in-touch" onClick={handleGetInTouchClick}>
                Get in Touch
              </div>
            </div>
        </section>
    )
}

export default Contact;