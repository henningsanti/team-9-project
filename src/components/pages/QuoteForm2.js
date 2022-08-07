import {useState} from 'react';
import '../../App.css';
import axios from '../../api/axios';

export default function QuoteForm2(){

    const [gallons, setGallons] = useState('');
    const [address, setAddress] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');
    const [suggPrice, setSuggPrice] = useState('');
    const [total, setTotal] = useState();
    
    const [canSubmit, setCanSubmit] = useState();

    const [quoteId, setQuoteId] = useState();

    const [success, setSuccess] = useState(false);

    const resetValues = () => {
        setGallons('');
        setAddress('');
        setDeliveryDate('');
        setSuggPrice('');
        setTotal('');
        setCanSubmit(false);
        setQuoteId('');
    }

    const pricingModule = async (e) => {
        e.preventDefault();

        const rateHistoryResponse = await axios.post("/getquote-historyfactor", {
            headers: { 'Content-Type': 'application/json' },
            username: JSON.parse(sessionStorage.getItem('token')).token
        });

        let locFactor = address.trim().split(",")[2].toUpperCase().trim() == "TX" ? 0.02 : 0.04; //2% texas, 4% other
        let rateHistFactor = rateHistoryResponse.data.hasHistory ? 0.01 : 0; //1% if client requested fuel before, 0% if no
        let gallonsFactor = gallons > 1000 ? 0.02 : 0.03;
        let companyFactor = 0.1;

        let currPPG = 1.50;
        let margin = currPPG * (locFactor - rateHistFactor + gallonsFactor + companyFactor)

        setSuggPrice(currPPG + margin);
        setTotal(gallons * (currPPG + margin));
        setCanSubmit(true);
        
        const saveQuoteResponse = await axios.post("/getquote-savequote", {
            headers: { 'Content-Type': 'application/json' },
            username: JSON.parse(sessionStorage.getItem('token')).token,
            gallons: gallons,
            address: address,
            date: deliveryDate,
            suggPrice: currPPG + margin,
            total: gallons * (currPPG + margin)
        });

        console.log(saveQuoteResponse?.data?.quote_id);
        setQuoteId(saveQuoteResponse?.data?.quote_id);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.post("/quoteform-submit", {
            headers: { 'Content-Type': 'application/json' },
            username: JSON.parse(sessionStorage.getItem('token')).token,
            quoteId: quoteId,
        });
    };
    
    return (
        <div className="container-fluid h-75 d-flex flex-column align-items-center justify-content-center">

            <h1> Quote Form </h1>

            <form name="clientInfo" onSubmit={handleSubmit} className="d-flex flex-column">
                <div className='form-group my-2 row'>
                    <label className="col-4 col-form-label">
                    Gallons Requested
                    </label>
                    <div className="col-8">
                        <input 
                            type="text"
                            name="gallons"
                            placeholder='Enter Gallons Requested'
                            className='form-control' 
                            value={gallons}
                            onChange={(e) => {
                                setCanSubmit(false)
                                setSuccess(false);
                                setGallons(e.target.value);
                            }}
                            required />
                    </div>
                </div>

                <div className='form-group mt-2 row'>
                    <label className="col-4 col-form-label">
                    Delivery Address
                    </label>
                    <div className="col-8">
                        <input 
                            type="text" 
                            name="address" 
                            className='form-control' 
                            placeholder='Enter Delivery Address'
                            value={address}
                            onChange={(e) => {
                                setCanSubmit(false);
                                setSuccess(false);
                                setAddress(e.target.value);
                            }} />
                    </div>
                    <p className='col-4'></p>
                    <p className='col-8 text-muted mt-1'>123 Street St, City, ST, Zip</p>
                </div>

                <div className='form-group mt-2 row'>
                    <label className="col-4 col-form-label">
                    Delivery Date
                    </label>
                    <div className="col-8">
                        <input 
                            type="date" 
                            name="date" 
                            className='form-control' 
                            value={deliveryDate}
                            onChange={(e) => {
                                setCanSubmit(false);
                                setSuccess(false);
                                setDeliveryDate(e.target.value)
                            }} />
                    </div>
                </div>


                <div className='form-group my-2 row'>
                    <label className="col-4 col-form-label">
                    Suggested Price
                    </label>
                    <div className="col-8">
                        <input 
                            type="text" 
                            name="suggPrice" 
                            maxLength="100"
                            className='form-control' 
                            value={suggPrice}
                            readOnly
                            onChange={(e) => setSuggPrice(e.target.value)}
                            required />
                    </div>
                </div>

                <div className='form-group my-2 row'>
                    <label className="col-4 col-form-label">
                    Total Amount Due
                    </label>
                    <div className="col-8">
                        <input 
                            type="text" 
                            name="total" 
                            className='form-control' 
                            value={total}
                            readOnly
                            onChange={(e) => setTotal(e.target.value)}
                            required />
                    </div>
                </div>
                
                <div className="d-flex flex-row">
                    <button 
                        type="submit" 
                        className="col-8 btn btn-primary my-2"
                        disabled={gallons == '' || deliveryDate == '' || address == ''}
                        onClick={pricingModule}>
                        Get Quote
                    </button>
                    
                    <button  
                        className="col-4 btn btn-success mx-2 my-2"
                        onClick={(e) => {
                            handleSubmit(e);
                            setSuccess(true);
                            resetValues();
                        }}
                        disabled={!canSubmit}>
                        Submit
                    </button>
                </div>

                {success && 
                <button className='btn btn-success' disabled> Order Submitted and Received! </button>
                }
            </form>
        </div>
    )
}