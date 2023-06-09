import React, { useEffect, useState } from "react";
import Title from "../../common/Title";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { img1 } from "../../assets/images";
import { TrashIcon } from "../../assets/icons";

const Project = () => {
  const navigate = useNavigate();
  // const projectList = [
  //   {
  //     title: "title",
  //     slug: "1",
  //     date: "jan 13, 2020",
  //     description:
  //       " Lorem ipsum dolor sit sddq amet consectetur aqw ewqeqwe qw q eqwe wqdipisicing elit.Quisquam voluptatum, quibusdam, quia, quos voluptatesvoluptate quod",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4cMNLHglj8e52x18LQwrjbygCIiJdK2MBA&usqp=CAU",
  //   },
  //   {
  //     title: "My Project",
  //     slug: "2",
  //     date: "jan 13, 2020",
  //     description:
  //       " Lorem ipsum dolor sit amet consectw qedqwe qwewq qw qw w qetur adipisicing elit.Quisquam voluptatum, quibusdam, quia, quos voluptatesvoluptate quod",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4cMNLHglj8e52x18LQwrjbygCIiJdK2MBA&usqp=CAU",
  //   },
  //   {
  //     title: "Our Project",
  //     slug: "3",
  //     date: "jan 13, 2020",
  //     description:
  //       " Lorem ipsum dolor assa sas asasasas  sit amet consectetur adipisicing elit.Quisquam voluptatum, quibusdam, quia, quos voluptatesvoluptate quod",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4cMNLHglj8e52x18LQwrjbygCIiJdK2MBA&usqp=CAU",
  //   },
  //   {
  //     title: "title",
  //     slug: "4",
  //     date: "jan 13, 2020",
  //     description:
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam voluptatum, quibusdam, quia, quos voluptatesvoluptate quod",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4cMNLHglj8e52x18LQwrjbygCIiJdK2MBA&usqp=CAU",
  //   },
  //   {
  //     title: "titles",
  //     slug: "5",
  //     date: "jan 13, 2020",
  //     description:
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam voluptatum, quibusdam, quia, quos voluptatesvoluptate quod",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4cMNLHglj8e52x18LQwrjbygCIiJdK2MBA&usqp=CAU",
  //   },
  // ];
  const [projectList, setProjectList] = useState([]);
  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setProjectList(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const deletePost = (e, id) => {
    e.stopPropagation();
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res.data);
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex dark:bg-gray-700 justify-center items-center space-y-3 flex-col">
      <Title title={"Project"} className={"text-black text-center "} />
      <p className="max-w-[700px] text-center ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, quibusdam, quia, quos voluptates voluptate quod voluptatibus
        quas doloribus quidem fugit. Quisquam voluptatum, dsf sd dcfsdf csd f sd
        fc
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {projectList.map((item) => {
          return (
            <button
              onClick={() => {
                navigate(`/product/${item?.title}/${item?.id}`);
              }}
              key={item?.id}
              className="bg-slate-100 overflow-hidden rounded-lg"
            >
              <img src={img1} alt="" className="w-full object-cover" />
              <div className="m-2">
                <div className="flex gap-2 justify-between">
                  <h1 className="text-lg text-gray-700 font-semibold">
                    {item?.title}
                  </h1>
                  <button onClick={(e) => deletePost(e, item?.id)}>
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>

                <p className="text-gray-500">{item?.body}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
