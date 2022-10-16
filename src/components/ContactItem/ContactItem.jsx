import PropTypes from 'prop-types';
// import { useState } from 'react';
// import { useSelector } from 'react-redux';
import { Item, Span, Button } from './ContactItem.styled';
// import{getContactsIsLoading} from 'redux/contacts/contactsSelectors';

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
	// const [isLocalLoading, setIsLocalLoading] = useState(false);
// const isLoading = useSelector(getContactsIsLoading);
	return (
		<Item>
			<Span>
				{name}:{number}
			</Span>
			<Button
				type="button"
				onClick={() => {
					onDeleteContact(id);
					// setIsLocalLoading(true);
				}}
			>
				{/* {isLoading ? 'loading...' : 'Delete'} */}
				Delete
			</Button>
		</Item>
	);
};

ContactItem.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
	onDeleteContact: PropTypes.func.isRequired,
};
