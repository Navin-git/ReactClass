import React from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const { slug, name } = useParams();
  const navigate = useNavigate();
  console.log(location);
  return (
    <div>
      hello {name} {slug}
      <button
        onClick={() => {
          navigate("/product");
        }}
        className="bg-gray-300 px-4 py-1 rounded"
      >
        product
      </button>
    </div>
  );
};

export default ProductDetails;
