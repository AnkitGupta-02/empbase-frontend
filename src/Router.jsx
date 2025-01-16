import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignupForm from "./components/Form/SignupForm";
import LoginForm from "./components/Form/LoginForm";
import PrivateRoute from "./routes/PrivateRoute";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute/>} />
      <Route index element={<MainPage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
    </Routes>
  );
}

export default Router;
