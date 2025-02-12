import { useState } from "react";
import CardPreview from "../molecules/CardPreview";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvc: "",
  });

  const [savedData, setSavedData] = useState(null);
  const [errors, setErrors] = useState({});
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

   
    if (name === "cardNumber") {
      
      const formattedValue = value.replace(/\D/g, ""); 

     
      const formattedCardNumber = formattedValue.replace(/(.{4})(?=.)/g, "$1 ");

      setFormData({ ...formData, [name]: formattedCardNumber });

      
      if (!/^\d*$/.test(value)) {
        setErrors({ ...errors, [name]: "Wrong format, numbers only" });
      } else {
        setErrors({ ...errors, [name]: "" });
      }
    } else {
      setFormData({ ...formData, [name]: value });
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleConfirm = () => {
    let newErrors = {};

    if (!formData.name) newErrors.name = "This field is required";
    if (!formData.cardNumber) newErrors.cardNumber = "This field is required";
    if (!formData.expiryMonth) newErrors.expiryMonth = "This field is required";
    if (!formData.expiryYear) newErrors.expiryYear = "This field is required";
    if (!formData.cvc) newErrors.cvc = "This field is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setSavedData(formData); 
      setShowThankYou(true);
      setFormData({
        name: "",
        cardNumber: "",
        expiryMonth: "",
        expiryYear: "",
        cvc: "",
      });
      setErrors({});
    }
  };

  return (
    <div>
     
      <CardPreview formData={savedData || formData} />

      {!showThankYou ? (
        <div>
          <div className="cardholder">
            <label>Cardholder Name</label>
            <input
              className="inputw"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Jane Appleseed"
            />
          </div>
          <div className="cardnumbers">
            <label>Card Number</label>
            <input
              className="inputw"
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              maxLength="19" 
              placeholder="e.g. 1234 5678 9123 0000"
            />
            {errors.cardNumber && (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  fontWeight: "500",
                  position: "absolute",
                  top: "80px",
                  left: "6px",
                }}
              >
                {"Wrong format, numbers only"}
              </p>
            )}
          </div>
          <div className="cardexp">
            <label className="expdate">Exp. Date (MM/YY)</label>
            <div className="cardinput">
              <input
                className="expw"
                type="text"
                name="expiryMonth"
                value={formData.expiryMonth}
                onChange={handleChange}
                maxLength="2"
                placeholder="MM"
              />
              {errors.expiryMonth && (
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    fontWeight: "400",
                    position: "absolute",
                    top: "80px",
                    left: "",
                  }}
                >
                  {"Can't be blank"}
                </p>
              )}
              <input
                className="expw"
                type="text"
                name="expiryYear"
                value={formData.expiryYear}
                onChange={handleChange}
                maxLength="2"
                placeholder="YY"
              />
            </div>
          </div>
          <div className="cardcvc">
            <label>CVC</label>
            <input
              className="cardinp"
              type="text"
              name="cvc"
              value={formData.cvc}
              onChange={handleChange}
              maxLength="3"
              placeholder="e.g. 123 "
            />
            {errors.cvc && (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  fontWeight: "400",
                  position: "absolute",
                  top: "80px",
                  left: "",
                }}
              >
                {"Can't be blank"}
              </p>
            )}
          </div>

          <button className="button" onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      ) : (
        <div>
          <div className="thximg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
            >
              <circle cx="40" cy="40" r="40" fill="url(#paint0_linear_0_318)" />
              <path
                d="M28 39.9199L36.0801 48L52.0801 32"
                stroke="white"
                stroke-width="3"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_318"
                  x1="-23.0143"
                  y1="11.5071"
                  x2="1.03143e-06"
                  y2="91.5071"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#6348FE" />
                  <stop offset="1" stop-color="#610595" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2 className="thxh2">Thank you!</h2>
          <p className="thxp">We've added your card details</p>
          <button className="thxbtn">Continue</button>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
