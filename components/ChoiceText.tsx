import React from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';

type ChoiceTextProps = {
  index: number;
  value: string;
  onChange: (index: number, newText: string) => void;
};

const ChoiceText: React.FC<ChoiceTextProps> = ({ index, value, onChange }) => {
  return (
    <>
      <Label htmlFor={`choice-text-${index}`}>Choice Text</Label>
      <Input
        id={`choice-text-${index}`}
        type="text"
        placeholder="Set the option title"
        value={value}
        onChange={(e) => onChange(index, e.target.value)}
      />
    </>
  );
};

export default ChoiceText;
