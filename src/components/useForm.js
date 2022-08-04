import { useState, useEffect } from 'react';
import axios from "axios";

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


const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    gallons: '',
    address: '',
    date: '',
    price: ''
  });
  const [posts, setPosts] = useState([]);
  const [gallons, setGallons] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [price, setPrice] = useState('');
  const [total, setAmount] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

 const handleSubmit = e => {
    e.preventDefault();

   setErrors(validate(values));
    setIsSubmitting(true);

    if(validateForm(errors)) {
          console.info('Valid Form')
     
             addPosts(gallons, address, date,
              price, total);
         }else{
            console.error('Invalid Form')
    }
  };

  // POST with Axios
    //To send data to an endpoint
    //Triggered when the form is submitted 
    //It takes an object to send the data and add the data to the state
    //by spreading the previous data and then adding the new data
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

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange,values, handleSubmit, errors };
};

export default useForm;