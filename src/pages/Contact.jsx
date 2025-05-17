//5. AND TO DISPATCH AND NEEDED ACTIONS (EDIT, DELETE)

import { useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { ContactCard } from "../components/ContactCard";
import { fetchAllContacts, deletedContact } from "../lib/fetch";

export const Contact = () => {

    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        fetchAllContacts(dispatch);
    }, [])

    
    return (
        
        <>
            <div className="container ">
                {
                    !store && !store.contacts
                    ?
                    <h1>Loading...</h1>
                    :
                    store.contacts.map(contact => {
                        return (
                        <div className="row border p-5" key={contact.id}>
                            <div className="col-10">
                                <div className="d-flex" key={contact.id}>
                                    <ContactCard 
                                        name={contact.name}
                                        address={contact.address}
                                        phone={contact.phone}
                                        email={contact.email}
                                    />
                                </div>
                            </div>
                            
                            <div className="col-2" >
                                    <div className="btn-group" key={contact.id}>
                                        <Link to={`/editcontact/${contact.id}`}>
                                            <button className="btn btn-outline-success m-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil me-2" viewBox="0 0 16 16">
                                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                                            </svg>
                                            Edit</button>
                                        </Link>
                                        <button onClick={() => deletedContact(contact.id, dispatch)} className="btn btn-outline-danger m-2 rounded">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3-fill me-2" viewBox="0 0 16 16">
                                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"></path>
                                                </svg>
                                                Delete
                                        </button>
                                    </div>
                            
                            </div>
                         </div>
                        )
                    })
                }
            </div>
            
        </>
    );
}