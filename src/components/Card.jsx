const Card = ({ imgSrc, title, population, region, capital }) => {
  return (
    <div className="w-[90%] lg:w-[85%] mx-auto bg-white mt-5 shadow-md rounded-md pb-8 dark:bg-[#2b3945] dark:text-white">
      <img
        src={imgSrc}
        className="rounded-t-md object-cover aspect-[3/2]"
        alt={title}
      />
      <div className="text-left ml-5">
        <h1 className="font-bold my-5 text-lg">{title}</h1>
        <p className=" mb-3 font-medium lg:text-sm">
          <span className="font-bold">Population: </span>
          {new Intl.NumberFormat().format(parseInt(population))}
        </p>
        <p className="mb-3 font-medium lg:text-sm">
          <span className="font-bold">Region: </span>
          {region}
        </p>
        <p className="mb-3 font-medium lg:text-sm">
          <span className="font-bold">Capital: </span>
          {capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
