import ChoiceSelect from "./ChoiceSelect";
import ChoiceText from "./ChoiceText";
import QuestionInput from "./QuestionInput";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Choice, ChoiceType } from "@/pages";

type QuestionModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  choices: Choice[];
  setChoices: React.Dispatch<React.SetStateAction<Choice[]>>;
  onSave: (questionData: string) => void; // New prop for save function
};

const QuestionModal: React.FC<QuestionModalProps> = ({
  isOpen,
  setIsOpen,
  title,
  setTitle,
  choices,
  setChoices,
  onSave
}) => {
  const handleAddChoice = () => {
    setChoices([...choices, { text: "", type: "" }]);
  };

  const handleSaveQuestion = () => {
    // Transform content into a json
    const questionData = JSON.stringify({ title, choices });

    onSave(questionData);

    //reset the modal
    setTitle("")
    setChoices([]);

    setIsOpen(false);
  };

  const handleChoiceTextChange = (index: number, newText: string) => {
    setChoices(
        choices.map((choice, i) =>
        i === index ? { ...choice, text: newText } : choice
      )
    );
  };

  const handleChoiceTypeChange = (index: number, newType: Choice["type"]) => {
    setChoices(
        choices.map((choice, i) =>
        i === index ? { ...choice, type: newType } : choice
      )
    );
  };

  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          Add Question
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create your question</DialogTitle>
          <DialogDescription>
            After choosing the title, the rest of options will be shown
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <QuestionInput value={title} onChange={setTitle} />
          <Button
            variant="outline"
            onClick={handleAddChoice}
            disabled={title === ""}
          >
            Add Choice
          </Button>
          {choices.map((choice, index) => (
            <div key={index} className="grid gap-2">
              <ChoiceText
                index={index}
                value={choice.text}
                onChange={handleChoiceTextChange}
              />
              <ChoiceSelect
                onValueChange={(value) =>
                  handleChoiceTypeChange(index, value as ChoiceType)
                }
                choice={choice}
              />
            </div>
          ))}
        </div>
        {choices.length > 0 &&
          choices.every((choice) => choice.text && choice.type) && (
            <Button onClick={handleSaveQuestion}>Save</Button>
          )}
      </DialogContent>
    </Dialog>
  );
};

export default QuestionModal;
