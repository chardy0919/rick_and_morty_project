import {createBrowserRouter} from "react-router-dom"
import App from "./App";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CharactersPage from "./pages/CharactersPage";
import CharDetailsPage from "./pages/CharDetailsPage";
import NotFound from "./pages/NotFound";
import FavoritePage from "./pages/FavoritePage";
import ResultsPage from "./pages/ResultsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path:'about/',
        element: <AboutPage />
      },
      {
        path:'characters/',
        element: <CharactersPage />
      },
      {
        path:'charDetails/:id/',
        element: <CharDetailsPage />
      },
      {
        path:'favorites/',
        element: <FavoritePage />
      },
      {
        path:'results/:searchValue/',
        element: <ResultsPage />
      }
    ],
    errorElement: <NotFound />
  },
]);

export default router;