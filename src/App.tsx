import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/sidebar/SideBar";
import ProfileScreen from "./screens/Profile/ProfileScreen";
import LoginScreen from "./screens/Authentication/LoginScreen";
import { ThemeProvider } from "@mui/material";
import theme from "./assets/theme";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<LoginScreen />} />
            <Route path="/" element={<SideBar />}>
              <Route path="profile" element={<ProfileScreen />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
