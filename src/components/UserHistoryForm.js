import {useState, useRef, useEffect} from 'react';
import '../App.css';
import './QuoteHistory.css';
import Select from 'react-select'
import axios from '../api/axios';

export default function ClientInfoForm(){
    const [posts, setPosts] = useState([]);
    //const [gallons, setGallons] = useState('');
    //const [address, setAddress] = useState('');
    //const [date, setDate] = useState('');
    //const [price, setPrice] = useState('');
    //const [total, setTotal] = useState();

    //const [firstLogin, setFirstLogin] = useState(true);
    const [readOnly, setReadOnly] = useState(true);
    const fullNameRef = useRef();

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("/quotehistory", {
                headers: { 'Content-Type': 'application/json' },
                username: JSON.parse(sessionStorage.getItem('token')).token
            });

            console.log(response);

            if (response) {
                console.log("Got A Response!")
                setPosts([response.data, ...posts]);
                //setGallons(response.data.gallons);
                //setAddress(response.data.address);
                //setDate(response.data.date);
                //setPrice(response.data.price);
                //setTotal(response.data.total);
            }
        }
        fetchData();
    }, [])

  /*  const handleSubmit = async (e) => {
        e.preventDefault();

        setReadOnly(true);

        const response = await axios.post("/clientregistration" + 
            (firstLogin ? "-submit" : "-update" ), {
            headers: { 'Content-Type': 'application/json' },
            username: JSON.parse(sessionStorage.getItem('token')).token,
            fullName: fullName,
            address1: address1,
            address2: address2,
            city: city,
            state: state,
            zip: zip,
            firstLogin: firstLogin
        }
    )}; */

    const resetValues = () => {};


    return (
        <div className="section-container">
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
                    <tbody>
                    {posts.map((post) => {
                            return (
                                <tr>
                                    <td >{post.quote_id}</td>
                                    <td >{post.gallons_requested}</td>
                                    <td>{post.delivery_address}</td>
                                    <td>{post.delivery_date}</td>
                                    <td>{post.suggested_ppg}</td>
                                    <td>{post.amount_due}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}