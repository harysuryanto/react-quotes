import { useState } from 'react';

const QuoteList = () => {
    const [quotes, setQuotes] = useState([
        {
            id: 0,
            name: 'Hary',
            quote: 'Coba aja dulu'
        },
        {
            id: 1,
            name: 'Kemal',
            quote: 'Awkwkwk 🐱‍🏍'
        }
    ]);

    console.log(quotes);

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
                                        setQuotes(quotes.splice(value.id, 1));
                                        // console.log(index, quotes);
                                    }}>
                                    Del {value.id}
                                </button>
                            </td>
                        </tr>
                    ))
                }
                {(quotes.length === 0) ? <tr><td className="text-center">Tidak ada quote</td></tr> : null}
            </tbody>
        </table>
    );
}

export default QuoteList;