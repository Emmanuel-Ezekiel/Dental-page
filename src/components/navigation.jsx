import React from "react";
import { PiToothLight } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  return (
    <header>
      <AnimatePresence>
        <nav>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="menu"
          >
            <button>Menu</button>
            <div className="hambuger">
              <div className="line"></div>
              <div className="line2"></div>
              <div className="line"></div>
            </div>
          </motion.div>

          <div className="logo-container">
            <div className="logo">
              <PiToothLight color="#ffffff" />
            </div>

            <h2>DENTYTECH</h2>
          </div>

          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="btn"
          >
            <button>Log In</button>
            <button className="signUp">Sign Up</button>
          </motion.div>
        </nav>
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
