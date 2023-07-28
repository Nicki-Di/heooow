"use client";
import React, { useState } from "react";
import Lottie from "lottie-react";
import animationData from "@/public/lottie/paper-splash.json";
import { useSearchParams } from "next/navigation";
import LeaderBoard from "@/components/LeaderBoard";
import Link from "next/link";
import Emoji from "@/components/Emoji";

const ResultPage = () => {
  const queryParams = useSearchParams();
  const [copied, setCopied] = useState(false);

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

      <LeaderBoard />

      <div
        className={
          "flex flex-col justify-center items-center w-full pb-10 -mt-10 short:mt-0"
        }
      >
        {queryParams.get("hasWon") === "true" ? (
          <div
            className={
              "flex flex-col-reverse sm:flex-row items-center justify-center gap-2 sm:gap-8 "
            }
          >
            <div className={"absolute cursor-default -top-[10px]"}>
              <Lottie
                loop={false}
                autoplay
                animationData={animationData}
                className={"h-full"}
              />
            </div>
            <img
              src={"/character/yes.png"}
              className={"max-w-[5rem] sm:max-w-[12rem] -mb-1 "}
              alt={""}
            />
            <div className={"flex flex-col h6"}>
              <div></div>
              <div
                className={
                  "flex flex-row items-center justify-center sm:justify-start gap-2"
                }
              >
                <p className={"text-success "}>Awesome!</p>
                <Emoji src={"/emojis/rock.png"} alt={"rock emoji"} />
              </div>
              <p className={"text-g-100"}>You nailed it buddy</p>
            </div>
          </div>
        ) : (
          <div
            className={
              "flex flex-col-reverse sm:flex-row items-center justify-center gap-2 sm:gap-8 "
            }
          >
            <img
              src={"/character/no.png"}
              className={"max-w-[6rem] sm:max-w-[12rem] -mb-1 "}
              alt={""}
            />
            <div className={"flex flex-col h6"}>
              <p className={"text-failure text-center sm:text-left"}>Really?</p>
              <div
                className={
                  "flex flex-row items-center justify-center sm:justify-start gap-2"
                }
              >
                <p className={"text-g-100 "}>It was Too easy</p>
                <Emoji
                  src={"/emojis/sneezingFace.png"}
                  alt={"sneezingFace emoji"}
                />
              </div>
            </div>
          </div>
        )}

        <div
          className={"bg-g-100 h-1 rounded w-full lg:w-1/2 mb-6 "}
          id={"ground"}
        />
        <button
          className={
            "btn-outline my-6 flex flex-row items-center gap-2 z-10 glow-on-hover"
          }
          onClick={async () => {
            setCopied(true);
            await navigator.clipboard.writeText(window.location.origin);
          }}
        >
          <p>{copied ? "Link Copied!" : "Share with friends"}</p>
          {copied ? (
            <Emoji src={"/emojis/copy.png"} alt={"copy emoji"} />
          ) : (
            <Emoji src={"/emojis/link.png"} alt={"link emoji"} />
          )}
        </button>

        <Link
          href={"/play"}
          className={"btn-primary flex flex-row items-center gap-2"}
        >
          <p>Try again</p>
          <Emoji src={"/emojis/fist.png"} alt={"fist emoji"} />
        </Link>
      </div>
    </div>
  );
};

export default ResultPage;
