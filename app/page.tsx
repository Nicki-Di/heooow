"use client";
import React, { useState } from "react";
import Image from "next/image";

const HomePage = () => {
  const [moving, setMoving] = useState(false);
  return (
    <div
      className={
        "pattern relative min-h-screen short:h-screen overflow-hidden bg-g-500 flex flex-col justify-center items-center"
      }
    >
      <div className={"max-w-5xl xl:max-w-full"}>
        <Image
          src={"/background/main.png"}
          fill
          style={{ objectFit: "contain" }}
          alt={"logo"}
        />
      </div>

      <div
        className={
          "w-full absolute bottom-0 flex flex-col justify-center items-center gap-12 2xl:gap-16"
        }
      >
        <a
          href={"/play"}
          className={
            "pattern bg-p-100 flex flex-row items-center rounded-2xl px-12 py-2 gap-1 text-g-100 p-big"
          }
          onMouseEnter={() => setMoving(true)}
          onMouseLeave={() => setMoving(false)}
        >
          <p> Bring it on</p>
          <Image
            src={"/icons/Fire.png"}
            width={"24"}
            height={"24"}
            className={moving ? "animate-SmallMove" : ""}
            alt={"fire icon"}
          />
        </a>
        <div className={"relative w-full sm:w-3/4 md:w-1/3 xl:w-1/4 h-[10rem]"}>
          <Image
            src={"/background/bg1.png"}
            fill
            style={{ objectFit: "contain" }}
            alt={""}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
