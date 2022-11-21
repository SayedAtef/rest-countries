import Axios from "axios";

export const getAll = () => () =>
  fetch(`https://restcountries.com/v3.1/all`).then((res) => res.json());

export const getRegion = (region) => () =>
  fetch(`https://restcountries.com/v3.1/region/${region}`).then((res) =>
    res.json()
  );

// export const getSearch = (name) => () =>
//   fetch(`https://restcountries.com/v3.1/name/${name}`).then((res) =>
//     res.json()
//   );

export const getSearch = (name) => () => {
  return Axios.get(`https://restcountries.com/v3.1/name/${name}`).then(
    (res) => res.data
  );
};

export const getByCode = (code) => () => {
  return Axios.get(`https://restcountries.com/v3.1/alpha?codes=${code}`).then(
    (res) => res.data
  );
};
