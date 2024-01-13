import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Allison | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Allison Winkley</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/allison-winkley-1464a2242/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/devallisonwinkley"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Analytical
              Thinking <span className="px-1">|</span>
            </p>
            <p>Data Analysis</p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Analytical Thinking</p>
            <p>Data Analysis</p>
          </div>
        </div>
        <p>
          A results-driven individual with experience in customer service, team
          leadership, and organizational effectiveness in fast-paced and
          challenging environments. Has diverse analytical skills, team
          collaboration, and relationship building. A proven track record of
          critical thinking and idea generation.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">
            Technical Skills:
          </h5>
          <p className="py-2">
            <span className="px-2"></span>Front-End Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>Tailwind
          </p>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">
          Non-Programming Professional Experience:
        </h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">CEBU CITY, PHILIPPINES</span>
            <span className="px-2">|</span>Cebu, PH
          </p>
          <p className="py-1 italic">Contact Center Agent (2020-2023)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Handled customers inquiries via phone, chat, and email.</li>
            <li>
              Became Point-Of-Contact to assist other agents whenever our
              superior was not around.
            </li>
            <li>
              Created trackers using Microsoft Excel and Google Sheets for the
              company's metrics.
            </li>
            <li>Took on supervisory roles when needed and tasked to do so.</li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">HOUSTON, TX</span>
            <span className="px-2">|</span>Houston, TX
          </p>
          <p className="py-1 italic">Virtual Assistant (2022-2024)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Did cold calling for a real-estate company based in Houston,
              Texas.
            </li>
            <li>Also took on a role of being a lead generation specialist.</li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">VANCOUVER, BC</span>
            <span className="px-2">|</span>Vancouver, BC
          </p>
          <p className="py-1 italic">Virtual Assistant (2023-2024)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Gathered prospects and made phone calls for a printer company
              based in Vancouver and Burnaby.
            </li>
            <li>
              Sent follow up emails whenever it was required by my superior.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
