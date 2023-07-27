import React from "react";
import { useRouter } from "next/navigation";
import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useState} from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

type Props = {
  isOpen: boolean,
  setIsOpen: (open: boolean) => void
  hasWon: boolean
};

const SubmitNameModal = ({isOpen, setIsOpen, hasWon} : Props) => {
  const router = useRouter()
  const [name, setName] = useState("")
  return (
    <Transition appear show = {isOpen} as = {Fragment}>
      <Dialog as = "div" className = "relative z-10 flex flex-row" onClose = {() => null}>
        <Transition.Child
          as = {Fragment}
          enter = "ease-out duration-300"
          enterFrom = "opacity-0"
          enterTo = "opacity-100"
          leave = "ease-in duration-200"
          leaveFrom = "opacity-100"
          leaveTo = "opacity-0"
        >
          <div className = {"fixed inset-0 bg-white  backdrop-blur-2xl "}/>
        </Transition.Child>

        <div className = {"fixed inset-x-0 bottom-0 sm:inset-0 overflow-y-auto "}>
          <div className = "flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as = {Fragment}
              enter = "ease-out duration-300"
              enterFrom = "opacity-0 scale-95"
              enterTo = "opacity-100 scale-100"
              leave = "ease-in duration-200"
              leaveFrom = "opacity-100 scale-100"
              leaveTo = "opacity-0 scale-95"
            >
              <Dialog.Panel
                className = {"text-g-100 w-full sm:max-w-lg transform overflow-hidden rounded-t-[40px] sm:rounded-[40px] p-6 transition-all bg-opacity-[70%] backdrop-blur-xl bg-modal-bg border border-modal-border flex flex-col "}>

                <div className = {"flex flex-row w-full justify-between items-start"}>
                  <p className = {"h6"}>Enter your name</p>
                  <CloseRoundedIcon className = {"cursor-pointer"}
                                    onClick = {() => setIsOpen(false)}/>
                </div>
                <p className = {"p-small text-left "}>We ask, because we have a freackin leaderboard!
                  Yeaaaah!</p>
                <input
                  type = {"text"}
                  placeholder = {"Are you David beckham?"}
                  className = {"bg-input-bg mt-6 mb-3 rounded-2xl p-3 focus:ring-0 focus:outline-0"}
                  value = {name}
                  onChange = {(e) => setName(e.target.value)}
                />
                <button
                  disabled = {name.length === 0}
                  className = {"pattern bg-p-100 flex flex-row items-center justify-center rounded-2xl px-16 py-2 gap-1 text-g-100 p-big " + (name ? "cursor-pointer" : "cursor-not-allowed")}
                  onClick = {async () => {
                    localStorage.setItem("name", name)
                    await router.push(`/result?hasWon=${hasWon}`);
                  }}
                >
                  <p>Submit</p>
                  <img src = {"/icons/Arm.png"} alt = {"arm icon"} className = {"w-6 h-6 "}/>
                </button>


              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
};

export default SubmitNameModal;
