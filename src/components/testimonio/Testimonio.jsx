import React from 'react'
import './Testimonio.css'
import { testimonialsData } from '../../data/testimonialsData'
import { useState } from 'react'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'


const Testimonio = () => {

    const transition = {type: "spring", duration: 3}
    const [selectd, setSelected] = useState(0);
    const tLength = testimonialsData.length;

  return (
   <div className="testimonio">
    <div className="left-t">
        <span>Testimonio</span>
        <span className="stroke">Lo que ellos</span>
        <span className='letras'>dicen de nosotros</span>

        <motion.span
        key={selectd}
        initial={{ opacity: 0, x: -100}}
        animate={{ opacity: 1, x: 0}}
        exit={{opacity: 0, x: -100}}
        transition={transition}
        >
            {testimonialsData[selectd].review}
        </motion.span>
        <span>
            <span style={{color: 'var(--orange)'}}>
                {testimonialsData[selectd].name}
            </span>{" "}
            - {testimonialsData[selectd].status}
        </span>
    </div>
    <div className="right-t">
        <motion.div
        initial={{ opacity: 0, x: -100}}
        transition={{...transition, duration: 2}}
        whileInView={{ opacity: 1, x:0}}
        ></motion.div>
        <motion.div
        initial={{ opacity: 0, x: 100}}
        transition={{...transition, duration: 2}}
        whileInView={{ opacity: 1, x:0}}

        ></motion.div>
        <motion.img
        key={selectd}
        initial={{ opacity: 0, x: -100}}
        animate={{ opacity: 1, x: 0}}
        exit={{opacity: 0, x: -100}}
        transition={transition}
        src={testimonialsData[selectd].image} alt="" />

        <div className="arrows">
            <img
            onClick={() =>{
                selectd===0
                ? setSelected(tLength -1)
                : setSelected((prev)=> prev -1);
            }}
            src={leftArrow} alt="" />
            <img
                onClick={() =>{
                    selectd===tLength -1 ? setSelected(0) : setSelected((prev)=> prev + 1);
                }}
            src={rightArrow} alt="" />
        </div>
    </div>
   </div>
  )
}

export default Testimonio