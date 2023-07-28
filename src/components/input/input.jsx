const Input = ({tamanho}) => {

    return (
        <div>
            <input type="text" className={`grid-cols-${tamanho}`}/>
        </div>
    );
};

export default Input;