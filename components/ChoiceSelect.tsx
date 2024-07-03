import { Choice } from "@/pages";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type ChoiceSelectProps = {
  onValueChange: (value: string) => void;
  choice: Choice
};

const ChoiceSelect: React.FC<ChoiceSelectProps> = ({ onValueChange, choice }) => {
  return (
    <Select
      onValueChange={(value) =>
        onValueChange(value)
      }
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Set the option type">
          {choice.type}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="dollar">Dollar</SelectItem>
        <SelectItem value="number">Number</SelectItem>
        <SelectItem value="string">String</SelectItem>
        <SelectItem value="boolean">Boolean</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ChoiceSelect;
