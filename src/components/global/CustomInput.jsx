
const CustomInput = ({
  includedClasses,
  type,
  name,
  id,
  placeholder,
  value,
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      className={`${includedClasses} bg-verdinho-escurinho  text-creminho text-center p-1`}
    />
  );

};

export default CustomInput;
