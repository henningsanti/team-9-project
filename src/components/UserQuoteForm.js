import React, {useState, useRef, useEffect} from 'react';
import '../App.css';
import './Section.css';
import Select from 'react-select'
import axios from '../api/axios';


export default function UserQuoteForm(){
    const [gallons, setGallons] = useState('');
    const [address, setAddress] = useState('');
    const [date, setDate] = useState('');
    const [price, setPrice] = useState('');
    const [total, setTotal] = useState();

    //const [firstLogin, setFirstLogin] = useState(true);
    const [readOnly, setReadOnly] = useState(true);
    const fullNameRef = useRef();

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("/login", {
                headers: { 'Content-Type': 'application/json' },
                username: JSON.parse(sessionStorage.getItem('token')).token
            });

            console.log(response);

            if (response) {
                console.log("Got A Response!")
                setGallons(response.data.gallons_requested);
                setAddress(response.data.delivery_address);
                setDate(response.data.delivery_date);
                setPrice(response.data.suggested_ppg);
                setTotal(response.data.amount_due);
                //setFirstLogin(false);
            }
        }
        fetchData();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        setReadOnly(true);

        const response = await axios.post("/quoteform", 
        {
            headers: { 'Content-Type': 'application/json' },
            gallons: gallons,
            username: JSON.parse(sessionStorage.getItem('token')).token,
            address: address,
            price: price,
            total: total
            //firstLogin: firstLogin
        }
    )};

    const resetValues = () => {};

    
    return (
        <div className="section-container">
            <form name="quoteForm" onSubmit={handleSubmit} className="form">
            <h1>Quote Form</h1>
                <div className='form-inputs'>
                    <label  htmlFor="gallons" className='form-label'>
                    Gallons Requested
                    </label>
                    <input 
                        type="float" 
                        name="gallons"
                        maxLength="20"
                        className='form-input' 
                        value={gallons}
                        onChange={(e) => setGallons(e.target.value)}
                        required 
                        placeholder='Enter Gallons Requested'
                        pattern="[0-9]*[.,]?[0-9]+" 
                        />
                </div>

                <div className='form-inputs'>
                    <label  htmlFor="address" className='form-label'>
                    Delivery Address
                    </label>
                    <input 
                        type="text" 
                        name="address"
                        maxLength="100"
                        className='form-input' 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        readOnly= 'readonly'
                        required 
                    />
                </div>

                <div className='form-inputs'>
                    <label  htmlFor="date" className='form-label'>
                    Delivery Date
                    </label>
                    <input 
                        type="date" 
                        name="date"
                        className='form-input' 
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder='Enter Delivery Date'
                        required 
                    />
                </div>

                <div className='form-inputs'>
                    <label  htmlFor="price" className='form-label'>
                    Suggested Price
                    </label>
                    <input 
                        type="float" 
                        name="price"
                        className='form-input' 
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        readOnly= 'readonly'
                    />
                </div>
                <button className='form-input-btn' type='submit'>Get Quote</button>
                    
                <div className='form-inputs'>
                    <label  htmlFor="total" className='form-label'>
                    Total Amount Due:
                    </label>
                    <input 
                        type="float" 
                        name="total"
                        className='form-input' 
                        value={total}
                        onChange={(e) => setTotal(e.target.value)}
                        readOnly= 'readonly'
                    />
                </div>
            </form>
        </div>
    )
}