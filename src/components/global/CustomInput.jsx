const CustomInput = ({ includedClasses, type, name, id, placeholder }) => {


    return (
        <input type={type} name={name} id={id} placeholder={placeholder} className={`${includedClasses} bg-verdinho-escurinho  text-creminho text-center p-1`} />
    );
};

export default CustomInput;