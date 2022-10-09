import {useState, useEffect} from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { Section } from '../Section/Section';
import { Filter } from '../Filter/Filter';
import {ContactList} from '../ContactList/ContactList';
import {GlobalBox} from './App.styled';


export function App() {

	const [contacts, setContacts] = useState(() => {return (
	JSON.parse(window.localStorage.getItem('contacts')) ?? [])
});
const [filter, setFilter] = useState('');

useEffect(() => {
	window.localStorage.setItem('contacts', JSON.stringify(contacts)
)}, [contacts])

		
const getValueSubmitForm = value => {
    if(checkContacts(value.name)) {
      return alert(`${value.name} is already in contacts`)
    }
	setContacts(prevContacts =>  [...prevContacts, value],
			)
	};

const checkContacts = contact => {
  return contacts.find(element => 
    element.name.toLowerCase() === contact.toLowerCase()
  )
}

const onChange = (event) => {
		// console.log(event.currentTarget)
		const {value} = event.currentTarget;
		// передаем значение из инпута в фильтр
		setFilter(value);
	    console.log(setFilter)
	    }

const onFilterContact = () => {
	const currentFilter = filter.toLowerCase();
	return contacts.filter((element) => {
return element.name.toLowerCase().includes(currentFilter)
	})
}

const onDeleteContact = (id) => {
	setContacts(contacts.filter((element) => {
	return element.id !== id
}))
}

		return (
			<>
			<GlobalBox>
				<Section title="PhoneBook">
					<ContactForm submitForm={getValueSubmitForm} />
				</Section>
				<Section title="Contacts">
					<Filter onChange={onChange} />
					<ContactList contacts={onFilterContact()} deleteContact={onDeleteContact} />
				</Section>
				</GlobalBox>
			</>
		);
}

