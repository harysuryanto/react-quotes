import { useState } from "react";

const Form = (props) => {
    const display = props.display;

    const [quotes, setQuotes] = useState();
    const [name, setName] = useState('');
    const [quote, setQuote] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Push data to quotes on submit
        // let id = name;
        // let id = (quotes.id.length > 0) ? quotes.id[quotes.id.length - 1] : 1;
        
        // quotes.id.push(id);
        // quotes.name.push(name);
        // quotes.quote.push(quote);

        /* quotes[quotes.length - 1] = {
            name: (name.length === 0) ? "Anonymous" : name, // set name to "Anonymous" if it's not filled
            quote: quote
        }; */
        /* quotes[4] = {
            name: "ppppppppppppp",
            quote: "asdasdasdasdasd"s
        }; */
        
        setQuotes([...quotes, {
            name: (name.length === 0) ? "Anonymous" : name, 
            quote
        }]);

        /* setTimeout(function () {
            console.log(quotes);
        }, 3000); */

        // console.log(quotes.length);
        console.log(quotes);
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
                        // required
                        placeholder="Quote" />
                </div>
                <button type="submit" className="btn btn-primary w-100">Save</button>
            </form>
        </div>
    );
}

export default Form;