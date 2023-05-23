import React from 'react';
import classes from './hero.module.css';
import hero_image from '../../hero_image.png';

export default function Hero() {
    return (
        <div className={classes.hero}>
            <div className={classes.container}>
                    <h1>FLYBAO</h1>
                    <img src={hero_image}/>
                    <h3>Authentic Chinese Food to your doorstep<br/>in just a few clicks!</h3>

                    <div className={classes.canto}>
                        <p>容易</p>
                        <p>快</p>
                        <p>美味</p>
                    </div>
            </div>
        </div>
    )
}