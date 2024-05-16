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
  const switchLanguage = () => {
    language === "en" ? setLanguage("fr") : setLanguage("en");
  };
  return (
    <div className="flex flex-col min-s-screen">
      {/* <Navigation /> */}
      <button onClick={switchLanguage}>{text.language_button[language]}</button>
      <div className="flex-grow px-4 py-8">
        <Quiz questions={questions} language={language} />
      </div>
      <footer className="absolute bottom-0 left-0 w-full px-4 py-4 text-center text-white text-xl">
        &copy; {text.footer[language]}
      </footer>
    </div>
  );
};

export default IndexPage;
