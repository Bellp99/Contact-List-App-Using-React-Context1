import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { addContact, editContact } from "../lib/fetch";

export const ContactForm = ({ mode = "add" }) => {
    const { id } = useParams(); // <-- get contact id from URL
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phone: "",
        email: "",
    });

    // If in edit mode, pre-fill form with contact info
    useEffect(() => {
        if (mode === "edit" && id && store.contacts) {
            const contactToEdit = store.contacts.find(c => c.id == id);
            if (contactToEdit) {
                setFormData({
                    name: contactToEdit.name,
                    address: contactToEdit.address,
                    phone: contactToEdit.phone,
                    email: contactToEdit.email,
                });
            }
        }
    }, [mode, id, store.contacts]);


    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (mode === "edit") {
            await editContact(id, formData, dispatch);
        } else {
            const { name, address, phone, email } = formData;
            await addContact(name, address, phone, email, dispatch);
        }

         navigate("/")// Go back to contact list
    };

    return (
         
        <form onSubmit={handleSubmit} className="container mt-4">
            <h2>{mode === "edit" ? "Edit Contact" : "Add a New Contact"}</h2>
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" type="text" required className="form-control mb-3" />
            <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" type="text" required className="form-control mb-3" />
            <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" type="text" required className="form-control mb-3" />
            <input name="email" value={formData.email} onChange={handleChange} placeholder="Email@gmail.com" type="email" required className="form-control mb-3" />

                <button type="submit" className="btn btn-outline-success mt-3">
                    {mode === "edit" ? "Update Contact" : "Add Contact"}
                </button>

        </form>
   
    );
};

export default ContactForm;
