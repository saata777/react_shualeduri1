import { useState } from "react";

const InputField = ({ label, name, value, onChange, placeholder, validation, maxLength }) => {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    
  
    if (validation && !validation(newValue)) {
      setError(`Invalid ${label}`);
    } else {
      setError("");
    }
    
    onChange(name, newValue);

  };

  return (
    <div>
      <label>{label}</label>
      <input 
        type="text" 
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        maxLength={maxLength}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default InputField;
