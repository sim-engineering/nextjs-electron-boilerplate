"use client";
import React, { useContext } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Navigation = () => {
  return (
    <div className="flex flex-row justify-around items-center">
      <div className="border border-white rounded-lg p-4">
        <div className="flex flex-row">
          <div>Home</div>
          <FaCheckCircle
            style={{ marginLeft: 6, marginTop: 6, color: "green" }}
          />
        </div>
      </div>
      <div className="border border-white rounded-lg p-4">
        <div className="flex flex-row">
          <div>Videos</div>
          <FaCheckCircle
            style={{ marginLeft: 6, marginTop: 6, color: "green" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
