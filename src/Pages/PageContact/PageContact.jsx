import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Section } from '../../components/Section/Section';
import { Filter } from '../../components/Filter/Filter';
import {ContactList} from '../../components/ContactList/ContactList';
import {GlobalBox} from './PageContact.styled';
import { addContacts, deleteContacts } from "redux/contacts/contactsOperations";
import {filterContacts} from 'redux/contacts/contactsSlice';
import { getContactsItems, getContactsFilter, getContactsError} from 'redux/contacts/contactsSelectors';
import {getIsLoggedin} from 'redux/auth/authSelectors';
import { useNavigate } from 'react-router-dom';

export function PageContact() {

// const {contacts, filter} = useSelector(state => state);
const items = useSelector(getContactsItems);
const stateFilter = useSelector(getContactsFilter);
const stateError = useSelector(getContactsError);
const login = useSelector(getIsLoggedin);

const dispatch = useDispatch();
const navigate = useNavigate();

if(stateError) {
	alert('Перезвоните позже!!!)))')
};

useEffect(()=>{
	        dispatch(fetchContacts())
	    }, [dispatch, login, navigate])

const getValueSubmitForm = value => {
    if(checkContacts(value.name)) {
      return alert(`${value.name} is already in contacts`)
    }
			dispatch(addContacts(value))
	};

const checkContacts = contact => {
  return items.find(element => 
    element.name.toLowerCase() === contact.toLowerCase()
  )
}

const onChange = (event) => {
		const name = event.currentTarget.value;
		dispatch(filterContacts(name))
	    }

const onFilterContact = () => {
	const currentFilter = stateFilter.toLowerCase();
	return items.filter((element) => {
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

