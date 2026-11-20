"use client";
/* eslint-disable @next/next/no-img-element */

import Button from "@/app/components/ui/Button";
import Speaker from "@/app/components/ui/Speaker";
import LoadingComponent from "@/app/components/ui/Loading";
import { useState } from "react";
import { WordWithChoice } from "@/types/types";
import { useParams, useRouter } from "next/navigation";

const WordListForExam = ({
  words,
}: {
  words: WordWithChoice[];
}) => {
  const router = useRouter();
  const { grade, step } = useParams();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState({ word: "", isCorrect: false });
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleIndexChange = (direction: "prev" | "next") => {
    if (currentIndex === 0 && direction === "prev") {
      return;
    }
    if (currentIndex === words.length - 1 && direction === "next") {
      return;
    }
    const newIndex = direction === "prev" ? currentIndex - 1 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleVictory = async () => {
  };

  const handleClickAnswer = (choice: string) => {
    if (choice === words[currentIndex].wordMeaning) {
      setIsButtonDisabled(true);
      setIsCorrect({ word: choice, isCorrect: true });
      setTimeout(() => {
        setIsCorrect({ word: "", isCorrect: false });
        if (currentIndex === words.length - 1) {
          handleVictory();
        } else {
          handleIndexChange("next");
          setIsButtonDisabled(false);
        }
      }, 500);
    } else {
      setIsButtonDisabled(true);
      setIsCorrect({ word: choice, isCorrect: false });
      setTimeout(() => {
        setIsCorrect({ word: "", isCorrect: false });
        setIsButtonDisabled(false);
        router.push(`/dashboard/${grade}/${step}/exam/defeat`);
      }, 500);
    }
  };

  if (!words.length) return <LoadingComponent />;

  return (
    <div className="w-[80%] h-[80%] flex justify-center items-center relative">
      {/* 단어 박스 */}
      <div className="w-full md:w-[80%] h-[400px] md:h-[600px] flex flex-col justify-center items-center bg-white rounded-md shadow-lg relative">
        {/* 인덱스 표시 */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 text-xs md:text-xl font-bold">
          {currentIndex + 1} / {words.length}
        </div>

        {/* 음성 재생 버튼 */}
        <Speaker text={words[currentIndex].wordKana} />

        {isCorrect.word === words[currentIndex].wordMeaning && (
          <span className="absolute top-[30px] md:top-[80px] xl:top-[60px] md:text-2xl">
            {words[currentIndex].wordKana}
          </span>
        )}
        <h1 className="text-4xl md:text-[60px] xl:text-[80px] font-bold relative bottom-[20px] md:bottom-[80px]">
          {words[currentIndex].word}
        </h1>

        {/* 선택지 버튼 */}
        <div className="px-4 flex flex-col md:grid md:grid-cols-2 gap-4 w-full">
          {words[currentIndex].choice.map((choice, index) => (
            <Button
              key={index}
              type="button"
              className={`w-full text-base md:text-xl xl:text-2xl font-bold bg-white text-black! ${isCorrect.word === choice && isCorrect.isCorrect
                ? "bg-green-500! text-white!"
                : isCorrect.word === choice && !isCorrect.isCorrect
                  ? "bg-red-500! text-white!"
                  : "bg-white"
                }`}
              onClick={() => handleClickAnswer(choice)}
              disabled={isButtonDisabled}
            >
              {choice}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WordListForExam;
