import InputMask from 'react-input-mask';
import { useState } from 'react';
const CustomInput = ({
  includedClasses,
  type,
  name,
  id,
  placeholder,
  value,
  change,
  Mask
}) => {

  const [mask, setMask] = useState('')



  return (
    <InputMask
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      className={`${includedClasses} bg-verdinho-escurinho  text-creminho text-center p-1 h-9`}
      onChange={change}
    />
  );

};

export default CustomInput;
