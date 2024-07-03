import React from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';

type QuestionInputProps = {
  value: string;
  onChange: (newValue: string) => void;
};

const QuestionInput: React.FC<QuestionInputProps> = ({ value, onChange }) => {
  return (
    <>
      <Label htmlFor="title">Question Title</Label>
      <Input
        id="title"
        type="text"
        value={value}
        placeholder="Set the question title"
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export default QuestionInput;
