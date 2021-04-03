import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const QuoteList = () => {
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

    const [quotesBackup, setQuotesBackup] = useState(quotes); // this variable has the same value as quotes, it is for minimizing potential of bugs

    const deleteQuote = (value) => {
        console.log(value.name, 'sedang dihapus');

        // Get index of the data that will be deleted
        const index = quotesBackup.map(e => e.id).indexOf(value.id);

        // Delete data in quotesBackup
        setQuotesBackup(quotesBackup.splice(index, 1));

        // Copy quotesBackup value to quotes
        setQuotes(quotesBackup);

        console.log('List terbaru', quotesBackup);
    }

    return (
        <table className="table table-striped" >
            <tbody>
                {
                    quotes.map((value, index) => (
                        <tr key={value.id}>
                            <td>{value.name}</td>
                            <td>{value.quote}</td>
                            <td>
                                <button 
                                    type="button" 
                                    className="btn btn-danger"
                                    onClick={() => {
                                        // Delete the selected data
                                        deleteQuote(value);
                                    }}>
                                    <FontAwesomeIcon icon={faTrash} /> {value.id}
                                </button>
                            </td>
                        </tr>
                    ))
                }
                {(quotes.length === 0) ? <tr><td className="text-center">No quotes</td></tr> : null}
            </tbody>
        </table>
    );
}

export default QuoteList;