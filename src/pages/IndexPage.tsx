"use client";
import Quiz from "../components/quiz";
import React, { useState } from "react";
import Navigation from "../components/navigation";

const questions = [
  {
    question: "What is the capital of France?",
    options: [
      { text: "Paris", isCorrect: true },
      { text: "London", isCorrect: false },
      { text: "Berlin", isCorrect: false },
      { text: "Rome", isCorrect: false },
    ],
  },
  {
    question: "What is the capital of Italy?",
    options: [
      { text: "Paris", isCorrect: true },
      { text: "London", isCorrect: false },
      { text: "Berlin", isCorrect: false },
      { text: "Rome", isCorrect: false },
    ],
  },
  {
    question: "What is the capital of Germany?",
    options: [
      { text: "Paris", isCorrect: true },
      { text: "London", isCorrect: false },
      { text: "Berlin", isCorrect: false },
      { text: "Rome", isCorrect: false },
    ],
  },
  {
    question: "What is the capital of Bg?",
    options: [
      { text: "Paris", isCorrect: true },
      { text: "London", isCorrect: false },
      { text: "Berlin", isCorrect: false },
      { text: "Rome", isCorrect: false },
    ],
  },
  {
    question: "What is the capital of Eu?",
    options: [
      { text: "Paris", isCorrect: true },
      { text: "London", isCorrect: false },
      { text: "Berlin", isCorrect: false },
      { text: "Rome", isCorrect: false },
    ],
  },
  {
    question: "What is the capital of US?",
    options: [
      { text: "Paris", isCorrect: true },
      { text: "London", isCorrect: false },
      { text: "Berlin", isCorrect: false },
      { text: "Rome", isCorrect: false },
    ],
  },
];
const IndexPage = () => {
  return (
    <div className="flex flex-col min-s-screen">
      <Navigation />
      <div className="flex-grow px-4 py-8">
        <Quiz questions={questions} />
      </div>
      <footer className="absolute bottom-0 left-0 w-full px-4 py-4 text-center text-white text-xl">
        &copy; 2024 Qatar Museum
      </footer>
    </div>
  );
};

export default IndexPage;
