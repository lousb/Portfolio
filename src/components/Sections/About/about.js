import React, {useRef, useEffect, useState} from "react";
import './about.css';
import anime from "animejs/lib/anime.es.js";
import Header from "../../Header/header";



function scrollClick() {
    const targetElement = document.getElementById('page-three');
    setTimeout(() => {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  }

function About(){

    const sectionRef = useRef(null);
    const [hasBeenObserved, setHasBeenObserved] = useState(false);
    const animationRef = useRef(null);


       //every view function
       useEffect(() => {

        const observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                anime({
                  targets: '.header-text',
                  opacity: '1', // change to red
                  duration: 2000, 
                  delay:100,// duration of the animation in milliseconds
                  easing: 'easeOutSine'
                });
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
                    color: '#D0D4EB', // change to red
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
                    duration: 2000, // duration of the animation in milliseconds
                    easing: 'easeOutSine'
                  }); 
                 anime({
                  targets: '.double-dot',
                  opacity: '0', // change to red
                  duration: 0, 
                  delay:200,// duration of the animation in milliseconds
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





    
    
    useEffect(() => {

      //overflow effect
      if (!hasBeenObserved) {
        const observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const app = document.getElementsByClassName('App')[0];
                app.classList.add('overflow');
                setTimeout(() => {             app.classList.remove('overflow');},3700);
              }
            });
          },
          { threshold: 0.99 } //adjust the threshold to determine how far into the section to observe
        );
  
        observer.observe(sectionRef.current);
      }

      if (!hasBeenObserved) {
        const observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                console.log("Introduction section observed for the first time!");
                // Call your section-specific function here



                // Wrap each character in a span element
                const words = sectionRef.current.querySelectorAll(
                  ".test-text span"
                );
                words.forEach(word => {
                  let letters = word.innerText.split("");
                  word.innerHTML = "";
                  letters.forEach(letter => {
                    let span = document.createElement("span");
                    span.classList.add("letter"); // add a class to the generated span
                    if (letter === " ") {
                      span.innerHTML = "&nbsp;";
                    } else {
                      span.innerText = letter;
                    }
                    if (word.classList.contains("b-span")) {
                      let bSpan = document.createElement("span");
                      bSpan.classList.add("b-b-span");
                      bSpan.appendChild(span);
                      word.appendChild(bSpan);
                    } else {
                      word.appendChild(span);
                    }
                  });
                });



                animationRef.current = anime.timeline();
                
                animationRef.current.add({targets:'.about-left',
                  opacity:1,
                  duration: 0,
                })
                .add({
                  targets: '.letter', 
                  opacity: [0, 0.8],
                  duration: 1000,
                  delay: anime.stagger(35, {start:50}),
                  easing: 'easeOutSine'
                })
                .add({
                  targets: '.b-b-span > .letter',
                  opacity:1,
                  delay:-100,
                  duration:1000,
                  easing: 'easeOutSine'
                })
          anime({
            targets:'.about-right',
            translateX:'10px',
            delay:3600,
            easing: 'easeOutSine'
          })

          anime({
            targets:'.about-right',
            opacity:1,
            delay:3600,
            easing: 'easeOutSine'
          })
          anime({
            targets:'.about-right > button',
            opacity:1,
            delay:7000,
            easing: 'easeOutSine'
          })

          anime({
            targets:'.line',
            width:'100%',
            opacity:1,
            delay:170,
            duration:3700,
            easing: 'easeOutSine'
          })
          




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

    return(
        <section className="page-two page" ref={sectionRef}>
            <div className="about-wrap">
                <div className="line"></div>
                <div className="about-left">
                    <div className="about-line test-text about-first-line">
                        <span className="span">Operating in Surry Hills,</span>
                    </div>
                    <div className="about-line test-text about-second-line">
                        <span className="span">Sydney. </span>
                        <span className="b-span">Distinguishing, Designing</span>
                    </div>
                    <div className="about-line test-text about-third-line">
                        <span className="b-span">& Developing</span>
                        <span className="span"> connections through</span>
                    </div>
                    <div className="about-line test-text about-fourth-line">
                        <span className="span">digital mediums.</span>
                    </div>
                </div>
                <div className="about-right">
                    <span>
                       I like websites, content & compelling brand identity. My design philosophy is the belief that great design has the power to profoundly impact individuals, I recreate this effect by implementing a blend of Interaction, Motion, and Graphic visuals into my works. I don't do UX, I give the User an eXperience.
                    </span>
                    <button className="next" onClick={scrollClick}><span className="read-more">Read More</span></button>
                </div>
            </div>
        </section>
    )
}

export default About;