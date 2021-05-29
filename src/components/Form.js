import { useState } from "react";

const Form = (props) => {
    const display = props.display;
    const insertQuote = props.insertQuote;

    const [name, setName] = useState('');
    const [quote, setQuote] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Insert data
        insertQuote(name, quote);

        // Clear name and quote
        setName('');
        setQuote('');
    }

    return (
        <div className="container" style={{ display: (display) ? 'block' : 'none' }}>
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