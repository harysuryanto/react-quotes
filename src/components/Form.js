import { useState } from "react";

const Form = (props) => {
    const display = props.display;

    const [quotes, setQuotes] = useState([
        {
            id: 4,
            name: 'Hary',
            quote: 'Coba aja dulu'
        },
        {
            id: 5,
            name: 'Kemal',
            quote: 'Awkwkwk 🐱‍🏍'
        }
    ]);
    
    const [id, setId] = useState();
    const [name, setName] = useState('');
    const [quote, setQuote] = useState('');

    const insertQuote = () => {
        // Save the new data to a temporary variable
        const temp_quotes = quotes;
        temp_quotes.push({
            id: Math.floor(Math.random() * 100), // Get random number 0-100
            name: (name.length === 0) ? "Anonymous" : name, 
            quote
        });

        // Insert the new data to quotes
        setQuotes(temp_quotes);

        console.log(quotes);

        // Confirmation
        alert('Quote added');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Insert data
        insertQuote();

        // Clear name and quote
        setName('');
        setQuote('');
    }

    return (
        <div className="container" style={{display: (display) ? 'block' : 'none'}}>
            <form onSubmit={handleSubmit} className="col-sm-12 col-md-8 mx-auto">
                <p className="h3 text-center mb-3">Add quote</p>

                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoFocus
                        placeholder="Name" />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        value={quote}
                        onChange={(e) => setQuote(e.target.value)}
                        required
                        placeholder="Quote" />
                </div>
                <button type="submit" className="btn btn-primary w-100">Save</button>
            </form>
        </div>
    );
}

export default Form;