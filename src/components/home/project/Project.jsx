import React from "react";
import Title from "../../common/Title";

const Project = () => {
  const projectList = [
    {
      title: "title",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam voluptatum, quibusdam, quia, quos voluptatesvoluptate quod",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4cMNLHglj8e52x18LQwrjbygCIiJdK2MBA&usqp=CAU",
    },
    {
      title: "title",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam voluptatum, quibusdam, quia, quos voluptatesvoluptate quod",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4cMNLHglj8e52x18LQwrjbygCIiJdK2MBA&usqp=CAU",
    },
    {
      title: "title",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam voluptatum, quibusdam, quia, quos voluptatesvoluptate quod",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4cMNLHglj8e52x18LQwrjbygCIiJdK2MBA&usqp=CAU",
    },
    {
      title: "title",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam voluptatum, quibusdam, quia, quos voluptatesvoluptate quod",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4cMNLHglj8e52x18LQwrjbygCIiJdK2MBA&usqp=CAU",
    },
    {
      title: "titles",
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
                <h1 className="text-lg text-gray-700 font-semibold">
                  {item.title}
                </h1>
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
