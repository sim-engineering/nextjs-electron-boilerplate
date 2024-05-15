"use client";
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const ProgressBar = ({ total, answers }) => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    setQuestions(answers);
  }, [answers]);

  const bars = [];
  for (let i = 0; i < total; i++) {
    let barColor;
    if (questions[i]?.answered) {
      barColor = questions[i].correctly ? "bg-green-800" : "bg-red-800";
    } else {
      barColor = "bg-gray-800";
    }

    bars.push(
      <div className="flex flex-row" key={i}>
        <div
          className={`h-8 w-32 rounded m-1 ${barColor} flex justify-center items-center`}
        >
          {questions && questions[i] && questions[i].correctly ? (
            <FaCheck />
          ) : (
            <GrClose />
          )}
        </div>
      </div>
    );
  }

  return <div className="flex flex-col">{bars}</div>;
};

export default ProgressBar;
