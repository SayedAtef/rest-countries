import { useState, useContext } from "react";
import DataContext from "../context/dataContext";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

const Dropdown = () => {
  const [open, setOpen] = useState(false);

  const dataApi = useContext(DataContext).data;
  const { dispatch } = useContext(DataContext);

  const handleClick = (item) => {
    dispatch({ type: "SET_DATA", payload: { ...dataApi, select: item } });
    setOpen(!open);
  };

  return (
    <div className="w-64 mt-10 relative lg:mt-6">
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer font-semibold bg-white rounded-md shadow-md p-5 dark:bg-[#2b3945] dark:text-white"
      >
        {dataApi.select ? dataApi.select : "Filter by Region"}
      </div>
      {open && (
        <ul className="mt-1 bg-white w-full shadow-md rounded-md py-5 absolute z-50 top-16">
          {regions.map((item, i) => (
            <li key={i} className="pl-5 font-semibold pt-3">
              <button onClick={() => handleClick(item)}>{item}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
