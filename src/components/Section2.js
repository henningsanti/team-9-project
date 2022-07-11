import React from 'react';
import '../App.css';
import './Section.css';
import './QuoteForm.css';
import useForm from './useForm';
import validate from './validateInfo';

const Section2 = ({submitForm}) =>  {
  const{handleChange, values, handleSubmit, errors}
   = useForm(submitForm, validate);

  return (
    <div className= 'section-container'>
        <form onSubmit={handleSubmit} className='form' noValidate>
            <h1> Quote Form</h1>
            <div className='form-inputs'>
                <label htmlFor='gallons' className='form-label'> 
                Gallons Requested
                </label>
                    <input 
                    id='gallons'
                    type='text' 
                    name='gallons' 
                    className='form-input'
                    placeholder='Enter Gallons Requested'
                    value = {values.gallons}
                    onChange={handleChange}
                    />
                    {errors.gallons && <p>{errors.gallons}</p>}
            </div>
            <div className='form-inputs'>
                <label htmlFor='address' className='form-label'> 
                Delivery Address
                </label>
                    <input 
                    id='address'
                    type='text' 
                    name='address' 
                    className='form-input'
                    placeholder='123 Common Street TX 77077'
                    readOnly= 'readonly'
                    value={values.address}
                    onChange={handleChange}
                    />
                    {errors.address && <p>{errors.address}</p>}
            </div>
            <div className='form-inputs'>
                <label htmlFor='date' className='form-label'> 
                Delivery Date
                </label>
                    <input 
                    id='date'
                    type='date' 
                    name='date' 
                    className='form-input'
                    placeholder='Enter Delivery Date'
                    value={values.date}
                    onChange={handleChange}
                    />
                    {errors.date && <p>{errors.date}</p>}
            </div>
            <div className='form-inputs'>
                <label htmlFor='price' className='form-label'> 
                Suggested Price
                </label>
                    <input 
                    id='price'
                    type='text' 
                    name='price' 
                    className='form-input'
                    placeholder='Suggested Price'
                    readOnly= 'readonly'
                    value={values.price}
                    onChange={handleChange}
                    />
            </div>
            <div className='form-inputs'>
                <label htmlFor='amountdue' className='form-label'> 
                Total Amount Due
                </label>
                    <input 
                    id='amountdue'
                    type='text' 
                    name='amountdue' 
                    className='form-input'
                    placeholder='Amount Due'
                    readOnly= 'readonly'
                    value={values.amountdue}
                    onChange={handleChange}
                    />
            </div>
            <button className='form-input-btn' type='submit'>Get Quote</button>
        </form>
    </div>
  );
}

export default Section2;