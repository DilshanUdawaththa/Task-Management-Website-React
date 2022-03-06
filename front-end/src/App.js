import { BrowserRouter, Routes, Route } from "react-router-dom";

import Tasks from "./components/tasks/Tasks";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path="/" element={<Tasks/>}/>
          <Route path="signin" element={<SignIn/>}/>
          <Route path="signup" element={<SignUp/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
