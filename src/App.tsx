import ResponsiveAppBar from "./components/demo";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Products from "./components/Products";
import Pricing from "./components/Pricing";
import Blog from "./components/Blog";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="Products" element={<Products />} />
      <Route path="Pricing" element={<Pricing />} />
      <Route path="Blog" element={<Blog />} />
      {/* <Route path="about" element={<About />} /> */}
    </Route>
  )
);

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />;
    </div>
  );
}
