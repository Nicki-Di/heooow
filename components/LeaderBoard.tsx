import React from "react";
import Image from "next/image";

const top10 = [
  { name: "Nick", score: 98 },
  { name: "Hatam", score: 85 },
  { name: "Pari", score: 84 },
  {
    name: "Siavash",
    score: 73,
  },
  { name: "Qolamali Haddad Adel", score: 67 },
  { name: " FerdowsiPour", score: 50 },
  {
    name: "David Beckham",
    score: 50,
  },
  { name: "Brad pitt", score: 49 },
];


const LeaderBoard = () => {
  return (
    <div
      className={
        "hidden lg:flex flex-col items-center absolute top-[20%] left-8  bg-modal-bg h-fit text-g-100 rounded-3xl p-2 pt-6 "
      }
    >
      <img src={"/icons/Trophy.png"} alt={"trophy icon"} className={"w-10"} />
      <p className={"h5 "}>TOP 10</p>
      <p className={"p-big mb-4 "}>Leaderboard</p>
      <div className={"bg-g-400 rounded-3xl"}>
        {top10.map((person, index) => (
          <div
            key={index}
            className={
              "min-w-[15vw] p-small flex flex-row items-center justify-between border-b border-p-600 px-6 py-2"
            }
          >
            <div className={"flex flex-row gap-1 items-center "}>
              {index === 0 && (
                <img
                  src={"/icons/Gold.png"}
                  alt={"Gold icon"}
                  className={"w-6 "}
                />
              )}

              {index === 1 && (
                <img
                  src={"/icons/Silver.png"}
                  alt={"Silver icon"}
                  className={"w-6 "}
                />
              )}

              {index === 2 && (
                <img
                  src={"/icons/Bronze.png"}
                  alt={"Bronze icon"}
                  className={"w-6 "}
                />
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
