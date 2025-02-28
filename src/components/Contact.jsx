import React from "react";
import { CONTACT } from "../constants";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <div className=" border-t border-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 0.5 }}
        className=" my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className=" text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-3"
        >
          {CONTACT.phoneNo}
        </motion.p>
        
        <motion.a 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        href="#" className="border-b">
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
