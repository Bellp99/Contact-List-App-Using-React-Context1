export const initialStore=()=>{
  return{
    contacts: [ ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){


  //    const { id,  color } = action.payload

    //  return {
    //    ...store,
    //    todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
    //  };
    case 'fetchedContacts':
      const contactArray = action.payload;
      return {
        ...store,
        contacts: [...contactArray]
      }
      case 'createdContact':
        const newContact = action.payload;
        return{
          ...store,
          contacts: [...store.contacts, newContact]
        }
      case 'editedContact':
        return {
                ...state,
                contacts: store.contacts.map(contact =>
                    contact.id === action.payload.id
                        ? { ...contact, ...action.payload }
                        : contact
                ),
            };
      case 'deletedContact':
          const { id } = action.payload;
          return {
            ...store,
            contacts: store.contacts.filter(contact => contact.id !== id)
          }
      default:
        throw Error('Unknown action.');
  }    
}
