import { useState } from "react";

function Form() {
  const [value, setValue] = useState("");
  const [check, setCheck] = useState(true);
  const [select, setSelect] = useState("");
  const [radio, setRadio] = useState(true);
  const [submit, setSubmit] = useState(true);
  const handleInput = (e) => {
    setValue(e.target.value);
    console.log("value", value);
  };
  const handleCheck = (e) => {
    setCheck(e.target.checked);
    console.log("check", check);
  };
  const handleSelect = (e) => {
    setSelect(e.target.value);
    console.log("select", select);
  };
  const handleRadio = (e) => {
    setRadio(e.target.value);
    console.log("radio", radio);
  };
  const handleSubmit = (e) => {
    setSubmit(e.target.value);
    console.log("submit",submit);
    
  }
  return (
    <div>
      <form onSubmit={(e) =>handleSubmit(e)}>
        <input
          type="text"
          onChange={(e) => {
            handleInput(e);
          }}
        />
        <input
          type="checkbox"
          value={check}
          onChange={(e) => {
            handleCheck(e);
          }}
        />
        <br />
        <select name="select" onChange={(e) => handleSelect(e)}>
          <option value="js">Javascript</option>
          <option value="py">python</option>
        </select>
        <br />
        <label> html</label>
        <input
          type="radio"
          value={radio}
          onChange={(e) => {
            handleRadio(e);
          }}
        />
        <br />
        <button type="submit" >submit</button>
      </form>
    </div>
  );
}
export default Form;
