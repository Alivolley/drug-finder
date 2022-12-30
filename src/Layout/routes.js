import ChosenDrug from "../Pages/ChosenDrug/ChosenDrug";
import Home from "../Pages/Home/Home";
import SearchResults from "../Pages/SearchResults/SearchResults";

const routes = [
   { path: "/", element: <Home /> },
   { path: "/search/:word", element: <SearchResults /> },
   { path: "/chosen/:id", element: <ChosenDrug /> },
];

export default routes;
