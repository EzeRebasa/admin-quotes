import React, { Fragment, useState } from "react";

const Form = () => {
  // create State of quotes
  const [quote, updateQuote] = useState({
    pet: "",
    owner: "",
    date: "",
    time: "",
    symptoms: "",
  });

  // Function that runs every time the user writes to the input
  const updateState = event => {
      updateQuote({
          ...quote,
          [event.target.name] : event.target.value
      })
  }

  // Extract Values

  const { pet, owner, date, time, symptoms } = quote;

  return (
    <Fragment>
      <h2> Create Quote </h2>

      <form>
        <label> Pet Name </label>
        <input
          type="text"
          name="pet"
          className="u-full-width" // 100% width
          placeholder="Pet Name"
          onChange={updateState}
          value={pet} // The values will allow us to reset the form
        />

        <label> Pet Owner </label>
        <input
          type="text"
          name="owner"
          className="u-full-width" // 100% width
          placeholder="Pet Owner Name"
          onChange={updateState}
          value={owner}
        />

        <label> Date </label>
        <input
          type="date"
          name="date"
          className="u-full-width" // 100% width
          onChange={updateState}
          value={date}
        />

        <label> Time </label>
        <input
          type="time"
          name="time"
          className="u-full-width" // 100% width
          onChange={updateState}
          value={time}
        />

        <label> Symptoms </label>
        <textarea
             className="u-full-width" 
             name="symptoms"
             onChange={updateState}
             value={symptoms} // 
        ></textarea>

        <button
             type="submit" 
             className="u-full-width button-primary"
        > Add Quote </button>

      </form>
    </Fragment>
  );
};

export default Form;
