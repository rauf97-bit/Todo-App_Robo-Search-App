import React from "react";
import NewRobot from "./NewRobot";
import {images} from '../components/Images'

export const Robots = ({ robot }) => {

  return (
    <div className="main-card">
      {robot.map((robot) => (
       <NewRobot key={robot.id} robot={robot} imgSrc={images.img1} />
      ))}
    </div>
  );
};
