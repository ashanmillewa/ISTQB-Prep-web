import { questionsData } from "./questions";
import { answersData } from "./answers";

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  image?: string;
}

export interface Paper {
  id: string;
  title: string;
  questions: Question[];
}

const mergeData = (paperId: string): Question[] => {
  const qData = questionsData[paperId] || [];
  const aData = answersData[paperId] || [];
  
  return qData.map(q => {
    const answer = aData.find(a => a.questionId === q.id);
    return {
      ...q,
      correctAnswer: answer?.correctAnswer ?? 0,
      explanation: answer?.explanation ?? "",
      image: q.image
    };
  });
};

export const samplePapers: Paper[] = [
  {
    id: "paper-a",
    title: "Sample Exam Set A (v4.0)",
    questions: mergeData("paper-a")
  },
  {
    id: "paper-b",
    title: "Sample Exam Set B (v4.0)",
    questions: mergeData("paper-b")
  },
  {
    id: "paper-c",
    title: "Sample Exam Set C (v4.0)",
    questions: mergeData("paper-c")
  },
  {
    id: "paper-d",
    title: "Sample Exam Set D (v4.0)",
    questions: mergeData("paper-d")
  }
];

export const questions = samplePapers[0].questions;
