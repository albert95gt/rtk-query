import { useState } from 'react';
import {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} from '../redux/contactsApi';

export const App = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { data = [], isLoading } = useGetContactsQuery();
  const [addContact, { isError }] = useAddContactMutation();
  const [deleteContact] = useDeleteContactMutation();

  const handleAddContact = async e => {
    e.preventDefault();
    await addContact({ name, phone });
    setName('');
    setPhone('');
  };

  const handleDeleteContact = async id => {
    await deleteContact(id);
  };

  return (
    <>
      <form onSubmit={handleAddContact}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
      {isLoading && <div>Loading...</div>}
      {data && (
        <ul>
          {data.map(item => (
            <li key={item.id}>
              <p>Name: {item.name}</p>
              <p>Phone: {item.phone}</p>
              <button
                type="button"
                onClick={() => handleDeleteContact(item.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
