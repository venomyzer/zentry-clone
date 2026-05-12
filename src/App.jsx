import React from 'react'
import Lenis from "lenis";
import { useEffect } from "react";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const App = () => {

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
        });

        lenis.on("scroll", ScrollTrigger.update);

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden ">
            <Navbar />
            <Hero />
            <About />
        </main>
    )
}
export default App
