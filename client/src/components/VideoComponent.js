import React from 'react'
import './VideoComponent.css'
import { Button } from '../components/Button/Button'

function VideoComponent() {
    return (
        <div className='hero-container'>
            <video src  = "./videos/AdobeStock_97965861.mov"
            autoPlay loop muted />
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
            USE Current LOCATION <i className='far
                   fa-play-circle'/>
             </Button>
            </div >
            
        </div >
    );
}
export default VideoComponent