import "./style.css";
import { useContext, useState } from "react";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import { WordContext } from "../../Utils/WordContext";

const FormComp = () => {
  // get word from context
  const [sharedWord, setSharedWord] = useContext(WordContext);
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  // handle change function 
  const handleChange = (e) => {
    let val = e.target.value;
    setInput(val);
    setIsValid(validator.contains(val, " "));
    // console.log(isValid);
    if (isValid) {
      setSuccess();
      setError("field should not have any whitespaces");
    } else if (input.length == 0) {
      setSuccess();
      setError("field should not be empty!");
    } else {
      setError();
      setSuccess("Input field is correct. You can submit!");
    }
  };
  const navigate = useNavigate();
  // handling form sumission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error && input.length > 0) {
      localStorage.clear();
      setSharedWord(input);
      localStorage.setItem('word',input);
      localStorage.setItem('duplicateWord',input);
      navigate('/fixr');
    } else {
      if (!error) {
        setError("Field should not be empty / have whitespaces");
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        id=""
        value={input}
        onChange={handleChange}
        onKeyUp={handleChange}
        placeholder="Type in a text or anything"
      />
      <div className="message">
        {error && (
          <span className="error">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 5.16659V8.66658M14.0533 5.71992V10.2799C14.0533 11.0266 13.6533 11.7199 13.0067 12.0999L9.04666 14.3866C8.4 14.7599 7.6 14.7599 6.94666 14.3866L2.98666 12.0999C2.66785 11.9151 2.40329 11.6496 2.21956 11.3301C2.03584 11.0106 1.93942 10.6484 1.94 10.2799V5.71992C1.94 4.97325 2.34 4.27992 2.98666 3.89992L6.94666 1.61325C7.59333 1.23992 8.39333 1.23992 9.04666 1.61325L13.0067 3.89992C13.6533 4.27992 14.0533 4.96659 14.0533 5.71992Z"
                stroke="#960505"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 10.8V10.8667"
                stroke="#960505"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>{error}</p>
          </span>
        )}
        {success && (
          <span className="success">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_104_1177)">
                <path
                  d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
                  stroke="#057509"
                  strokeWidth="1.125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.8125 8.99994L7.935 11.1224L12.1875 6.87744"
                  stroke="#057509"
                  strokeWidth="1.125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_104_1177">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>{success}</p>
          </span>
        )}
      </div>
      <div className="btn">
        <button type="submit" disabled={!input}>Submit</button>
      </div>
    </form>
  );
};

export default FormComp;
