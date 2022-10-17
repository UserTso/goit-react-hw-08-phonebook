
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Item, Span } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <Item>
      <Span>
        {name}:{number}
      </Span>

      <Button 	type="button"
				onClick={() => {
					onDeleteContact(id);
				}} variant="outlined" startIcon={<DeleteIcon />}>
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
