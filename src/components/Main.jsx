import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import Card from "./Card";
import DataContext from "../context/dataContext";
import { getRegion, getAll, getSearch } from "../fetchers";

const Main = () => {
  const dataApi = useContext(DataContext).data;

  const navigate = useNavigate();

  const { data, isLoading, refetch, isError } = useQuery(
    "regions",
    dataApi.search
      ? getSearch(dataApi.search)
      : dataApi.select
      ? getRegion(dataApi.select)
      : getAll()
  );

  useEffect(() => {
    refetch();
  }, [dataApi]);

  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>not found</p>;
  return (
    <main className="md:grid lg:grid-cols-4 ">
      {!isError &&
        !isLoading &&
        data?.map((item, i) => (
          <div
            className="w-full cursor-pointer"
            key={i}
            onClick={() => navigate(`/${item.name.common}`)}
          >
            <Card
              imgSrc={item.flags.png}
              title={item.name.common}
              population={item.population}
              region={item.region}
              capital={item.capital}
            />
          </div>
        ))}
    </main>
  );
};

export default Main;
