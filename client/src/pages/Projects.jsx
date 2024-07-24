import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import mnc1Image from "../images/collab/capg.png";
import mnc2Image from "../images/collab/cprime.png";
import mnc3Image from "../images/collab/infof.png";
import mnc4Image from "../images/collab/Gl.png";
import mnc5Image from "../images/collab/Infosys.png";
import mnc6Image from "../images/collab/itc.png";
import mnc7Image from "../images/collab/lti.png";
import mnc8Image from "../images/collab/syn.png";
import java from "../images/dealing/java.png";
import atom from "../images/dealing/atom.png";
import cloud from "../images/dealing/aws.png";
import devops from "../images/dealing/devops.png";
import micro from "../images/dealing/microservice.png";
import docker from "../images/dealing/Docker.png";
import creative from "../images/achv/creative.png"; // Update with correct paths
import depth from "../images/achv/depth-perception.png"; // Update with correct paths
import evaluation from "../images/achv/evaluation.png"; // Update with correct paths
import prac from "../images/achv/practice.png"; // Update with correct paths
import team from "../images/achv/teamwork.png"; // Update with correct paths
import training from "../images/achv/training.png"; // Update with correct paths

const Projects = () => {
  const { theme } = useSelector((state) => state.theme);

  const collab = [
    { name: "MNC 1 Name", image: mnc1Image },
    { name: "MNC 2 Name", image: mnc2Image },
    { name: "MNC 3 Name", image: mnc3Image },
    { name: "MNC 4 Name", image: mnc4Image },
    { name: "MNC 5 Name", image: mnc5Image },
    { name: "MNC 6 Name", image: mnc6Image },
    { name: "MNC 7 Name", image: mnc7Image },
    { name: "MNC 8 Name", image: mnc8Image },
  ];

  const footPrint = [
    { count: "10,000+", des: "Students who got trained" },
    { count: "20+", des: "Corporate institutions" },
    { count: "15+", des: "Technologies" },
  ];

  const dealing = [
    { logod: java, des: "JAVA" },
    { logod: atom, des: "REACT" },
    { logod: cloud, des: "AWS" },
    { logod: devops, des: "DEVOPS" },
    { logod: micro, des: "MICROSERVICES" },
    { logod: docker, des: "DOCKER" },
  ];

  const achv = [
    { logoa: creative, content: "Creativity sparks innovation" },
    { logoa: depth, content: "Depth enriches understanding" },
    { logoa: evaluation, content: "Evaluation guides progress" },
    { logoa: prac, content: "Practice hones skills" },
    { logoa: team, content: "Teamwork fosters collaboration" },
    { logoa: training, content: "Training provides structured learning" },
  ];

  return (
    <div className="min-h-screen max-w-6xl mx-auto flex flex-col gap-12 p-6">
      <div className="flex flex-col items-center gap-6">
        <div className="text-3xl font-semibold">
          Service <span className="text-green-500">History</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {footPrint.map((fp, index) => (
            <div
              key={index}
              className={`p-6 shadow-md rounded-lg overflow-hidden text-center transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/50 ${
                theme === "dark"
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-600"
              }`}
            >
              <h1 className="text-2xl font-bold">{fp.count}</h1>
              <p>{fp.des}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-3xl font-semibold">MNC's Collaborated With</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {collab.map((item, index) => (
            <div
              key={index}
              className={`p-4 shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/50 ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="mx-auto h-20 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-6">
        <NavLink to="/courses">
          <div className="text-3xl font-semibold">
            The COURSES we <span className="text-green-500">Deal With</span>
          </div>
        </NavLink>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {dealing.map(({ logod, des }, index) => (
            <div
              key={index}
              className={`relative p-4 shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/50 ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
              <img src={logod} alt={des} className="mx-auto h-20 w-auto" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <p className="text-white text-lg">{des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-6">
        <div className="text-3xl font-semibold">
          Refresh Your <span className="text-green-500">Knowledge</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {achv.map(({ logoa, content }, index) => (
            <div
              key={index}
              className={`relative p-4 shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/50 ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
              <img src={logoa} alt={content} className="mx-auto h-20 w-auto" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <p className="text-white text-sm">{content.toUpperCase()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
