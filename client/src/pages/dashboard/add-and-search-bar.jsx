import searchIcon from "../../assets/search-icon.svg";
import { useNavigate } from "react-router-dom";

function AddAndSearchBar({ query, setQuery }) {
  // VARIABLES:
  const navigate = useNavigate();

  // RENDER:
  return (
    <>
      <div className="add-and-search-bar">
        <button
          className="btn-large"
          onClick={() => {
            navigate("/create-recipe");
          }}
        >
          Add recipe
        </button>
        <form className="search-bar">
          <img src={searchIcon} alt="Magnifying glass icon" />
          <input
            type="search"
            placeholder="Search here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></input>
        </form>
      </div>
    </>
  );
}

export default AddAndSearchBar;
