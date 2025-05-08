// 1.   WE NEED TO CREATE A FORM TO GET INFOR FROM USER
// 2. USESTATES FOR EACH STRING: NAME, ADDRESS, PHONE, EMAIL
// 3. CONTROLLED INPUTS
// 4. A LINK TO GO BACK TO CONTACT PAGE
// 5. USEGLOBALREDUCER TO SAVE UPDATED INFORMATION
// 6. FETCH TO POST DATA TO THE API

import { useState } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";



export const AddContact = () => {
    const [contactName, setContactName] = useState('');
    const [contactAddress, setContactAddress] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [contactEmail, setContactEmail] = useState('');

      
    return (
        <>
        <form>
            <div className="mb-3 container">
                <label htmlFor="contactName" className="form-label">Email address</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="contactName" 
                    placeholder="name@example.com"
                    value={contactName}
                    onChange={e => setContactName(e.target.value)}
                     />
            </div>
            <div className="mb-3 container">
                <label htmlFor="contactAddress" className="form-label">Address</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="contactAddress" 
                    placeholder="xample.com"
                    value={contactAddress}
                    onChange={e => setContactAddress(e.target.value)}
                     />
            </div>
            <div className="mb-3 container">
                <label htmlFor="contactPhone" className="form-label">Phone</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="contactPhone" 
                    placeholder="xample.com"
                    value={contactPhone}
                    onChange={e => setContactPhone(e.target.value)}
                     />
            </div>
            <div className="mb-3 container">
                <label htmlFor="contactEmail" className="form-label">Email address</label>
                <input 
                    type="email" 
                    className="form-control" 
                    id="contactEmail" 
                    placeholder="xample.com"
                    value={contactEmail}
                    onChange={e => setContactEmail(e.target.value)}
                     />
            </div>
            <button
                type='submit'
                className='btn btn-success'
                onClick=''
                >
            </button>
        </form>
        </>
    );
}