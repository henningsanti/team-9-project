import React, { useRef, useState, useEffect, useContext } from 'react';

import { Redirect, Link, useHistory } from 'react-router-dom';
import '../App.css';
import './Section.css';
//import './UserForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import validate from './validateInfo';

import axios from '../api/axios';

const client = axios.create({
    baseURL: 'http://localhost:3333/list',
    headers: {
        "Content-type": "application/json"
      }
  });

  const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };


const QuoteUserForm =({submitForm}) => {
  const [data, setData] = useState({
    gallons: '',
    address: '',
    date: '',
    price: '',
    total: ''
  });
    
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const errRef = useRef();



    useEffect(() => {
      setErrMsg('');
  }, [data.gallons, data.date])

    useEffect(() => {
        console.log("Success: " + success);
    }, [success])

    const handleChange = (e) => {
      const value = e.target.value;
      setData({
        ...data,
        [e.target.name]: value
      });
    };

    useEffect(
      () => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
          
        }
      },
      [errors]
    );

   const handleSubmit = e => {
       e.preventDefault();

       setErrors(validate(data));
       setIsSubmitting(true);

       if(validateForm(errors)) 
       {
            console.info('Valid Form')

            addPosts(data.gallons, data.address, data.date,
            data.price, data.total);

        }else{
          console.error('Invalid Form')
        }
        
    };

     // POST with Axios
    //To send data to an endpoint
    //Triggered when the form is submitted 
    //It takes an object to send the data and add the data to the state
    //by spreading the previous data and then adding the new data

    //The url is the server path we send the request to; 
    //note that it is in string format. 
    //The data then encapsulates the request body that we’re sending
    // or parsing to the url. This is in object format, 
    //which means it has a key and value pair.
    const addPosts = async (gallons, address, date,
        price, total) => {
        const response = await client.post('', {
            gallons: gallons,
            address: address,
            date: date,
            price: price,
            total: total
        });
    };
    
    return (
        <div className= 'section-container'>
          {success ? (
            <section>
              <h1>We have received your quote request!!!</h1>
            </section>
          ) : (
            <section>
                <form onSubmit={handleSubmit} className='form' noValidate>
                 <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Quote Form</h1>
                    
                    <div className='form-inputs'>
                        
                        <label htmlFor="gallons" className='form-label'>
                        Gallons Requested
                        </label>
                        <input
                        type="text"
                        id="gallons"
                        name='gallons' 
                        maxLength="20"
                        className='form-input'
                        placeholder='Enter Gallons Requested'
                       // ref={useRef}
                        //onChange={(e) => setGallons(e.target.value)}
                        value = {data.gallons}
                        onChange={handleChange}
                        pattern="[0-9]*[.,]?[0-9]+" 
                        required
                        />
                        {errors.gallons && <p>{errors.gallons}</p>}
                    </div>
                    
                    <div className='form-inputs'>
                        <label htmlFor="address" className='form-label'>
                        Delivery Address
                        </label>
                        <input
                        type="text"
                        id="address"
                        className='form-input'
                        maxLength="100"
                        //ref={useRef}
                        //placeholder='123 Common Street TX 77077'
                        readOnly= 'readonly'
                        //onChange={(e) => setAddress(e.target.value)}
                        value={data.address}
                        onChange={handleChange}
                        />
                    </div>
                    <div className='form-inputs'>
                        <label htmlFor="date" className='form-label'>
                        Delivery Date
                        </label>
                        <input
                        type="date"
                        id="date"
                        name='date'
                        className='form-input'
                        placeholder='Enter Delivery Date'
                        //ref={useRef}
                        //onChange={(e) => setDate(e.target.value)}
                        value={data.date}
                        onChange={handleChange}
                        required
                        />
                        {errors.date && <p>{errors.date}</p>}
                    </div>
                    <div className='form-inputs'>
                        <label htmlFor="price" className='form-label'>
                        Suggested Price
                        </label>
                        <input
                        type="text"
                        id="price"
                        className='form-input'
                        //placeholder='$7'
                        readOnly= 'readonly'
                        //ref={price}
                        //onChange={(e) => setPrice(e.target.value)}
                        value={data.price}
                        onChange={handleChange}
                        />
                    </div>
                    <button className='form-input-btn' type='submit'>Get Quote</button>
                    <div className='form-inputs'>
                        <label htmlFor="total" className='form-label'>
                        Total Amount Due
                        </label>
                        <input
                        type="text"
                        id="total"
                        className='form-input'
                        readOnly = 'readonly'
                        //ref={total}
                        //onChange={(e) => setAmountDue(e.target.value)}
                        value={data.total}
                        onChange={handleChange}
                        />
                    </div>
                </form>
            </section>
          )}
        </div>
      );
    
}
export default QuoteUserForm;