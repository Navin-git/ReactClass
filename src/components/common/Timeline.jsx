import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { DevicePhoneMobile, TrashIcon } from "../assets/icons";
const Timeline = () => {
  const timeList = [
    {
      title: "Director",
      subTitle: "KathMandu, Nepal",
      dec: `Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading Lorem ipsum dolor sit amet consectetur
          adipisicing elit`,
    },
    {
      title: "Director",
      subTitle: "Miami, FL",
      dec: `Creative Direction, User Experience, Visual Design, Project
         Management, Team Leading o sint iure
         corporis a quae saepe porro, inventore dolor aliquid autem earum
         impedit pariatur architecto ducimus consequatur.`,
    },
    {
      title: "Directors",
      subTitle: "Miami, FL",
      dec: `Creative Direction, Userentore dolor aliquid autem earum
         impedit pariatur architecto ducimus consequatur.`,
    },
    {
      title: "Director",
      subTitle: "Miami, FL",
      dec: `Creative Direction, User Experience, Visual Design, Project
         Management, Team Leading Lorem ipsum dolor sit amet consectetur
         adipisicing elit. Veniam,`,
    },
  ];
  return (
    <VerticalTimeline>
      {timeList.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<DevicePhoneMobile />}
        >
          <h3 className="vertical-timeline-element-title">{item.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">
            {item.subTitle}
          </h4>
          <p>{item.dec}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
