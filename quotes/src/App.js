import React, { Fragment, useState, useEffect} from "react";
import Form from "./components/Form";
import Quote from "./components/Quote";

function App() {

  // Quotes in Local Storage
  let initialQuotes = JSON.parse(localStorage.getItem('quotes'));

  if(!initialQuotes){
    initialQuotes = [];
  }

  // Quotes Array
  const [quotes, setQuotes] = useState(initialQuotes);

  // Use Effect to realize certain operations when state changes
  useEffect(() => {
    if(initialQuotes){
      localStorage.setItem('quotes', JSON.stringify(quotes))
    } else {
      localStorage.setItem('quotes', JSON.stringify([]));
    }
  }, [quotes] ); /* Added '[]' only run once. Every time that quotes change, useEffect will run
                  [quotes] is called array of dependencies */

  // Function add new quotes to actual quotes
  const createQuote = (quote) => {
    setQuotes([...quotes, quote]);
  };

  // Function that remove a quote by id
  const deleteQuote = (id) => {
    const newQuotes = quotes.filter((quote) => quote.id !== id);
    setQuotes(newQuotes);
  };

  // Conditional Message
  const title =
    quotes.length === 0 ? "There are no quotes" : "Admin your quotes";

  return (
    <Fragment>
      <h1> Patients admin </h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createQuote={createQuote} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {quotes.map((quote) => (
              <Quote key={quote.id} quote={quote} deleteQuote={deleteQuote} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
