import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Cars from "../../pages/Cars/Cars";
import Favorites from "../../pages/Favorites/Favorites";
import SharedLayout from "../../pages/SharedLayout/SharedLayout";
import NotFound from "../../pages/Not found/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
