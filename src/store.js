export const initialStore=()=>{
  return{
    contacts: [ ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
 //   case 'add_task':

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
         break;
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
