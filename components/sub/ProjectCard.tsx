"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
      <div className=" flex justify-center items-center space-x-9">
      <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-slate-200 cursor-pointer rounded-lg w-[200px]"
        >
          Source Code
        </motion.a>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-slate-200 cursor-pointer rounded-lg w-[200px]"
        >
          Live Link
        </motion.a>
      </div>
    </div>
  );
};

export default ProjectCard;
