import PropTypes from 'prop-types';
import {LabelForm, Span, InputForm} from './Filter.styled';

export const Filter = ({onChange}) => {
    return (
  <LabelForm><Span>Finds contacts by name</Span>
    <InputForm onChange={onChange} type="text" name="filter" placeholder="name" />
  </LabelForm>
    )
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
}