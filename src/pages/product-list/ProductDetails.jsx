import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { img1 } from "../../components/assets/images";

const ProductDetails = () => {
  const location = useLocation();
  const { slug, name } = useParams();
  const navigate = useNavigate();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${slug}`)
      .then((res) => {
        console.log(res);
        setDetail(res?.data);
      })
      .catch((err) => {
        console.log(err);
        navigate("/product");
      });
  }, [slug]);
  return (
    <div className="bg-slate-100 overflow-hidden rounded-lg p-4">
      <img src={img1} alt="" className="w-full object-cover h-[500px]" />
      <div className="m-2">
        <div className="flex gap-2 justify-between">
          <h1 className="text-lg text-gray-700 font-semibold">
            {detail.title}
          </h1>
          <p className="text-gray-500">{detail.userId}</p>
        </div>

        <p className="text-gray-500">{detail.body}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
