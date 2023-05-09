

import './projects.css';
import React, {useRef, useEffect, useState} from "react";
import anime from "animejs/lib/anime.es.js";
import Header from '../../Header/header';

  



function Projects(props){

    const sectionRef = useRef(null);
    const [hasBeenObserved, setHasBeenObserved] = useState(false);
    const animationRef = useRef(null);
    const [activeTileIndex, setActiveTileIndex] = useState(null);
  
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
                            color: '#D0D4EB', // change to red
                            duration: 2000, // duration of the animation in milliseconds
                            easing: 'easeOutSine'
                          });
                          anime({
                            targets: '.footer-contact',
                            color: '#D0D4EB', // change to red
                            duration: 2000,
                            opacity:1, // duration of the animation in milliseconds
                            easing: 'easeOutSine'
                          });
                          anime({
                            targets: '.double-dot',
                            opacity: '1', // change to red
                            duration: 2000, 
                            delay:1000,// duration of the animation in milliseconds
                            easing: 'easeOutSine'
                          });
                          anime({
                            targets: '.process-title',
                            scale:1, // change to red
                            duration: 0, 
                            delay:0,// duration of the animation in milliseconds

                          });
                          
             
           

                    
                }
            });
        },
        { threshold: 0.1} //adjust the threshold to determine how far into the section to observe
      );

      observer.observe(sectionRef.current);

      return () => observer.disconnect();
    });
  


    //first view function
    useEffect(() => {
   



      if (!hasBeenObserved) {
        const observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                console.log("Introduction section observed for the second time!");
                


                anime({
                    targets:'canvas',
                     translateX:'-25vw',
                     translateY:'30vh',
                     duration: 0,
                   })
                   anime({
                    targets:'canvas',
                     opacity:1,
                     translateY:'0vh',
                     delay:100,
                     duration: 4000,
                   })
       
                   anime({
                    targets:'.project-tile',
                     translateY:'20vh',
                     delay:0,
                     duration: 0,
                   })
   
   
 
                anime({
                    targets:'.project-tile',
                     translateY:'0vh',
                     delay:0,
                     duration: 1000,
                    easing: 'easeOutSine'
                   })

         
                   
                handleTileClick(0);

 
   






                setHasBeenObserved(true);
              }
            });
          },
          { threshold: 0.5 } //adjust the threshold to determine how far into the section to observe
        );
  
        observer.observe(sectionRef.current);
  
        return () => observer.disconnect();
      }
    }, [hasBeenObserved]);






  const handleTileClick = (index) => {
    props.setActiveTileIndex(index);
    setActiveTileIndex(index);
    document.querySelectorAll(".project-tile").forEach((element) => {
      element.classList.remove("active");
    });
    document.querySelector(`.project-tile:nth-child(${index+1})`).classList.add("active");
    
  };





    return(
        
        <section className="page-three page" id='page-three' ref={sectionRef}>
            <Header title={'Projects'}/>
            <div className="threejs-wrap">
            </div>
            <div className="projects-wrap pointer-events">
                <div className="projects-list ">

                    <div className="project-tile first-project" onClick={() => handleTileClick(0)}>

                        <div className="project-line-bottom project-line"></div>
                        <div className="project-title">
                            ESOTERIC ART STUDIO
                        </div>
                        <div className="project-long-desc long-desc-one">
                        <div className="long-desc-col1">
                            
                        </div>
                            <div className="long-desc-col2">
                                Esoteric Art Studio is an ongoing multimedia design project: Ive run, funded, stayed up so many nights envisioning, designed, desired, developed & dedicated alot of my time to. It is my proudest example of my work & work-rate. 
                            </div>
                            <div className="long-desc-col3">
                                From inception the debut collection took one year to design & tailor 10 Handbags, 10 T-Shirts & an Interactive Web Experience. Due to stocking only 2 products I was able to have freedom to experiment in the way I presented the ecommerce experience.
                            </div>

                        </div>
                        <div className="project-short-desc first-project-desc">
                            <div className="short-desc-overview first-overview">
                                Biggest Personal Project<br/>
                                Ongoing
                            </div>
                            <div className="short-desc-tech">
                                JS, CSS, PHP, STRIPE, GSAP, P5.JS,<br/>
                                API, LOCAL STORAGE, CHECKOUT, TRANSITIONS
                            </div>
                            <div className="short-desc-links">
                                LINKS
                                <span>
                                    <a href="https://the.esoteric.gallery" target='_blank'>THE.ESOTERIC.GALLERY</a><br/>
                                    <a href="https://instagram.com/eesotericartstudio" target='_blank'>INSTAGRAM</a><br/>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="project-tile " onClick={() => handleTileClick(1)} >
                        <div className="project-line-top project-line"></div>
                        <div className="project-line-bottom project-line"></div>
                        <div className="project-title">
                            MACSDONA
                        </div>
                        <div className="project-long-desc" >
                        <div className="long-desc-col1">
                            
                        </div>
                            <div className="long-desc-col2"> 
                                Max Dona's videoography skill effectively communicated through a CRUD firebase react web application that uses thoughtful web and interaction design. used to post videoography displayed in Max's work in the past.
                            </div>
                            <div className="long-desc-col3">
                                Max is able to create, update, edit & delete posts through an admin authenticated Interface,This work has been done in appreciation for Max's contribution to Esoteric Art Studio in the past including photography & videoography.
                            </div>

                        </div>
                        <div className="project-short-desc" >
                            <div className="short-desc-overview" >
                                Web Development / Design<br/>
                                <b>COMING SOON</b>
                            </div>
                            <div className="short-desc-tech">
                                REACT, NoSQL, ANIME.JS, GSAP,<br/>
                                REST API, LOCAL STORAGE, ADMIN LOGIN
                            </div>
                            <div className="short-desc-links">
                                LINKS
                                <span>
                                    <a href="#" className='coming-soon'>COMING SOON</a><br/>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="project-tile" onClick={() => handleTileClick(2)} >
                        <div className="project-line-top project-line"></div>
                        <div className="project-line-bottom project-line"></div>
                        <div className="project-title">
                            INKA
                        </div>
                        <div className="project-long-desc" >
                        <div className="long-desc-col1">
                            
                        </div>
                            <div className="long-desc-col2">
                                Project Managed while respresenting All in IT Solutions.<br/><br/>Fusing Japanese and Peruvian cuisine, Inka is home to a sushi bar and restaurant, with South American accents woven throughout a moody décor of pendent lighting & communal and intimate tables.</div>
                            <div className="long-desc-col3">
                                The challenge within this project was effectively communicating the Japanese/Peruvian culture through motion and interaction as it was deemed critical to set Inka apart. This was mainly acheived through SVG interactions and design which took inspiration from the traditional art of these cultures and the inka resturant.
                            </div>

                        </div>
                        <div className="project-short-desc" >
                            <div className="short-desc-overview" >
                                Interaction Design<br/>
                                Motion Design
                            </div>
                            <div className="short-desc-tech">
                                SVG, LAZY LOADING, SCROLL ANIMATIONS,<br/>
                                ILLUSTRATOR, PHOTOSHOP
                            </div>
                            <div className="short-desc-links">
                                LINKS
                                <span>
                                    <a href="https://inka.com.au" target='_blank'>INKA.COM.AU</a><br/>
                                </span>
                            </div>
                        </div>
                    </div>

                   

                    <div className="project-tile" onClick={() => handleTileClick(3)} >
                        <div className="project-line-top project-line"></div>
                        <div className="project-line-bottom project-line"></div>
                        <div className="project-title">
                            KAZAN
                        </div>
                        <div className="project-long-desc">
                        <div className="long-desc-col1">
                            
                        </div>
                            <div className="long-desc-col2">
                            Project Managed while representing All in IT Solutions.<br/><br/>Kazan is a luxurious Japanese restaurant situated in Martin Place, Sydney. Kazan offers a culinary & visual experience through the art & theatre of Japanese culture.</div>
                            <div className="long-desc-col3">
                                The goal with the website much like the resturant was to Kazan offer a digital experience through the art & theatre of Japanese culture. This was done by illustrating beautiful graphics alongside stunning culinary artworks.
                            </div>

                        </div>
                        <div className="project-short-desc" >
                            <div className="short-desc-overview" >
                                Web Design<br/>
                            </div>
                            <div className="short-desc-tech">
                                JS, CSS, PHP, STRIPE, GSAP, P5.JS,<br/>
                                API, LOCAL STORAGE, MOTION EFFECTS
                            </div>
                            <div className="short-desc-links">
                                LINKS
                                <span>
                                    <a href="https://kazandining.au" target='_blank'>KAZANDINING.AU</a><br/>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="project-tile" onClick={() => handleTileClick(4)} >
                        <div className="project-line-top project-line"></div>

                        <div className="project-title">
                            CASH CREATIVE
                        </div>
                        <div className="project-long-desc" >
                        <div className="long-desc-col1">
                            
                        </div>
                            <div className="long-desc-col2">
                                A birthday gift for my wonderful Mother, although primitive it effectively communicates her work to her clients. Hear from her:<br/><br/>
                                "My son. Talented, well-mannered, well-presented, smart, creative, driven, independent, proactive, and determined.
                            </div>
                            <div className="long-desc-col3">
                                Post figuring out the adobe suite at 8, He began building websites for friends and family at age 13. While my opinion may appear biased, I can assure you, that given the chance to meet and work with him, you will quickly comprehend the full extent of his abilities and he will become an crucial asset to any project."
                            </div>

                        </div>
                        <div className="project-short-desc" >
                            <div className="short-desc-overview" >
                                Gift for
                                my mum<br/>
                                Web Development / Design
                            </div>
                            <div className="short-desc-tech">
                                JS, HTML, CSS<br/>
                                HORIZONTAL SCROLL, LAZY LOADING
                            </div>
                            <div className="short-desc-links">
                                LINKS
                                <span>
                                    <a href="https://www.jaynecashcreative.com" target='_blank'>JAYNECASHCREATIVE.COM</a><br/>
                                    <a href="#"></a><br/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;