import React from 'react'
import './VideoComponent.css'
import { Button } from '../components/Button/Button'

function VideoComponent() {
    return (
        <div className='hero-container'>
            <video src="./videos/AdobeStock_97965861.mov"
                autoPlay loop muted />

            <section className="underVideo section is-medium">

                <p className="is-half subtitle">
                    <i className="fas fa-map-marker-question"></i>
                    Looking for Dog parks in your <strong className="areaCode">AREA</strong>. Search Dog Blogg for some fun in the sun.
                </p>
            </section>






            <div className="hero-btns">
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                    ZIPCODE
             </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                    USE Current LOCATION
             </Button>
            </div >

        </div >
    );
}
export default VideoComponent