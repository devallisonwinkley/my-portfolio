import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who Am I?</h2>
          <p className="py-2 text-gray-600">
            I am focused on building mobile responsive front-end integrated
            applications. I am passionate about learning new technologies and
            understand that there are numerous ways to get work done. Though I
            am most proficient in building front-end applications with the use
            of: HTML, CSS, Javascript, and React, I am a quick learner and can
            pick up new tech stacks as needed. Being a great developer does not
            mean that you are tied one specific language, but rather choosing
            the best tool for the job.
          </p>
          <p className="py-2 text-gray-600">
            I started learning programming back is 2018 when I was still
            studying. I have been tech savvy and intom the Information
            Technology industry ever since I was younger. That being said, I
            have been honing and enhancing my programming skills to make sure
            that I keep up with trends, especially since we are in a fast-paced
            environment with new technology arising every single day.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
