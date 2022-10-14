import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { deleteContacts } from 'redux/operations';
import { Item, Span, Button } from './ContactItem.styled';

export const ContactItem = ({ id, name, phone, onDeleteContact }) => {

// const dispatch = useDispatch()
// const deleteContact = id => {dispatch(deleteContacts(id))}


	return (
		<Item>
			<Span>
				{name}:{phone}
			</Span>
			<Button
				type="button"
				onClick={() => {
					onDeleteContact(id);
				}}
			>
				Delete
			</Button>
		</Item>
	);
};

ContactItem.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired,
	onDeleteContact: PropTypes.func.isRequired,
};
