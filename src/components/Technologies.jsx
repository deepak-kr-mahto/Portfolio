import React from 'react'
import { BsBootstrap } from 'react-icons/bs'
import { DiJava, DiPython } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { RiReactjsLine, RiTailwindCssLine } from 'react-icons/ri'
import { SiCss3, SiHtml5, SiJavascript, SiMongodb, SiMysql } from 'react-icons/si'
import { motion } from 'motion/react'
import { animate, easeIn } from 'motion'

const iconVariants = (duration) => ({
    intial: {y: -10},
    animate: {
        y: [10,-10],
        transition: {
            duration: duration, 
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className='pb-24'>


        <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className=' my-20 text-center text-4xl '>
            Technologies
        </motion.h2>


        <motion.div 
        whileInView={{opacity:1, x:0}}
        intial={{opacity:0, x:-100}}
        className=' flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
             initial="initial"
             animate="animate"
             variants={iconVariants(2.5)}
             >
                <SiHtml5 className=' text-7xl text-orange-400'/>
            </motion.div>

            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className=' p-4'>
                <SiCss3 className=' text-7xl text-blue-400'/>
            </motion.div>

            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3.5)}
            className=' p-4'>
                <SiJavascript className=' text-7xl text-cyan-400'/>
            </motion.div>

            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(4)}
            className=' p-4'>
                <FaNodeJs className=' text-7xl text-green-500'/>
            </motion.div>

            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(4.5)}
            className=' p-4'>
                <SiMongodb className=' text-7xl text-[#4DB33D]'/>
            </motion.div>

            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(5)}
            className=' p-4'>
                <SiMysql  className='text-7xl text-sky-700'/>
            </motion.div>

            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(5.5)}
            className="p-4">
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            
            <motion.div 
           initial="initial"
           animate="animate"
           variants={iconVariants(6)}
           className="p-4">
                <BsBootstrap className='text-7xl text-[#7110ef]'/>
            </motion.div>

            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(6.5)}
            className="p-4">
                <RiTailwindCssLine className='text-7xl text-cyan-500'/>
            </motion.div>

            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(7)}
            className="p-4">
                <DiJava className='text-7xl text-cyan-500'/>
            </motion.div>

        </motion.div>
    </div>
  )
}

export default Technologies