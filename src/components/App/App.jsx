import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from 'react';
import { fetchContacts } from 'redux/operations';

import { ContactForm } from '../ContactForm/ContactForm';
import { Section } from '../Section/Section';
import { Filter } from '../Filter/Filter';
import {ContactList} from '../ContactList/ContactList';
import {GlobalBox} from './App.styled';

import { addContacts, deleteContacts } from "redux/operations";
import {filterContacts} from 'redux/slice';

export function App() {

const {contacts, filter} = useSelector(state => state);

const dispatch = useDispatch();
useEffect(()=>{
	        dispatch(fetchContacts())
	    }, [dispatch])

const getValueSubmitForm = value => {
    if(checkContacts(value.name)) {
      return alert(`${value.name} is already in contacts`)
    }
			dispatch(addContacts(value))
	};

const checkContacts = contact => {
  return contacts.items.find(element => 
    element.name.toLowerCase() === contact.toLowerCase()
  )
}

const onChange = (event) => {
		const name = event.currentTarget.value;
		dispatch(filterContacts(name))
	    }

const onFilterContact = () => {
	const currentFilter = filter.toLowerCase();
	return contacts.items.filter((element) => {
return element.name.toLowerCase().includes(currentFilter)
	})
}


		return (
			<>
			<GlobalBox>
				<Section title="PhoneBook">
					<ContactForm submitForm={getValueSubmitForm} />
				</Section>
				<Section title="Contacts">
					<Filter onChange={onChange} />
					<ContactList contacts={onFilterContact()} 
					onDeleteContact={(id) => dispatch(deleteContacts(id))}/>
				</Section>
				</GlobalBox>
			</>
		);
}

