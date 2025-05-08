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

export const Contact = () => {
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        fetchAllContacts();
    }, [])

    const fetchAllContacts = async () => {
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/anabell/contacts`)
        try {
            if(!response.ok){
                throw new Error(response.status)
            }
            const data = await response.json();
            console.log(data.contacts);
            //we need to be abel to save the contacts in the store
            //To accomplish this, we need to create a dispatch to set the contacts key in the store
            dispatch({
                type: 'fetchedContacts',
                payload: data.contacts,
            })
        }
        catch (error) {
            console.error("Error getting agenda. Check if URL is incorrect or if agenda doesnt exist.", error)

        }
    }


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
                                    <button>Delete</button>
                                </div>
                        )
                    })
                }
            </div>
            
        </>
    );
}