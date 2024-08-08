import React, { useEffect, useState } from "react";
import { motion,useScroll} from "framer-motion";

const HeroText = () => {

  const [scrollDirection, setScrollDirection] = useState(1)
  
  const scrollY =   useScroll().scrollY
  
  scrollY.on("change",function(){

    const currentScrolling = scrollY.get()-scrollY.getPrevious()

    // console.log(currentScrolling)
    if(currentScrolling>0){
      setScrollDirection(1)
    }else{
      setScrollDirection(-1)
    }
  })
  

  return (
    <div className=" absolute top-[58%]">
      <motion.div
      initial={{
        x:-1957
      }}
      animate={{
        x:scrollDirection>0?-3914:0
      }}
      transition={{
        duration:15,
        repeat:Infinity,
        ease:'linear'
      }}

          // agar sidha scroll to -3914 value
          // ulta scroll to 0 value

        className="flex "
      >
        <h1 className="text-white whitespace-nowrap font-medium text-[14.5vw]">
          - Dennis Snellenberg
        </h1>
        <h1 className="text-white whitespace-nowrap font-medium text-[14.5vw]">
          - Dennis Snellenberg
        </h1>
        <h1 className="text-white whitespace-nowrap font-medium text-[14.5vw]">
          - Dennis Snellenberg
        </h1>
      </motion.div>
    </div>
  );
};

export default HeroText;
