import { useEffect, useState } from "react";
import { WiMoonWaningCrescent3 } from "react-icons/wi";
import { IconContext } from "react-icons";

const Topbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const switcher = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <IconContext.Provider
      value={{ color: theme === "dark" ? "white" : "black" }}
    >
      <header className="flex justify-between py-8 shadow-md px-4 bg-white dark:bg-[#2b3945] dark:text-white">
        <p className="font-extrabold">Where in the world?</p>
        <button
          onClick={switcher}
          className="cursor-pointer flex justify-center"
        >
          <div className="mt-[2px] scale-110 -rotate-[30deg] mr-1">
            <WiMoonWaningCrescent3 />
          </div>
          <p className="font-medium">Dark Mode</p>
        </button>
      </header>
    </IconContext.Provider>
  );
};

export default Topbar;
