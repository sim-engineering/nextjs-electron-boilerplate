"use client";
import Quiz from "../components/quiz";
import React, { useState } from "react";
import Navigation from "../components/navigation";

const text = {
  footer: {
    en: "2024 Qatar Museum",
    fr: "2024 Musée du Qatar",
  },
  language_button: {
    en: "Changer la langue en français",
    fr: "Change language to English",
  },
};

const questions = [
  {
    question: "What is the capital of France",
    title: {
      en: "What is the capital of France?",
      fr: "Quelle est la capitale de la France?",
    },
    options: [
      { text: { en: "Paris", fr: "Paris" }, isCorrect: true },
      { text: { en: "London", fr: "Londres" }, isCorrect: false },
      { text: { en: "Berlin", fr: "Berlin" }, isCorrect: false },
      { text: { en: "Rome", fr: "Rome" }, isCorrect: false },
    ],
  },
  {
    question: "What is the capital of Germany",
    title: {
      en: "What is the capital of Germany?",
      fr: "Quelle est la capitale de la Allemand?",
    },
    options: [
      { text: { en: "Paris", fr: "Paris" }, isCorrect: false },
      { text: { en: "London", fr: "Londres" }, isCorrect: false },
      { text: { en: "Berlin", fr: "Berlin" }, isCorrect: true },
      { text: { en: "Rome", fr: "Rome" }, isCorrect: false },
    ],
  },
];

const IndexPage = () => {
  const [language, setLanguage] = useState("en");
  const [rotate, setRotate] = useState(false);

  const switchLanguage = () => {
    language === "en" ? setLanguage("fr") : setLanguage("en");
  };

  const handleRotate = () => {
    setRotate(true);
    setTimeout(() => setRotate(false), 1000); // Adjust time to match the animation duration
  };

  return (
    <div className="flex flex-col min-h-screen">
      <button
        onClick={switchLanguage}
        className="m-4 p-2 text-white border border-white rounded-xl"
      >
        {text.language_button[language]}
      </button>

      <div className="flex-grow px-4 py-8">
        <div
          className={`relative group p-4 m-4 border border-slate rounded-xl transform transition-transform duration-1000 ${
            rotate ? "rotate-x" : "rotate-reverse-x"
          }`}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg blur opacity-60 group-hover:opacity-10 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <Quiz
            questions={questions}
            language={language}
            handleRotate={handleRotate}
          />
        </div>
      </div>
      <footer className="absolute bottom-0 left-0 w-full px-4 py-4 text-center text-white text-xl">
        &copy; {text.footer[language]}
      </footer>
      <style jsx>{`
        @keyframes rotateX {
          0% {
            transform: rotateX(0deg);
          }
          10% {
            transform: rotateX(10deg);
          }
          20% {
            transform: rotateX(20deg);
          }
          30% {
            transform: rotateX(30deg);
          }
          40% {
            transform: rotateX(40deg);
          }
          50% {
            transform: rotateX(50deg);
          }
          60% {
            transform: rotateX(60deg);
          }
          70% {
            transform: rotateX(70deg);
          }
          80% {
            transform: rotateX(80deg);
          }
          90% {
            transform: rotateX(90deg);
          }
          100% {
            transform: rotateX(95deg);
          }
        }

        @keyframes rotateReverseX {
          0% {
            transform: rotateX(100deg);
          }
          10% {
            transform: rotateX(90deg);
          }
          20% {
            transform: rotateX(80deg);
          }
          30% {
            transform: rotateX(70deg);
          }
          40% {
            transform: rotateX(60deg);
          }
          50% {
            transform: rotateX(50deg);
          }
          60% {
            transform: rotateX(40deg);
          }
          70% {
            transform: rotateX(30deg);
          }
          80% {
            transform: rotateX(20deg);
          }
          90% {
            transform: rotateX(10deg);
          }
          100% {
            transform: rotateX(0deg);
          }
        }

        .rotate-x {
          animation: rotateX 1s ease-in-out forwards;
        }

        .rotate-reverse-x {
          animation: rotateReverseX 1s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default IndexPage;
