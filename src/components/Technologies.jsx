// import React from 'react'
import { TbBrandNextjs } from "react-icons/tb";
import { FaWordpress } from "react-icons/fa";
import {  RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
const Technologies = () => {
  return (
    <>
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />                
            </div>
            <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-7xl text-green-800" />                
            </div>
            <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                <FaWordpress  className="text-7xl text-gray-400" />                
            </div>
            <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                <DiJavascript  className="text-7xl text-orange-600" />                
            </div>
            <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className="text-7xl text-cyan-400" />                
            </div>
        </div>
    </div>
    </>
  )
}

export default Technologies;
