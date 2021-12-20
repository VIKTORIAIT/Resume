import Filter from "../../redux/appActions";
import { useDispatch } from "react-redux";

const FilterEl = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>Find Contacts by Name</p>
      <input
        onChange={(e) => dispatch(Filter(e.target.value))}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </div>
  );
};

export default FilterEl;
