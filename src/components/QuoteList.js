import { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const QuoteList = (props) => {
    const quotes = props.data;
    const deleteQuote = props.deleteQuote;

    console.log('Jumlah data initial: ' + quotes.length);

    useEffect(() => {
        console.log('QuoteList.js rerenderd');
    }, [props]);

    return (
        <table className="table table-striped" >
            <tbody>
                {
                    quotes.map((value, index) => (
                        <tr key={value.id}>
                            <td>{value.name}</td>
                            <td>{value.quote}</td>
                            <td className="d-flex justify-content-end">
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => {
                                        // Delete the selected data
                                        deleteQuote(index);
                                    }}>
                                    <FontAwesomeIcon icon={faTrash} /> {index}
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