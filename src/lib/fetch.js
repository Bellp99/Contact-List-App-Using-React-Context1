export const fetchAllContacts = async (dispatch) => {
        const response = await fetch('https://playground.4geeks.com/contact/agendas/anabell/contacts')
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
            return data;

        }
        catch (error) {
            console.error("Error getting agenda. Check if URL is incorrect or if agenda doesnt exist.", error)

        }
    }


export const addContact = async(name, address, phone, email, dispatch) => {
    const newContact = {
        name: name,
        address: address,
        phone: phone,
        email: email,
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newContact)
    }

    const response = await fetch(`https://playground.4geeks.com/contact/agendas/anabell/contacts`, options)
    try {
        if(!response.ok){
            throw new Error('Error creating contact!', response.status)
        }
        const data = await response.json();
        dispatch({
            type: 'createdContact',
            payload: newContact,
        });
        return data;
    }
    catch(error) {
        console.error('Error posting contact to the agenda.', error)

    }
}

//DELETE CONTACTS

export const deletedContact = async(id, dispatch) => {
    const options = {
        method: 'DELETE',
    }

    const response = await fetch(`https://playground.4geeks.com/contact/agendas/anabell/contacts/${id}`, options)
    try {
        if(!response.ok){
            throw new Error('Error deleting contact!', response.status)
        }
        dispatch({
            type: 'deletedContact',
            payload: { id: id},
        });
    }
    catch(error) {
        console.error('Error deleting contact to the agenda.', error)

    }
}

// EDIT CONTACT

export const editContact = async (id, updatedData, dispatch) => {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
    };

    try {
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/anabell/contacts/${id}`, options);
        if (!response.ok) {
            throw new Error(`Error updating contact! Status: ${response.status}`);
        }
        const data = await response.json();

        dispatch({
            type: 'updatedContact',
            payload: { id, ...updatedData },
        });

        return data;
    } catch (error) {
        console.error('Error updating contact in the agenda.', error);
    }
};

