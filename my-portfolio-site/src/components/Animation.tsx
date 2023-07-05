import { HiChevronDoubleUp } from "react-icons/hi"
import React, { useEffect } from 'react';
import Experience from '../js/Experience/Experience.js';
import gsap from "gsap";

/* GSAP Animation */
const Animation = () => {


    useEffect(() => {

        gsap.fromTo(
            ".loading",
            { opacity: 1 },
            {
                opacity: 0,
                duration: 1.5,
                delay: 3.5,
                zIndex: -100
            }
        )

        const navList = document.querySelectorAll('.nav')
        for (let i = 0; i < navList.length; i++) {

            navList[i].addEventListener('click', () => {
                gsap.fromTo(
                    navList[i],
                    { x: 10 },
                    {
                        x: 0,
                        duration: 1.5,
                        delay: .2
                    }

                )
            })

        }

        gsap.fromTo(
            ".hero-title",
            { opacity: 0, x: 80 },
            {
                x: 0,
                opacity: 1,
                duration: 1.5,
                delay: 4.5
            }
        )

        /* create model */
        new Experience(document.querySelector(".experience-canvas"));
        
        /* 3DModel Animation */
        gsap.fromTo(
            ".experience",
            { opacity: 0, y: 50 },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                delay: 5.5
            }
        )

        /* toTop Animation */
        gsap.timeline({ repeat: -1, repeatDelay: 1 })
            .to(".toTop", { y: -15, duration: 1, opacity: 1 })
            .to(".toTop", { y: 0, duration: 1, opacity: .8 })
            .to(".toTop", { y: -10, duration: 1, opacity: .7 })
            .to(".toTop", { y: 0, duration: 1, opacity: .5 })
            .to(".toTop", { y: -5, duration: 1, opacity: .3 })
            .to(".toTop", { y: 0, duration: 1, opacity: .1 })
    })

    return (
        <div className="toTop">
            <a href="#top"><HiChevronDoubleUp /></a>
        </div>
    )
}


export default Animation;
