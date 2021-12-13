import PropTypes from 'prop-types';

const ContactsList = ({ filter, onClick }) => {
  return (
    <ul>
      {filter.map(el => {
        return (
          <li key={el.id}>
            {el.name + ':' + el.number}{' '}
            <button onClick={onClick} id={el.id} type="button">
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  onClick: PropTypes.func.isRequired,
  filter: PropTypes.array,
};
