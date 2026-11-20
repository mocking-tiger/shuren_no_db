import { Word } from "@/types/types";
import { useEffect, useState } from "react";

export const useWords = (grade: number, step?: number) => {
  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    fetchWords();
  }, [grade, step]);

  const fetchWords = async () => {
    const response = await fetch("/words.csv");
    const csvData = await response.text();
    const lines = csvData.split("\n");
    const allWords: Word[] = lines.map((line, index) => {
      const [word, wordKana, wordMeaning, example, exampleKana, exampleMeaning, level] = line.split(",");
      return {
        id: index,
        word: word.trim(),
        wordKana: wordKana.trim(),
        wordMeaning: wordMeaning.trim(),
        example: example.trim(),
        exampleKana: exampleKana.trim(),
        exampleMeaning: exampleMeaning.trim(),
        level: Number(level.trim()),
      };
    }).slice(1);// 一行目はヘッダーなので除外
    setWords(step ? allWords?.slice((step - 1) * 9, step * 9) : allWords);
  };

  return { words };
};
