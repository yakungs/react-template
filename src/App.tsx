import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/sidebar/SideBar";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SideBar />}>
            <Route path="profile" element={<ProfileScreen />} />
            <Route path="tasks" element={<ProfileScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
