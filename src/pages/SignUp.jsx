import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const SignUp = () => {
  // create state for input field with initial value
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isvalided, setIsvalided] = useState(false);
  // on every change in input field
  const HandelChange = (e) => {
    // get name and value from input field using e.target
    const { name, value } = e.target;
    // set input state using setInput and pre means previous state, ...pre means copy of previous state and [name] means name of input field and value is value of input field
    setInput((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  const validate = (value) => {
    const error = {};
    if (!value.name) {
      error.name = "Please enter your name";
    }
    if (!value.email) {
      error.email = "Please enter your email";
    }
    if (!value.password) {
      error.password = "Please enter your password";
    } else if (value.password.length < 6) {
      error.password = "Password must be more than 6 characters";
    }
    return error;
  };

  const HandelSubmit = (e) => {
    // prevent default behaviour of form
    e.preventDefault();
    setErrors(validate(input));
    setIsvalided(true);
  };
  console.log(errors);

  useEffect(() => {
    if (isvalided && Object.keys(errors).length === 0) {
      console.log("submited value", input);
      // put remove previous data and add new one

      // patch replace new value with old one and others value as it is

      axios
        .patch(
          `https://jsonplaceholder.typicode.com/posts/${1}`,
          {
            title: input.name,
            body: input.email,
            userId: input.password,
          },
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          toast.success("posted");
          setInput({
            name: "",
            email: "",
            password: "",
          });
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something went wrong");
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isvalided, errors]);

  return (
    <div className="min-h-screen w-full bg-blue-100 flex justify-center items-center">
      <form
        onSubmit={HandelSubmit}
        className="bg-white rounded-lg p-10 space-y-2"
      >
        <div className="space-y-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={input.name}
            placeholder="Enter your name"
            onChange={HandelChange}
            className="border border-gray-400 w-full p-2 rounded-lg"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            value={input.email}
            onChange={HandelChange}
            className="border border-gray-400 w-full p-2 rounded-lg"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={HandelChange}
            className="border border-gray-400 w-full p-2 rounded-lg"
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 rounded-md text-lg font-medium text-white mt-2 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
