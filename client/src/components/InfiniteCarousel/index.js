import React from 'react';
import gsap from "gsap";
import "./style.css"
import image from "../../images/img-1.jpg";

//Store static text content to use as props.
const Items = [image];

//Component to render one element for each of the Items array.
function TextItem(props) {

  const itemList = props.items.map((item, index) => (
    <div key={index} className="carousel-item">
        {/* {item} */}
      <img className="image-style" src={`${item}`} />
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
        duration: 20,
        x: "-=" + (baseWidth + wrapWidth),
        ease: "none",
        modifiers: {
          x: gsap.utils.unitize(gsap.utils.wrap(-baseWidth, wrapWidth))
        }
      }).play();

      //Following statements add several pauses to the timeline so the individual items stay in screen for 1 second before resuming the animation.
      tl.addPause(0, () => {
        setTimeout(() => {
          tl.play();
        }, 1000);
      });

      tl.addPause(0, () => {
        setTimeout(() => {
          tl.play();
        }, 1000);
      });

      tl.addPause(0, () => {
        setTimeout(() => {
          tl.play();
        }, 1000);
      });

      tl.addPause(0, () => {
        setTimeout(() => {
          tl.play();
        }, 1000);
      });

      tl.addPause(0, () => {
        setTimeout(() => {
          tl.play();
        }, 1000);
      });

      tl.addPause(0, () => {
        setTimeout(() => {
          tl.play();
        }, 1000);
      });
    }, );
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
function InfiniteCarousel() {
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


export default InfiniteCarousel;