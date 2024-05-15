import React, { useEffect, useState } from "react";
import Image from "next/image";

const QuizButton = ({
  index,
  question,
  handleAnswer,
  isCorrect,
  isDisabled,
  text,
}: {
  index: number;
  question: string;
  isCorrect: boolean;
  isDisabled: boolean;
  text: string;
  handleAnswer: (isCorrect: boolean, question: string) => {};
}) => {
  return (
    <button
      key={question + index + "button"}
      onClick={() => {
        handleAnswer(isCorrect, question);
      }}
      className={`relative flex flex-col justify-center items-center bg-transparent rounded-lg overflow-hidden transition-transform transform hover:-translate-x-1 hover:scale-105`}
      style={{
        width: "325px",
        height: "200px",
        fontSize: 38,
        fontWeight: "bold",
        position: "relative",
      }}
      disabled={isDisabled}
    >
      <div
        key={question + index + "parentimage"}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          key={question + index + "image"}
          src="./button.png"
          alt="Button Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 object-cover"
        />
      </div>
      <span key={question + index + "span"} className="z-10">
        {text}
      </span>
    </button>
  );
};

export default QuizButton;
