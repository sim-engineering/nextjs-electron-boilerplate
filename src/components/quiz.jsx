"use client";
import { useState, useEffect, useContext } from "react";
import { TypewriterEffectSmoothComponent } from "./aceternity/typewriter-demo";
import QuizButton from "../components/custom/QuizButton";
import ProgressBar from "../components/custom/QuizProgressBar";

const text = {
  remaining: { en: "Remaining", fr: "Restant" },
  correct: { en: "Correct", fr: "Correcte" },
  wrong: { en: "Wrong", fr: "Faux" },
};

const Quiz = ({ questions: initialQuestions, language }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [remainingCount, setRemainingCount] = useState(initialQuestions.length);
  const [score, setScore] = useState(0);
  const [wrongScore, setWrongScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [words, setWords] = useState([]);
  const [resetKey, setResetKey] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [isTrembling, setIsTrembling] = useState(false);

  const triggerTremble = () => {
    setIsTrembling(true);

    setTimeout(() => {
      setIsTrembling(false);
    }, 1000);
  };

  useEffect(() => {
    setQuestions(initialQuestions);
  }, [initialQuestions]);

  const resetComponent = () => {
    setResetKey((prevKey) => prevKey + 1);
  };

  const handleWordsUpdate = (words) => {
    if (words && words.length > 0) {
      setWords(words.split(" ").map((e) => ({ text: e })));
    }
  };

  const updateAnswer = (questionField, answered, correctly) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = prevQuestions.map((question) => {
        if (question.question === questionField) {
          return { ...question, answered, correctly };
        }
        return question;
      });
      return updatedQuestions;
    });
  };

  const handleAnswer = (isCorrect, question) => {
    updateAnswer(question, true, isCorrect);
    setRemainingCount(remainingCount - 1);
    if (isCorrect) {
      setScore(score + 1);
      resetComponent();
      setIsDisabled(true);
      setTimeout(() => {
        setIsDisabled(false);
      }, 500);
    } else {
      triggerTremble();
      setWrongScore(wrongScore + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      handleWordsUpdate(questions[currentQuestion + 1].title[language]);
    } else {
      setFinished(true);
    }
  };

  useEffect(() => {
    handleWordsUpdate(initialQuestions[currentQuestion].title[language]);
  }, [initialQuestions, currentQuestion]);

  return (
    <div className="flex justify-center items-center w-full">
      <div className="relative flex justify-center items-center">
        {questions.length > 0 && !finished && (
          <div className="absolute right-10 bottom-0 mb-[-50px] flex flex-col justify-center items-start">
            <div className="text-xl font-semibold">
              {" "}
              {text.remaining[language]} {remainingCount}{" "}
            </div>

            <div className="w-full h-px bg-white mx-auto my-1"></div>

            <div className="text-lg font-semibold">
              {text.correct[language]} {score}
            </div>
            <div className="text-lg font-semibold mb-2">
              {text.wrong[language]} {wrongScore}
            </div>
            <ProgressBar total={questions?.length} answers={questions} />
          </div>
        )}
      </div>
      <div
        className={`${isTrembling ? "animate-shake" : ""}`}
        style={{ width: "1000px" }}
      >
        {!finished && currentQuestion < questions.length && (
          <div>
            <div style={{ fontSize: 40, marginBottom: 10 }}>
              Question {currentQuestion + 1}{" "}
              {language === "en" ? "out of" : "sur"} {questions?.length}
            </div>
            <TypewriterEffectSmoothComponent key={resetKey} words={words} />
            <div className="grid grid-cols-2">
              {questions[currentQuestion].options.map((option, index) => (
                <div
                  key={questions[currentQuestion].question + index + "div"}
                  className={`flex flex-wrap col-span-1 items-center justify-center
                    ${index > 1 ? "mt-10" : ""}
                    ${index % 2 === 0 ? "ml-4" : "mr-4"}
                  `}
                >
                  <QuizButton
                    index={index}
                    question={questions[currentQuestion].question}
                    handleAnswer={handleAnswer}
                    isCorrect={option.isCorrect}
                    isDisabled={isDisabled}
                    innerHtml={option.text[language]}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        {finished && (
          <div>
            <div>
              You only got {score} out of {questions.length}!
            </div>
            {score === questions.length ? (
              <div>congrats</div>
            ) : (
              <button
                className="bg-red-800 hover:bg-red-900 text-white font-semibold py-3 px-6 rounded-lg focus:outline-none transform transition-transform duration-300 hover:scale-105"
                onClick={() => {
                  setFinished(false);
                  setScore(0);
                  setRemainingCount(questions.length);
                  setWrongScore(0);
                  setCurrentQuestion(0);
                }}
              >
                Try again
              </button>
            )}
          </div>
        )}
      </div>
      <style jsx>{`
        @keyframes shake {
          0% {
            transform: translate(1px, 1px) rotate(0deg);
          }
          10% {
            transform: translate(-1px, -2px) rotate(-1deg);
          }
          20% {
            transform: translate(-3px, 0px) rotate(1deg);
          }
          30% {
            transform: translate(3px, 2px) rotate(0deg);
          }
          40% {
            transform: translate(1px, -1px) rotate(1deg);
          }
          50% {
            transform: translate(-1px, 2px) rotate(-1deg);
          }
          60% {
            transform: translate(-3px, 1px) rotate(0deg);
          }
          70% {
            transform: translate(3px, 1px) rotate(-1deg);
          }
          80% {
            transform: translate(-1px, -1px) rotate(1deg);
          }
          90% {
            transform: translate(1px, 2px) rotate(0deg);
          }
          100% {
            transform: translate(1px, -2px) rotate(-1deg);
          }
        }

        .animate-shake {
          animation: shake 0.5s infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default Quiz;
