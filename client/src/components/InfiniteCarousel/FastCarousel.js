import React from 'react';
import gsap from "gsap";
import "./style.css"


const Items = ["fas fa-paw", "fas fa-dog", "fas fa-bone","fal fa-dog-leashed","fad fa-bone-break"];

//Component to render one element for each of the Items array.
function TextItem(props) {
  const itemList = props.items.map((item, index) => (
    <div key={index} className="carousel-item">
      {/* {item} */}
      <i className={item}></i>
     
    </div>
  ));

  //Use the onMount lifecycle equivalent with useEffect to get width of the wrapper (same than each slide) in pixels and write the timeline.
  React.useEffect(() => {
    //Get width.
    let baseWidth = props.boxRef.current.offsetWidth;
    //Position all items one after another (position:absolute in the css).
    gsap.set(".carousel-item", { x: (i) => i * baseWidth });
    //Get complete width with all slides out of screen.
    let wrapWidth = (Items.length - 1) * baseWidth;
    //Animate all items and use modifiers to reset all items that reach the end (left) to the other end of the carousel (right) for the infinite looping.
    let tl = gsap.timeline({ repeat: -1 }).pause();
    setTimeout(() => {
      tl.to(".carousel-item", {
        duration: 6,
        x: "-=" + (baseWidth + wrapWidth),
        ease: "none",
        modifiers: {
          x: gsap.utils.unitize(gsap.utils.wrap(-baseWidth, wrapWidth))
        }
      }).play();


      //Following statements add several pauses to the timeline so the individual items stay in screen for 1 second before resuming the animation.
      tl.addPause(1, () => {
        setTimeout(() => {
          tl.play();
        }, 1000);
      });

      tl.addPause(2, () => {
        setTimeout(() => {
          tl.play();
        }, 1000);
      });

      tl.addPause(3, () => {
        setTimeout(() => {
          tl.play();
        }, 1000);
      });

      tl.addPause(4, () => {
        setTimeout(() => {
          tl.play();
        }, 1000);   
      });

      tl.addPause(5, () => {
        setTimeout(() => {
          tl.play();
        }, 1000);
      });

      tl.addPause(6, () => {
        setTimeout(() => {
          tl.play();
        }, 1000);
      });
    }, 2000);
  }, []);

  return (
    <>
      {itemList}
      <div>
        <br />
      </div>
    </>
  );
}

//Main Component
function FastCarousel() {
  const boxRef = React.useRef();
  return (
    <section id="wrap">
      <article id="text-carousel-container" 
      ref={boxRef}
      >
        <TextItem items={Items} boxRef={boxRef} />
      </article>
    </section>
  );
}


export default FastCarousel;