import Topbar from "../components/Topbar";
import Searchbar from "../components/Searchbar";
import Dropdown from "../components/Dropdown";
import Main from "../components/Main";

const Home = () => {
  return (
    <div className="bg-[#fafafa] h-screen dark:bg-[#202c37]">
      <Topbar />
      <div className="mx-4">
        <div className="lg:flex lg:justify-between">
          <Searchbar />
          <Dropdown />
        </div>
        <Main />
      </div>
    </div>
  );
};

export default Home;
