import React, {useRef, useState, useEffect} from 'react';
import '../../App.css';
import '../QuoteHistory.css';

import axios from "axios";
//import axios from '../api/axios';

const client = axios.create({
  baseURL: 'http://localhost:3333/list',
  headers: {
    "Content-type": "application/json"
  }
});

const QuoteHistory = () => {
    const [posts, setPosts] = useState([]);
    const [gallons, setGallons] = useState('');
    const [address, setAddress] = useState('');
    const [date, setDate] = useState('');
    const [price, setPrice] = useState('');
    const [total, setAmount] = useState('');

     // GET with Axios
     //To request data from an endpoint
     //Using the .data property, the data is obtained from the response object
     useEffect(() => {
        const fetchPost = async () => {
           try {
              let response = await client.get('?_limit=10');
              setPosts(response.data);
           } catch (error) {
              console.log(error);
           }
        };
        fetchPost();
      }, []);
     
      

    const handleSubmit = (e) => {
        e.preventDefault();
        addPosts(gallons, address, date,
            price, total);
     };

      // POST with Axios
      //To send data to an endpoint
      //Triggered when the form is submitted 
      //It takes an object to send the data and add the data to the state
      //by spreading the previous data and then adding the new data
   const addPosts = async (gallons, address, date,
        price, total) => {
    let response = await client.post('', {
        gallons: gallons,
        address: address,
        date: date,
        price: price,
        total: total
    });

    setPosts([response.data, ...posts]);

    setGallons('');
    setAddress('');
    setDate('');
    setPrice('');
    setAmount('');
 };

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
                        {posts.map((post) => {
                            return (
                                <tr>
                                    <td >{post.id}</td>
                                    <td >{post.gallons}</td>
                                    <td>{post.address}</td>
                                    <td>{post.date}</td>
                                    <td>{post.price}</td>
                                    <td>{post.total}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default QuoteHistory