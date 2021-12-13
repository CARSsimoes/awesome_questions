
type InputProps = {
    inputValue: string;
    onChange: (input: string) => void;
}

const Input = ({inputValue, onChange}: InputProps) => {
    
    return(<input className="input-component" value={inputValue} onChange={(e) => onChange(e.target.value)} />)
}

export default Input;