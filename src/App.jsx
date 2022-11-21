import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/dataContext";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <DataProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:slug" element={<Details />} />
          </Routes>
        </Router>
      </DataProvider>
    </QueryClientProvider>
  );
}

export default App;
