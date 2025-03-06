import React from 'react';
import Icon from './Icon';

interface TextInputProps {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange, placeholder }) => {
  return (
    <div className='flex items-center'>
      <Icon name="searchIcon" className="h-[12px] w-[12px] mr-2" />
      <input
        type="text"
        value={value.toLocaleUpperCase()}
        onChange={onChange}
        placeholder={placeholder}
        className="focus:outline-none w-full font-['Roboto_Condensed'] font-normal text-[16px] leading-[18.75px] tracking-[0%]"
      />
    </div>
  );
};

export default TextInput;
