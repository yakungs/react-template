import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/sidebar/SideBar";
import ProfileScreen from "./screens/Profile/ProfileScreen";
import LoginScreen from "./screens/Authentication/LoginScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginScreen />} />
          <Route path="/" element={<SideBar />}>
            <Route path="profile" element={<ProfileScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
