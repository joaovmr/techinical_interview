import QuestionModal from "@/components/QuestionsModal";
import "@/styles/globals.css";
import { useState } from "react";


export type ChoiceType = "dollar" | "number" | "string" | "boolean" | "";

export type Choice = {
  text: string;
  type: ChoiceType;
};

const Home = () => {
 
  const [isOpen, setIsOpen] = useState(true);
  const [title, setTitle] = useState("");
  const [choices, setChoices] = useState<Choice[]>([]);
  const [savedQuestions, setSavedQuestions] = useState<string[]>([]);

  const handleSaveQuestion = (questionData: string) => {
    setSavedQuestions([...savedQuestions, questionData]);
    console.log(savedQuestions);
  };

  return (
    <>
      <QuestionModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={title}
        setTitle={setTitle}
        choices={choices}
        setChoices={setChoices}
        onSave={handleSaveQuestion}
      ></QuestionModal>
    </>
  );
};

export default Home;
