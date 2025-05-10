//THINGS TO DO;
//1. LINK TO THE ADDCONTACTS PAGE
//2. CREATE A FETCH TO GET THE CONTACTS VIA THE API
//3. USEEFFECT HOOK IS NEED TO SAVE THE STATE IN THE STORE
//4. USE GLOBALREDUCER HOOK IS NEEDED TO SAVE THE STATE IN THE STORE
//5. AND TO DISPATCH AND NEEDED ACTIONS (EDIT, DELETE)

import { useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { ContactCard } from "../components/ContactCard";
import { fetchAllContacts, deletedContact } from "./fetch";

export const Contact = () => {
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        fetchAllContacts(dispatch);
    }, [])

    
    return (
        
        <>
            <div className="container">
                {
                    !store && !store.contacts
                    ?
                    <h1>Loading...</h1>
                    :
                    store.contacts.map(contact => {
                        return (
                                <div className="card" key={contact.id}>
                                    <ContactCard 
                                        name={contact.name}
                                        address={contact.address}
                                        phone={contact.phone}
                                        email={contact.email}
                                    />
                                    
                                    <button>Edit</button>
                                    <button onClick={() => deletedContact(contact.id, dispatch)}>Delete</button>
                                </div>
                        )
                    })
                }
            </div>
            
        </>
    );
}