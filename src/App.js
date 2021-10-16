import { useState, useEffect } from "react";

import Carousel from './components/Carousel';
import Form from './components/Form';
import QuoteList from './components/QuoteList';

function App() {
  // Data
  const [quotes, setQuotes] = useState([
    {
      id: 4,
      name: 'Elon Musk',
      quote: 'Assalamualaikum guys'
    },
    {
      id: 5,
      name: 'Kemal',
      quote: '2 Awkwkwk 🐱‍🏍'
    },
    {
      id: 6,
      name: 'Hary',
      quote: '3 Coba aja dulu'
    },
    {
      id: 7,
      name: 'Bill Gates',
      quote: 'Punteun'
    }
  ]);

  const updateQuotes = (data) => {
    setQuotes(data);
    console.log('App.js setelah update: ' + data.length);
  }



  /* FUNCTIONS FOR ADDING quotes */

  const insertQuote = (name, quote) => {
    // Save the new data to a temporary variable
    const temp_quotes = [...quotes];

    // Insert new data to temp_quotes
    temp_quotes.push({
      id: new Date().getTime(), // Using timestamp to prevent duplicate numbers
      name: (name.length === 0) ? "Anonymous" : name,
      quote
    });

    // Update quotes values in parent from temp_quotes
    updateQuotes(temp_quotes);
  }

  /* /FUNCTIONS FOR ADDING quotes */



  /* FUNCTIONS FOR DELETING quotes */

  const deleteQuote = (index) => {
    console.log(quotes[index].name + ' sedang dihapus');

    // Remove the selected data from quotes
    const quotesAfterDelete = quotes.filter(function (obj) {
      return obj.id !== quotes[index].id;
    });

    // Update quotes values in parent from temp_quotes
    updateQuotes(quotesAfterDelete);
  }

  /* /FUNCTIONS FOR DELETING quotes */



  useEffect(() => {
    console.log('App.js rerenderd');
  }, [quotes]);

  return (
    <div className="container">
      { /* Carousel */}
      
      {quotes.length > 0 && (
        <Carousel data={quotes} />
      )}

      { /* Modal */}
      <Form data={quotes} insertQuote={insertQuote} />
      
      {/* <button onClick={handleShowForm} className="btn btn-dark">
        <FontAwesomeIcon icon={faPencilAlt} />
        Add Quotes
      </button> */}

      { /* Quote List */}
      <QuoteList data={quotes} deleteQuote={deleteQuote} />
    </div>
  );
}

export default App;