import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilterName, selectFilterName } from "../../redux/filtersSlice";

const SearchBox = () => {
    const sarcFilter = useSelector(selectFilterName);
    const dispatch = useDispatch();
  
    const handleChange = (event) => {
  const value = event.target.value.trim();
  const action = setFilterName(value);
  dispatch(action);
    };
  
    return (
      <div className={css.searchBoxContainer}>
        <p>Find contacts by name</p>
        <input
          className={css.formInput}
          type="text"
          value={sarcFilter}
          onChange={handleChange}
          placeholder="Search Contacts..."
        />
      </div>
    );
  };
  
  export default SearchBox;