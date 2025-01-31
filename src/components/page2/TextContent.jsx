import React, { useRef } from "react";

const TextContent = () => {
  const imageRef = useRef(null);
  const parentRef = useRef(null);

  const mouseMoving = (e) => {
   
    // console.log()
    const realX = e.clientX -  parentRef.current.getBoundingClientRect().x
    const realY = e.clientY -  parentRef.current.getBoundingClientRect().y

    imageRef.current.style.left = realX+"px"
    imageRef.current.style.top = realY+"px"

  };

  const mouseEntered = () => {
    imageRef.current.style.transform= `translate(-50%,-50%) scale(1)`;

  };
  const mouseLeft = () => {
    imageRef.current.style.transform= `translate(-50%,-50%) scale(0)`;
  };

  return (
    <div
      ref={parentRef}
      onMouseMove={(e) => {
        mouseMoving(e);
      }}
      onMouseEnter={mouseEntered}
      onMouseLeave={mouseLeft}
      id="textDivParent"
      className="relative bg-white"
    >
      <div
        className="absolute h-[25vw] w-[28vw] top-0 bg-red-600"
        id="imageContainer"
        ref={imageRef}
      ></div>
      <div id="textContainer">
        <div className="flex w-full justify-between items-center py-[3vw] px-[5.3vw] border-t-2">
          <h1 className="text-[5.5vw]">TWICE</h1>
          <h5 className="text-xl">Interaction & Developement</h5>
        </div>
        <div className="flex w-full justify-between items-center py-[3vw] px-[5.3vw] border-t-2">
          <h1 className="text-[5.5vw]">TWICE</h1>
          <h5 className="text-xl">Interaction & Developement</h5>
        </div>
        <div className="flex w-full justify-between items-center py-[3vw] px-[5.3vw] border-t-2">
          <h1 className="text-[5.5vw]">TWICE</h1>
          <h5 className="text-xl">Interaction & Developement</h5>
        </div>
        <div className="flex w-full justify-between items-center py-[3vw] px-[5.3vw] border-t-2">
          <h1 className="text-[5.5vw]">TWICE</h1>
          <h5 className="text-xl">Interaction & Developement</h5>
        </div>
      </div>
    </div>
  );
};

export default TextContent;
