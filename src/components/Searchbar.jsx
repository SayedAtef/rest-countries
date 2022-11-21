import { useState, useContext } from "react";
import DataContext from "../context/dataContext";
import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";
import BackButton from "./BackButton";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [back, setBack] = useState(false);
  const { data, dispatch } = useContext(DataContext);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_DATA", payload: { ...data, search: search } });
    setBack(true);
  };

  const handleBack = () => {
    setBack(false);
    setSearch("");
    dispatch({ type: "SET_DATA", payload: { ...data, search: "" } });
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    // dispatch({
    //   type: "SET_DATA",
    //   payload: { ...data, search: e.target.value },
    // });
  };

  return (
    <IconContext.Provider value={{ color: "gray" }}>
      <div className="lg:w-96 ">
        <form
          onSubmit={handleClick}
          className="bg-white mx-auto mt-6 w-full rounded-md shadow-md flex justify-between dark:bg-[#2b3945] "
        >
          <button>
            <FaSearch className="w-10 self-center mx-5 opacity-70 cursor-pointer" />
          </button>
          <input
            className="p-3 w-full text-sm dark:bg-[#2b3945] rounded-md "
            type="text"
            placeholder="Search for a country..."
            value={search}
            onChange={handleChange}
          />
        </form>
        {back && <BackButton click={handleBack} />}
      </div>
    </IconContext.Provider>
  );
};

export default Searchbar;
