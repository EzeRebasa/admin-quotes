import React, { Fragment, useState } from "react";
import Form from './components/Form';

function App() {

  // Quotes Array

  const [ quotes, setQuotes ] = useState([]);


  // Function add new quotes to actual quotes
  const createQuote = quote => {
    setQuotes([
      ...quotes,
      quote
    ])
  }

  return (
    <Fragment>
      <h1> Patients admin </h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
              <Form 
                createQuote={createQuote}
              />
          </div>
          <div className="one-half column">
            2
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
