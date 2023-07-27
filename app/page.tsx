"use client"
import React, {useState} from "react";
import Image from "next/image";

const HomePage = () => {
  const [moving, setMoving] = useState(false)
  return (
    <div className={"pattern relative min-h-screen short:h-screen overflow-hidden bg-g-500 flex flex-col justify-center items-center"}>
      <img src={"/background/main.png"} alt={"logo"} className={"max-w-5xl xl:max-w-full"}/>
      <div className = {"w-full absolute bottom-0 flex flex-col justify-center items-center gap-8 2xl:gap-16 "}>

        <a href={"/play"} className = {"pattern bg-p-100 flex flex-row items-center rounded-2xl px-12 py-2 gap-1 text-g-100 p-big"}
           onMouseEnter={()=> setMoving(true)}
           onMouseLeave={()=> setMoving(false)}
        >
          <p> Bring it on</p>
          <img src={"/icons/Fire.png"} alt={"fire icon"} className={"w-6 h-6 " + (moving && "animate-SmallMove")}/>
        </a>
        <img src = {"/background/bg1.png"} className = {"w-full sm:w-3/4 md:w-1/3 xl:w-1/4"} alt = {""}/>

      </div>
    </div>
  )
};

export default HomePage;
