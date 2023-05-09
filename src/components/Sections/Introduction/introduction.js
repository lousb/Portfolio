import React, {useEffect, useState, useRef} from "react";
import './introduction.css'
import anime from "animejs/lib/anime.es.js";


// Easing function
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const CountingText = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    let start;
    const duration = 2500; // 2 seconds
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = easeOutCubic(Math.min(elapsed / duration, 1));
      setPercentage(Math.floor(progress * 100));
      if (elapsed < duration) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, []);

  return <div>{`${percentage}%`}</div>;
};

function Introduction(){
    
    const sectionRef = useRef(null);

       //every view function
       useEffect(() => {

        const observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                anime({
                  targets: '.header-text',
                  opacity: '0', // change to red
                  duration: 500, 
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
                    color: '#D0D4EB', // change to red
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
              }
          });
      },
      { threshold: 0.1} //adjust the threshold to determine how far into the section to observe
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  });
    

    useEffect(() => {
        //probs could have a better solution to instant animating
        anime({
          targets:'.first-page-title',
          translateX:'8vw',
          duration: 0,
          easing: 'easeOutSine'
      })
      anime({
        targets:'.first-page-title',
        paddingLeft:'20vw',
        duration: 0,
        easing: 'easeOutSine'
    })

        anime({
            targets:'.first-page-wrap',
            translateX:'85vw',

            duration: 0,
            easing: 'easeOutSine'
        })
        anime({
            targets:'.first-name',
            marginRight:'1.45em',
            duration: 0,

            easing: 'easeOutSine'
        })
        anime({
            targets:'.name',
            opacity:1,
            duration: 0,
            delay:100,
        })

        anime({
            targets:'.first-page-wrap',
            translateX:'0',
            scale:1,
            delay: 3000,
            duration: 2000,
            easing: 'easeOutSine'
        })
        anime({
            targets:'.first-name',
            marginRight:'0',
            delay: 3000,
            duration: 2000,
            easing: 'easeOutSine'
        })
        anime({
          targets:'.first-name',
          marginRight:'0',
          delay: 3000,
          duration: 2000,
          easing: 'easeOutSine'
      })
      anime({
        targets:'.first-page-title',
        paddingLeft:'0',
        translateX:0,
        delay: 3000,
        duration: 2000,
        easing: 'easeOutSine'
    })

        const app = document.getElementsByClassName('App')[0];
        setTimeout(() => {app.classList.remove('overflow');},5000);
    })

    return(
        <section className="page-one page" ref={sectionRef}>
            <div className="first-page-background"></div>
            <div className="first-page-wrap">
                <div className="loading-wrap">
                    <h1 className="first-page-title loading-wrap">
                        <CountingText/>
                    </h1>
                </div>
                <h1 className="first-page-title">
                    <span className="name first-name">Louis</span>
                    <br/>
                    <span className="name last-night">Wyeth</span>
                </h1>
            </div>
        </section>
    )
}

export default Introduction;