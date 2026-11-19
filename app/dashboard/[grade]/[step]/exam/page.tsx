"use client";

import LoadingComponent from "@/app/components/ui/Loading";
import WordListForExam from "./_components/WordListForExam";
import { shuffle } from "@/utils/shuffle";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useWords } from "@/hooks/use-words";
import { WordWithChoice } from "@/types/types";
import { useMeanings } from "@/hooks/use-meanings";
import { useUserProgress } from "@/hooks/use-user-progress";

const ExamPage = () => {
  const { meanings } = useMeanings();
  const { grade, step } = useParams();
  const { userProgress } = useUserProgress();
  const { words } = useWords(Number(grade), Number(step));
  const [examWords, setExamWords] = useState<WordWithChoice[]>([]);

  // 시험용 배열로 가공
  useEffect(() => {
    if (!words.length || !meanings?.length || !userProgress) return;

    const handleSetWordsForExam = () => {
      if (userProgress.isPromotion) {
        const newExamWords = words
          .map((word) => ({
            ...word,
            choice: shuffle([
              word.wordMeaning,
              ...shuffle(meanings)
                .filter((meaning) => meaning !== word.wordMeaning)
                .slice(0, 3),
            ]),
          }))
          .slice(0, 20);
        setExamWords(newExamWords);
        return;
      } else {
        const newExamWords = words.map((word) => ({
          ...word,
          choice: shuffle([
            word.wordMeaning,
            ...shuffle(meanings)
              .filter((meaning) => meaning !== word.wordMeaning)
              .slice(0, 3),
          ]),
        }));
        setExamWords(newExamWords);
      }
    };
    handleSetWordsForExam();
  }, [words, meanings]);

  if (!words.length) return <LoadingComponent />;

  console.log("examWords", examWords);

  return (
    <div className="h-[calc(100vh-64px)] flex justify-center items-center">
      <WordListForExam
        words={shuffle(examWords) as WordWithChoice[]}
      />
    </div>
  );
};

export default ExamPage;
