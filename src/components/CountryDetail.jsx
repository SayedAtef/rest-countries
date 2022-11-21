import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getSearch } from "../fetchers";
import CountryButton from "./CountryButton";
import BackButton from "./BackButton";

const CountryDetail = () => {
  const url = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery("single", getSearch(url.slug));

  if (isLoading) return <h1>Loading ...</h1>;

  return (
    <div className="pt-20 lg:pt-10 lg:grid lg:grid-cols-2">
      <div className="m-auto lg:m-0">
        <div className="lg:ml-4">
          <BackButton click={() => navigate("/")} />
        </div>
        <img src={data[0]?.flags?.png} className="w-full p-4 lg:mt-7" />
      </div>

      <div className="lg:ml-10  mt-20 dark:text-white">
        <h1 className="mt-8 font-bold text-xl lg:mt-4">
          {data[0]?.name?.common}
        </h1>
        <div className="lg:flex lg:justify-between">
          <div>
            <p className="text-sm font-semibold mt-4">
              Native Name:{"  "}
              <span className="font-medium">
                {Object.values(data[0]?.name?.nativeName)[0]?.common}
              </span>
            </p>
            <p className="text-sm font-semibold mt-4">
              Population:{"  "}
              <span className="font-medium">
                {" "}
                {new Intl.NumberFormat().format(parseInt(data[0]?.population))}
              </span>
            </p>
            <p className="text-sm font-semibold mt-4">
              Region:{"  "}
              <span className="font-medium"> {data[0]?.region}</span>
            </p>
            <p className="text-sm font-semibold mt-4">
              Subregion:{"  "}
              <span className="font-medium"> {data[0]?.subregion}</span>
            </p>
            <p className="text-sm font-semibold mt-4">
              Capital:{"  "}
              <span className="font-medium"> {data[0]?.capital[0]}</span>
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold mt-10 lg:mt-4">
              Top Level Domain:{"  "}
              <span className="font-medium"> {data[0]?.tld[0]}</span>
            </p>
            <p className="text-sm font-semibold mt-4">
              Currencies:{"  "}
              <span className="font-medium">
                {" "}
                {Object.values(data[0]?.currencies)[0]?.name}
              </span>
            </p>
            <p className="text-sm font-semibold mt-4">
              Languages:{"  "}
              <span className="font-medium">
                {" "}
                {JSON.stringify(data[0]?.languages)}
              </span>
            </p>
          </div>
        </div>

        <div className="mt-10 lg:flex lg:justify-start">
          <p className="font-semibold lg:text-sm lg:min-w-fit mr-2">
            Border Countries:{" "}
          </p>
          {!data[0]?.borders ? (
            <p>this country has no borders</p>
          ) : (
            <div className="grid grid-cols-3 mx-auto w-full mb-20 lg:mb-0 lg:-mt-6">
              {data[0]?.borders?.map((item, i) => (
                <div key={i} className="lg:scale-90">
                  <CountryButton code={item} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
