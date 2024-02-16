"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/shoesale.png"
          title="Shoe Sale Ecommerce"
          description="ShoeSale is modern Ecommerce website where one can view along with buy trendy shoes but amazing UI UX."
          source="https://github.com/shivanshsin0203/ShoeSale"
          live="https://shoe-sale.vercel.app"
        />
        <ProjectCard
          src="/creedo.png"
          title="Creedo Social Network"
          description="Creedo is a social network website where one can connect with friends add post view it and many more."
          source="https://github.com/shivanshsin0203/ShoeSale"
          live="https://shoe-sale.vercel.app"
        />
        <ProjectCard
          src="/bytebond.png"
          title="Bytebond Developer Community"
          description="ByteBond is an amazimg developer connect website where one can meet with other developers and interact with them."
          source="https://github.com/shivanshsin0203/ShoeSale"
          live="https://shoe-sale.vercel.app"
        />
      </div>
      
    </div>
  );
};

export default Projects;
