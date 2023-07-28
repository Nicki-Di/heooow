import React, { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Emoji from "@/components/Emoji";

type Props = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  hasWon: boolean;
};

const SubmitNameModal = ({ isOpen, setIsOpen, hasWon }: Props) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const onSubmit = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("hasWon", String(hasWon));
    router.push("/result");
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-20 flex flex-row"
        onClose={() => null}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className={"fixed inset-0 backdrop-blur-sm"} />
        </Transition.Child>

        <div className={"fixed inset-x-0 bottom-0 sm:inset-0 overflow-y-auto "}>
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={
                  "text-g-100 w-full sm:max-w-lg transform overflow-hidden rounded-t-[40px] sm:rounded-[40px] p-6 transition-all bg-opacity-[70%] backdrop-blur-xl bg-modal-bg border border-modal-border flex flex-col "
                }
              >
                <div
                  className={"flex flex-row w-full justify-between items-start"}
                >
                  <p className={"h6"}>Enter your name</p>
                  <Image
                    src={"/close.svg"}
                    width={"24"}
                    height={"24"}
                    alt={"close icon"}
                    className={"cursor-pointer"}
                    onClick={() => setIsOpen(false)}
                  />
                </div>
                <p className={"p-small text-left "}>
                  We ask, because we have a freackin leaderboard! Yeaaaah!
                </p>
                <input
                  type={"text"}
                  placeholder={"Are you David Beckham?"}
                  className={
                    "bg-input-bg mt-6 mb-3 rounded-2xl p-3 focus:ring-0 focus:outline-0"
                  }
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      onSubmit();
                    }
                  }}
                />
                <button
                  disabled={name.length === 0}
                  className={
                    "pattern btn-primary flex flex-row items-center justify-center"
                  }
                  onClick={onSubmit}
                >
                  <p>Submit</p>
                  <Emoji src={"/emojis/arm.png"} alt={"arm emoji"} />
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SubmitNameModal;
