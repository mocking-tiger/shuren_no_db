"use client";

import WordList from "./_components/WordList";
import LoadingComponent from "@/app/components/ui/Loading";
import { useWords } from "@/hooks/use-words";
import { useParams } from "next/navigation";

const DashboardGradeStepPage = () => {
  const { grade, step } = useParams();
  const { words } = useWords(Number(grade), Number(step));

  return (
    <div className="h-[calc(100vh-64px)] flex justify-center items-center">
      <WordList words={words} />
    </div>
  );
};

export default DashboardGradeStepPage;
