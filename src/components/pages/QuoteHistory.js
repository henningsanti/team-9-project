import React from 'react';
import '../../App.css';
import '../QuoteHistory.css';

const QuoteHistory = () => {
    return(
        <div className='section-container'>
            <h2>Quote History</h2>
            <div className='app-container'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Gallons</th>
                            <th>Delivery Address</th>
                            <th>Delivery Date</th>
                            <th>Suggested Price</th>
                            <th>Amount Due</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <td >1</td>
                            <td >20</td>
                            <td>123 Commons Street</td>
                            <td>May 26 2027</td>
                            <td>$500</td>
                            <td>$496</td>
                        </tr>
                    </tbody>
                </table>
                </div>
        </div>
    )
}

export default QuoteHistory