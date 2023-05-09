import React from "react";
import { useEffect, useRef, useLayoutEffect, useState } from "react";
import anime from "animejs/lib/anime.es.js";
import "./process.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Process() {
  const [hasBeenObserved, setHasBeenObserved] = useState(false);

  const sectionRef = useRef(null);




  //every view function
    useEffect(() => {
        //overflow effect

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const getInTouchElement = document.querySelector(".get-in-touch");
            if (getInTouchElement && getInTouchElement.textContent) {
              getInTouchElement.textContent = "Get in Touch";
            }

            anime({
              targets: '.canvas',
              marginTop: 0,
              marginLeft: 0, // change to red
              duration: 0, // duration of the animation in milliseconds
            });
            anime({
              targets: ".process-title",
              scale: "0.8",
              delay: 300,
              duration: 2000, // duration of the animation in milliseconds
              easing: "easeOutSine",
            });
            anime({
              targets: '.canvas div',
              opacity: 1, // change to red
              duration: 0, // duration of the animation in milliseconds
            });
            anime({
              targets: ".footer-home",
              color: "#D0D4EB", // change to red
              duration: 2000, // duration of the animation in milliseconds
              easing: "easeOutSine",
            });
            anime({
              targets: ".footer-about",
              color: "#D0D4EB", // change to red
              duration: 2000, // duration of the animation in milliseconds
              easing: "easeOutSine",
            });
            anime({
              targets: ".footer-projects",
              color: "#D0D4EB", // change to red
              duration: 2000, // duration of the animation in milliseconds
              easing: "easeOutSine",
            });
            anime({
              targets: ".footer-process",
              color: "#D0D4EB", // change to red
              duration: 2000, // duration of the animation in milliseconds
              easing: "easeOutSine",
            });
            anime({
              targets: ".footer-contact",
              color: "#D0D4EB",
              opacity: 0.5, // change to red
              duration: 2000, // duration of the animation in milliseconds
              easing: "easeOutSine",
            });
            anime({
              targets: ".process-step",
              opacity: "1",
              delay: anime.stagger(200, {start: 300}),
              duration: 2000, // duration of the animation in milliseconds
              easing: "easeOutSine",
            });
            anime({
              targets: ".process-step-content",
              opacity: "1",
              delay: anime.stagger(100, {start: 2400}),
              duration: 2000, // duration of the animation in milliseconds
              easing: "easeOutSine",
            });
          }
        });
      },
      { threshold: 0.1 } //adjust the threshold to determine how far into the section to observe
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  });

 
 useEffect(() => {
   



  if (!hasBeenObserved) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log("Introduction section observed for the second time!");








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



  return (
    <section className="page-four page" ref={sectionRef}>
      <h2 className="process-title">process</h2>
      <div className="process-wrap">
        <div className="process-grid-wrap">
          <div className="process-col-1 process-col">
            <p className="process">
              <span className="process-num process-step">01</span>
              <span className="process-step-title process-step">
                Curate
              </span>
              <span className="process-step-content">
                Before starting any design project, it's imperitive to curate relevant recourses to have a better chance of understanding the project. <br/>
              <br/>
              Moodboards, books, spontaneous creativity.. This can take many forms. The endless recourses available in the 21st century make this step an exciting part of the process.
              <br/>
              <br/>
              Soaking up all the relevant design through unique perspectives and building a strong vision through curation.
              </span>
            </p>
          </div>
          <div className="process-col-2  process-col">
            <p className="process">
            <span className="process-num process-step">02</span>
            <span className="process-step-title process-step">
              Iterate
            </span>
            <span className="process-step-content">
            Iteration through design, Iteration through development. Iteration is prominent throughout the whole process but it is epecially prominent here. One example of iteration can be seen in the year prior to the release of Esoteric Art Studio: iterating samples & designs.
            <br/><br/>
            while (!idea) &#123;<br/>
              return( ' <b>&#41;:</b> ' )<br/>
            &#125;
            <br/><br/>
            Iteration is the key to impactful design.
            <br/><br/>
            </span>
            </p>
          </div>
          <div className="process-col-3  process-col">
            <div>
            <p className="process">
              <span className="process-num process-step">03</span>
              <span className="process-step-title process-step">
                Define
              </span>
              <span className="process-step-content">
                Not just python functions.. 
                <br/><br/>
                Defining involves concept, draft, prototype. This is the part where the project comes to life.
              </span>
            </p>
            </div>
            <div>
            <p className="process">    
              <span className="process-num num-4 process-step">04</span>
              <span className="process-step-title process-step">
                Refine
              </span>
              
              <span className="process-step-content">
                Refining is a simple goal. Harder in practice. All great designers seek refinement.
                <br/><br/>
                Famous french writer Antoine de Saint-Exupéry once said: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away”
                <br/><br/>
                But he built planes & I build websites so my take is refinement is a mindset; Refine the colour scheme, Refine the Branding, Refine the sandwich made for lunch. You get the idea.
                <br/><br/>
              </span>
              </p>
            </div>
            
            
          </div>
          <div className="process-col-4  process-col ">
          <p className="process">
            <span className="process-num num-5 process-step">05</span>
            <span className="process-step-title process-step">
              Execute
            </span>
            <span className="process-step-content">
              Check everything twice.. then Execute.
              <br/><br/>
              When an experience through interaction, motion & visual all comes together. Its the feeling I'm passionate about.
            </span>
            </p>
          </div>

        </div>
        
      </div>
      <div className="photos-wrap">
        <div className="photos-grid">
          <div className="process-photo-col">
            <img src={"/DSC00022_0009_DSC00202.jpg"} />
          </div>
          <div className="process-photo-col">
            <img src={"/2023-03-05 18-50-29_2.gif"} className="gif"/>
            <div className="process-photo-col-double">
              <div className='small-image-wrap'>
                <img src={"/71ksgnACl3L._AC_UF894,1000_QL80_.webp"} />
                Recent Read
              </div>
              <div className='small-image-wrap'>
                <img src={"/IMG_5407.webp"}/>
              </div>
              <div className='small-image-wrap'>
                <img src={"/1AC1361D-3782-4C0E-AB34-8A5C45CB7136.JPG"}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
