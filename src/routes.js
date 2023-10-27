import ListingPage from "./pages/ListingPage";
import DetailPage from "./pages/DetailPage";

export const routes = [
    {path:'/', component:ListingPage},
    {path:'/detail/:id', component:DetailPage}
]