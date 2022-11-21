import { useEffect, useState } from "react";
import Axios from "axios";
import { useQuery } from "react-query";
import { getByCode } from "../fetchers";

const CountryButton = ({ code }) => {
  // const { data, isLoading, refetch } = useQuery("code", getByCode(code), {
  //   enabled: false,
  // });

  // useEffect(() => {
  //   refetch();
  // }, [code]);

  // console.log(data);

  // if (isLoading) return <h1>Loading ...</h1>;
  const [dataC, setDataC] = useState([]);

  useEffect(() => {
    async function fetchCountry() {
      Axios.get(`https://restcountries.com/v3.1/alpha?codes=${code}`).then(
        (res) => setDataC(res.data)
      );
    }
    fetchCountry();
  }, [code]);

  return (
    <button className="py-2 bg-white flex justify-center gap-3 w-24 mt-5 shadow-md font-semibold dark:bg-[#2b3945] ">
      {dataC && dataC[0]?.name?.common}
    </button>
  );
};

export default CountryButton;
