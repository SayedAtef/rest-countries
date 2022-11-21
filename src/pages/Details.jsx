import { useNavigate } from "react-router-dom";
import CountryDetail from "../components/CountryDetail";
import Topbar from "../components/Topbar";
import BackButton from "../components/BackButton";

const Details = () => {
  const navigate = useNavigate();
  return (
    <>
      <Topbar />
      <div className="px-4 dark:bg-[#202c37] h-screen">
        <div className="lg:hidden">
          <BackButton click={() => navigate("/")} />
        </div>
        <CountryDetail />
      </div>
    </>
  );
};

export default Details;
