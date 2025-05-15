//5. AND TO DISPATCH AND NEEDED ACTIONS (EDIT, DELETE)

import { useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { ContactCard } from "../components/ContactCard";
import { fetchAllContacts, deletedContact, editContact, addContact } from "../lib/fetch";

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
                                <div className="card  justify-content-center" key={contact.id}>
                                    <ContactCard 
                                        name={contact.name}
                                        address={contact.address}
                                        phone={contact.phone}
                                        email={contact.email}
                                    />
                                    <div className="btn-group w-50">
                                        <Link to={`/editcontact/${contact.id}`}>
                                        <button className="btn btn-primary me-5">Edit</button>
                                        </Link>
                                        <button onClick={() => deletedContact(contact.id, dispatch)} className="btn btn-danger">Delete</button>
                                    </div>
                                </div>
                        )
                    })
                }
            </div>
            
        </>
    );
}