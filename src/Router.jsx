import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignupForm from "./components/Form/SignupForm";
import LoginForm from "./components/Form/LoginForm";

function Router() {
  return (
    <Routes>
     
      <Route path="/*" element={<MainPage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
    </Routes>
  );
}

export default Router;
