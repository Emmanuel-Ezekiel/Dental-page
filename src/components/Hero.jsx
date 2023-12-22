import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { RiFacebookBoxLine } from "react-icons/ri";
import { PiYoutubeLogo } from "react-icons/pi";
import { PiInstagramLogoLight } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const splitText = new SplitType(textRef.current);
    gsap.to(splitText.chars, {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.1,
    });
  }, []);

  return (
    <section id="section-1">
      <div className="hero">
        <h1 ref={textRef}>OUR ADVANTAGES</h1>
        <AnimatePresence>
          <div className="bottom">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="passion"
            >
              <div className="dot"></div>
              <h2>Your Smile, Our Passion</h2>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="socials"
            >
              <div className="platform">
                <PiInstagramLogoLight />
                <PiYoutubeLogo />
                <RiFacebookBoxLine />
              </div>
              <h2>Best Start Up of 2023</h2>
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
