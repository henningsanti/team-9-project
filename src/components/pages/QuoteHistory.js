import React, {useState, useEffect} from 'react';
import '../../App.css';
import '../QuoteHistory.css';
import axios from '../../api/axios';

function QuoteHistory(){

    const [history, setHistory] = useState();

    useEffect(() => {
        async function fetchData() {
            const response = await axios.post("/quotehistory", {
                headers: { 'Content-Type': 'application/json' },
                username: JSON.parse(sessionStorage.getItem('token')).token
            });

            if (response) {
                console.log("Got A Response!")
                console.log(response.data);
                setHistory(response.data);
            }
        }
        fetchData();
    }, [])

    const displayQuoteHistory = () => {
        const row = [];

        history?.forEach((quote) => {
            console.log(quote.quote_id);
            row.push(
                <tr>
                    <td>{quote.quote_id}</td>
                    <td>{quote.gallons_requested}</td>
                    <td>{quote.delivery_address}</td>
                    <td>{quote.delivery_date.substr(0, 10)}</td>
                    <td>{quote.suggested_ppg}</td>
                    <td>{quote.amount_due}</td>
                    <td>{quote.order_submitted == 1 ? "Yes" : "No"}</td>
                </tr>
            );
        }); 

        return row;
    };

    return(
        <div className="section-container">
            
            <div className='app-container'>
                
                <h2>Quote History</h2>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Gallons</th>
                            <th>Delivery Address</th>
                            <th>Delivery Date</th>
                            <th>Suggested Price</th>
                            <th>Amount Due</th>
                            <th>Order Submitted</th>
                        </tr>
                    </thead>
                    <tbody >
                        {displayQuoteHistory()}
                    </tbody>
                </table>
                </div>
        </div>
    )
}

export default QuoteHistory