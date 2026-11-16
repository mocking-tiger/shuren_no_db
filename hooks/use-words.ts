import { useEffect, useState } from "react";
import { Word } from "@/types/types";

export const useWords = (grade: number, step?: number) => {
  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    fetchWords();
  }, [grade, step]);

  const fetchWords = async () => {
    let allWords: Word[];
  };

  return { words };
};
