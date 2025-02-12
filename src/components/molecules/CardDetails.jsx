import InputField from "../atoms/InputField";

const CardDetails = ({ formData, handleChange }) => {
  return (
    <div>
      <InputField 
        label="Cardholder Name" 
        name="name" 
        value={formData.name} 
        onChange={handleChange} 
        placeholder="e.g. Jane Appleseed"
      />

      <InputField 
        label="Card Number" 
        name="cardNumber" 
        value={formData.cardNumber} 
        onChange={handleChange} 
        placeholder="e.g. 1234 5678 9123 0000" 
        validation={(val) => /^\d*$/.test(val)} 
        maxLength={16}
      />

      <div>
        <InputField 
          label="Exp. Month" 
          name="expiryMonth" 
          value={formData.expiryMonth} 
          onChange={handleChange} 
          placeholder="MM" 
          maxLength={2}
        />
        <InputField 
          label="Exp. Year" 
          name="expiryYear" 
          value={formData.expiryYear} 
          onChange={handleChange} 
          placeholder="YY" 
          maxLength={2}
        />
      </div>
      <InputField 
        label="CVC" 
        name="cvc" 
        value={formData.cvc} 
        onChange={handleChange} 
        placeholder="e.g. 123" 
        validation={(val) => /^\d*$/.test(val)} 
        maxLength={3}
      />
    </div>
  );
};

export default CardDetails;
