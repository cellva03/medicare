import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Layout from "./layouts/Layout";
import Mapping from "./pages/mapping/Mapping";

const AppRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/mapping",
    element: <Mapping />,
  },
];

const App = () => {
  return (
    <Router>
      <Routes>
        {AppRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<Layout>{route.element}</Layout>}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
