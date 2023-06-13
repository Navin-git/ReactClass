import React, { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`bg-gray-100 border-r duration-300 border-gray-300 ${
        open ? "w-64" : "w-16"
      }`}
    >
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? "close" : "open"}
      </button>
    </div>
  );
};

export default Sidebar;
