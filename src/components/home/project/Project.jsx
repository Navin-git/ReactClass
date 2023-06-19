import React from "react";
import Title from "../../common/Title";

const Project = () => {
  const projectList = [
    {
      title: "title",
      date: "jan 13, 2020",
      description:
        " Lorem ipsum dolor sit sddq amet consectetur aqw ewqeqwe qw q eqwe wqdipisicing elit.Quisquam voluptatum, quibusdam, quia, quos voluptatesvoluptate quod",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4cMNLHglj8e52x18LQwrjbygCIiJdK2MBA&usqp=CAU",
    },
    {
      title: "My Project",
      date: "jan 13, 2020",
      description:
        " Lorem ipsum dolor sit amet consectw qedqwe qwewq qw qw w qetur adipisicing elit.Quisquam voluptatum, quibusdam, quia, quos voluptatesvoluptate quod",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4cMNLHglj8e52x18LQwrjbygCIiJdK2MBA&usqp=CAU",
    },
    {
      title: "Our Project",
      date: "jan 13, 2020",
      description:
        " Lorem ipsum dolor assa sas asasasas  sit amet consectetur adipisicing elit.Quisquam voluptatum, quibusdam, quia, quos voluptatesvoluptate quod",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4cMNLHglj8e52x18LQwrjbygCIiJdK2MBA&usqp=CAU",
    },
    {
      title: "title",
      date: "jan 13, 2020",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam voluptatum, quibusdam, quia, quos voluptatesvoluptate quod",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4cMNLHglj8e52x18LQwrjbygCIiJdK2MBA&usqp=CAU",
    },
    {
      title: "titles",
      date: "jan 13, 2020",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam voluptatum, quibusdam, quia, quos voluptatesvoluptate quod",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4cMNLHglj8e52x18LQwrjbygCIiJdK2MBA&usqp=CAU",
    },
  ];
  return (
    <div className="flex justify-center items-center space-y-3 flex-col">
      <Title title={"Project"} className={"text-black text-center "} />
      <p className="max-w-[700px] text-center ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, quibusdam, quia, quos voluptates voluptate quod voluptatibus
        quas doloribus quidem fugit. Quisquam voluptatum, dsf sd dcfsdf csd f sd
        fc
      </p>
      <div className="grid grid-cols-3 gap-10 px-10">
        {projectList.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-slate-100 overflow-hidden rounded-lg"
            >
              <img src={item.image} alt="" className="w-full object-cover" />
              <div className="m-2">
                <div className="flex gap-2 justify-between">
                  <h1 className="text-lg text-gray-700 font-semibold">
                    {item.title}
                  </h1>
                  <p className="text-gray-500">{item.date}</p>
                </div>

                <p className="text-gray-500">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
