"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SubmitNameModal from "@/components/SubmitNameModal";

const PlayPage = () => {
  const router = useRouter();
  const [playing, setPlaying] = useState(false);
  const [open, setOpen] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const audio = new Audio("/sound2.5.mp3");
  audio.loop = true;
  document.body.onkeyup = function (e) {
    if (e.key === " " || e.code === "Space") {
      playGame();
    }
  };

  const playGame = () => {
    if (!playing) {
      audio.loop = true;
      const character = document
        .getElementById("character")
        ?.getBoundingClientRect().bottom ?? 0;
      const ground = document
        .getElementById("ground")
        ?.getBoundingClientRect().y ?? 0;
      audio.play();
      setPlaying(true);

      console.log(ground - character);

      if (ground - character < 45) {
        setHasWon(true);
      }
      setTimeout(async () => {
        setPlaying(false);
        audio.loop = false;

        if (!localStorage.getItem("name")) {
          setOpen(true);
        } else {
          await router.push(`/result?hasWon=${ground - character < 45}`)
        }
      }, 8000);
    }
  };

  return (
    <div
      className={
        "pattern min-h-screen overflow-hidden bg-g-500 flex flex-col justify-between items-center"
      }
    >
      <img
        src={"/background/main.png"}
        alt={"logo"}
        className={"max-w-lg sm:max-w-2xl -mt-24 "}
      />
      <div
        className={"flex flex-col justify-center items-center w-full pb-10 "}
      >
        {open ? (
          <img
            src={"/character/sleeping.png"}
            className={"max-w-[12rem] -mb-1 z-10"}
            alt={""}
          />
        ) : (
          <img
            src={"/character/moving.png"}
            id={"character"}
            className={"max-w-[12rem] z-10 animate-MoveUpDown"}
            alt={"character"}
          />
        )}

        <div
          className={"bg-g-100 h-1 rounded w-full lg:w-1/2 mb-6 "}
          id={"ground"}
        />
        <img
          src={"/tip.png"}
          className={"hidden sm:block max-w-[12rem] mb-4"}
          alt={""}
        />

        <button
          className={
            "pattern w-11/12 sm:w-auto bg-p-100 flex flex-row items-center justify-center rounded-2xl px-16 py-2 gap-1 text-g-100 p-big " +
            (playing ? "cursor-not-allowed" : " cursor-pointer")
          }
          onClick={playGame}
          disabled={playing}
        >
          <p>Start</p>
          <img
            src={"/icons/PartyingFace.png"}
            alt={"party face icon"}
            className={"w-6 h-6 "}
          />
        </button>
      </div>
      <SubmitNameModal isOpen={open} setIsOpen={setOpen} hasWon={hasWon} />
    </div>
  );
};

export default PlayPage;
