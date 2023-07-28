import React from "react";
import Emoji from "@/components/Emoji";
import { classNames } from "@/utils/functions";
import { LeaderBoardType } from "@/globals/types";

interface LeaderBoardProps {
  leaderBoardData: LeaderBoardType[];
}

const LeaderBoard = ({ leaderBoardData }: LeaderBoardProps) => {
  return (
    leaderBoardData.length > 0 && <div
      className={
        "hidden lg:flex flex-col items-center absolute top-[20%] left-8  bg-modal-bg h-fit text-g-100 rounded-3xl px-2 py-6 "
      }
    >
      <img src={"/emojis/trophy.png"} alt={"trophy emoji"} className={"w-10"} />
      <p className={"h5 "}>TOP 10</p>
      <p className={"p-big mb-4 "}>Leader board</p>
      <div className={"bg-g-400 rounded-3xl"}>
        {leaderBoardData.map((person, index) => (
          <div
            key={index}
            className={
            classNames(
              index < leaderBoardData.length - 1 ? " border-b" : "",
              "min-w-[15vw] p-small flex flex-row items-center justify-between border-p-600 px-6 py-2")
            }
          >
            <div className={"flex flex-row gap-1 items-center "}>
              {index === 0 && (
                <Emoji src={"/emojis/gold.png"} alt={"gold emoji"} />
              )}

              {index === 1 && (
                <Emoji src={"/emojis/silver.png"} alt={"silver emoji"} />
              )}

              {index === 2 && (
                <Emoji src={"/emojis/bronze.png"} alt={"bronze emoji"} />
              )}

              <p
                className={
                  "overflow-hidden text-ellipsis whitespace-nowrap w-[20ch]"
                }
              >
                {person.name}
              </p>
            </div>
            <p>{person.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderBoard;
