import React, { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!fullName) newErrors.name = "Name is required";
    if (!age) newErrors.age = "Age is required";
    if (!emailId) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(emailId))
      newErrors.email = "Email is incorrect";
    if (!password) newErrors.pswd = "Password is required";
    if (!confirmPassword) newErrors.cpswd = "Confirm Password is required";
    if (password.length < 6) {
      newErrors.check = "Password is too short";
    } else if (password !== confirmPassword) {
      newErrors.check = "Password doesn't match";
    }
    setError(newErrors);

    // Proceed only if there are no errors
    if (Object.keys(newErrors).length === 0) {
      // Reset form values
      setFullName("");
      setAge("");
      setEmailId("");
      setPassword("");
      setConfirmPassword("");
      alert("Form submitted successfully!");
    } else if (error.check) {
      alert(error.check);
    }
  };

  return (
    <div>
      <form
        className="p-10"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="mb-5">
          <label className="mr-10" htmlFor="fname">
            Name:{" "}
          </label>
          <input
            className="bg-gray-100 px-6 py-2 outline-none rounded-lg w-[350px]"
            type="text"
            name="name"
            id="fname"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            placeholder="Enter your full name"
          />
          <span>{error.name}</span>
        </div>
        <div className="mb-5">
          <label className="mr-10" htmlFor="age">
            Age:
          </label>
          <input
            className="bg-gray-100 px-6 py-2 outline-none rounded-lg w-[350px]"
            type="number"
            name="age"
            id="age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
            placeholder="0"
          />
          <span>{error.age}</span>
        </div>
        <div className="mb-5">
          <label className="mr-10" htmlFor="email">
            Email:{" "}
          </label>
          <input
            className="bg-gray-100 px-6 py-2 outline-none rounded-lg w-[350px]"
            type="email"
            name="email"
            id="email"
            value={emailId}
            onChange={(e) => {
              setEmailId(e.target.value);
            }}
            placeholder="Enter your email"
          />
          <span>{error.email}</span>
        </div>
        <div className="mb-5">
          <label className="mr-10" htmlFor="pswd">
            Password:{" "}
          </label>
          <input
            className="bg-gray-100 px-6 py-2 outline-none rounded-lg w-[350px]"
            type="password"
            name="pswd"
            id="pswd"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter password"
          />
          <span>{error.pswd}</span>
        </div>
        <div className="mb-5">
          <label className="mr-10" htmlFor="cpswd">
            Confirm Password:{" "}
          </label>
          <input
            className="bg-gray-100 px-6 py-2 outline-none rounded-lg w-[350px]"
            type="password"
            name="cpswd"
            id="cpswd"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            placeholder="Re-enter your password"
          />
          <span>{error.cpswd}</span>
        </div>
        <button
          className="border-2 px-6 py-2 bg-green-400 text-white rounded-full"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
