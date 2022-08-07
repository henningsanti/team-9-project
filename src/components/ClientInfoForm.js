import {useState, useRef, useEffect} from 'react';
import '../App.css';
import Select from 'react-select'
import axios from '../api/axios';

export default function ClientInfoForm(){

    const [fullName, setFullName] = useState();
    const [address1, setAddress1] = useState();
    const [address2, setAddress2] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [zip, setZip] = useState();

    //const [firstLogin, setFirstLogin] = useState(true);

    const [readOnly, setReadOnly] = useState(true);

    const fullNameRef = useRef();

    useEffect(() => {
        async function fetchData() {
            const response = await axios.post("/clientregistration", {
                headers: { 'Content-Type': 'application/json' },
                username: JSON.parse(sessionStorage.getItem('token')).token
            });

            if (response) {
                console.log("Got A Response!")
                setFullName(response.data[0].full_name);
                setAddress1(response.data[0].address1);
                setAddress2((response.data[0].address2 == null ? '' : response.data[0].address2));
                setCity(response.data[0].city);

                states.forEach(state => {
                    if (state.value == response.data[0].state)
                    setState(state);
                    
                });

                setZip(response.data[0].zip);
                //setFirstLogin(false);
            }
        }
        fetchData();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        setReadOnly(true);

        console.log("State to submit: " + state.value);
    
        const response = await axios.post("/clientregistration-update", {
            headers: { 'Content-Type': 'application/json' },
            username: JSON.parse(sessionStorage.getItem('token')).token,
            fullName: fullName,
            address1: address1,
            address2: address2,
            city: city,
            state: state.value,
            zip: zip,
        }
    )};

    const resetValues = () => {};

    const states = [
        { value: 'AK', label: 'Alaska'},
        { value: 'AL', label: 'Alabama'},
        { value: 'AR', label: 'Arkansas'},
        { value: 'AZ', label: 'Arizona'},
        { value: 'CA', label: 'California'},
        { value: 'CO', label: 'Colorado'},
        { value: 'CT', label: 'Connecticut'},
        { value: 'DC', label: 'District of Columbia'},
        { value: 'DE', label: 'Delaware'},
        { value: 'FL', label: 'Florida'},
        { value: 'GA', label: 'Georgia'},
        { value: 'HI', label: 'Hawaii'},
        { value: 'IA', label: 'Iowa'},
        { value: 'ID', label: 'Idaho'},
        { value: 'IL', label: 'Illinois'},
        { value: 'IN', label: 'Indiana'},
        { value: 'KS', label: 'Kansas'},
        { value: 'KY', label: 'Kentucky'},
        { value: 'LA', label: 'Louisiana'},
        { value: 'MA', label: 'Massachusetts'},
        { value: 'MD', label: 'Maryland'},
        { value: 'ME', label: 'Maine'},
        { value: 'MI', label: 'Michigan'},
        { value: 'MN', label: 'Minnesota'},
        { value: 'MO', label: 'Missouri'},
        { value: 'MS', label: 'Mississippi'},
        { value: 'MT', label: 'Montana'},
        { value: 'NC', label: 'North Carolina'},
        { value: 'ND', label: 'North Dakota'},
        { value: 'NE', label: 'Nebraska'},
        { value: 'NH', label: 'New Hampshire'},
        { value: 'NJ', label: 'NewJersey'},
        { value: 'NM', label: 'New Mexico'},
        { value: 'NV', label: 'Nevada'},
        { value: 'NY', label: 'New York'},
        { value: 'OH', label: 'Ohio'},
        { value: 'OK', label: 'Oklahoma'},
        { value: 'OR', label: 'Oregon'},
        { value: 'PA', label: 'Pennsylvania'},
        { value: 'RI', label: 'Rhode Island'},
        { value: 'SC', label: 'South Carolina'},
        { value: 'SD', label: 'South Dakota'},
        { value: 'TN', label: 'Tennessee'},
        { value: 'TX', label: 'Texas'},
        { value: 'UT', label: 'Utah'},
        { value: 'VA', label: 'Virginia'},
        { value: 'VT', label: 'Vermont'},
        { value: 'WA', label: 'Washington'},
        { value: 'WI', label: 'Wisconsin'},
        { value: 'WV', label: 'West Virginia'},
        { value: 'WY', label: 'Wyoming'}
        ];
    
    return (
        <div className="container-fluid h-75 d-flex flex-column align-items-center justify-content-center">

            <h1> Client Information </h1>

            <form name="clientInfo" onSubmit={handleSubmit} className="d-flex flex-column">
                <div className='form-group my-2 row'>
                    <label className="col-4 col-form-label">
                    Full Name
                    </label>
                    <div className="col-8">
                        <input 
                            type="text" 
                            ref={fullNameRef}
                            name="fullName"
                            maxLength="50"
                            className='form-control' 
                            value={fullName}
                            readOnly={readOnly}
                            onChange={(e) => setFullName(e.target.value)}
                            required />
                    </div>
                </div>

                <div className='form-group my-2 row'>
                    <label className="col-4 col-form-label">
                    Address 1
                    </label>
                    <div className="col-8">
                        <input 
                            type="text" 
                            name="address1" 
                            maxLength="100"
                            className='form-control' 
                            value={address1}
                            readOnly={readOnly}
                            onChange={(e) => setAddress1(e.target.value)}
                            required />
                    </div>
                </div>

                <div className='form-group my-2 row'>
                    <label className="col-4 col-form-label">
                    Address 2
                    </label>
                    <div className="col-8">
                        <input 
                            type="text" 
                            name="address2" 
                            maxLength="100"
                            className='form-control' 
                            value={address2}
                            readOnly={readOnly}
                            onChange={(e) => setAddress2(e.target.value)}
                            />
                    </div>
                </div>

                <div className='form-group my-2 row'>
                    <label className="col-4 col-form-label">
                    City
                    </label>
                    <div className="col-8">
                        <input 
                            type="text" 
                            name="city" 
                            maxLength="100"
                            className='form-control' 
                            value={city}
                            readOnly={readOnly}
                            onChange={(e) => setCity(e.target.value)}
                            required />
                    </div>
                </div>

                <div className='form-group my-2 row'>
                    <label className="col-4 col-form-label">
                    State
                    </label>
                    <div className="col-8">
                        {/*TODO: Figure out how to make React-Select required*/}
                        <Select 
                            options={states} 
                            name="state"
                            value={state}
                            isDisabled={readOnly}
                            required={true}
                            onChange={(e) => setState({label: e.label, value: e.value})} />
                    </div>
                </div>

                <div className='form-group my-2 row'>
                    <label className="col-4 col-form-label">
                    Zip Code
                    </label>
                    <div className="col-8">
                        <input 
                            type="text" 
                            name="zip" 
                            minLength="5"
                            maxLength="9"
                            className='form-control' 
                            value={zip}
                            readOnly={readOnly}
                            onChange={(e) => setZip(e.target.value)}
                            required />
                    </div>
                </div>

                
                {readOnly ? 
                    <div  
                        className="btn btn-primary my-2"
                        onClick={() => {
                            setReadOnly(false);
                            fullNameRef.current.focus()}
                        }>
                        Edit
                    </div>
                    :
                    <div className="d-flex flex-row">
                        <button 
                            type="submit" 
                            className="col-8 btn btn-success my-2">
                            Update
                        </button>
                        
                        <div  
                            className="col-4 btn btn-danger mx-2 my-2"
                            onClick={() => {
                                setReadOnly(true);
                                resetValues();}
                            }>
                            Cancel
                        </div>
                    </div>
                    }


            </form>
        </div>
    )
}