import { useState } from "react";

import Carousel from './components/Carousel';
import Form from './components/Form';
import QuoteList from './components/QuoteList';

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  }

  return (
    <div className="container">
      {
        /* Carousel */
        <Carousel />
      }
      
      <button onClick={handleShowForm} className="btn btn-dark">Toggle Form</button>
      
      {
        /* Form */
        <Form display={showForm} />
      }

      <QuoteList />
    </div>
  );
}

export default App;

/* 
React App Challenge: There is a man who likes to write a diary, one day he wants to insert any quotes into his diary to make it look more attractive, make a quotes generator application to help him
1. Make a single page that contains a single randomly quotes
2. Convert that single randomly quotes to a slider, which have these button feature:
  - Autoplay: after 5s show the next quotes until it reach the end (default)
  - Autoplay backward: after 5s show the previos quotes until it reach the start
  - Next: Show next quotes
  - Previos: Show previos quotes
  - Pause: Pause at certain quotes
3. Bonus 1: Make a form that contains, name, quote, and a button submit
4. Bonus 2: If the user fills the form and clicks the submit button, insert all the data into the slider
  - If the user fill only quote textfield, and click the submit button make the default name as "Anonymous"
  - Quote textfield is mandatory
*/