import { BrowserRouter, Route, Routes } from "react-router-dom";
import Adduser from "./pages/Adduser";
import Userlist from "./pages/UserList";

function App() {
  return (
    <div>
      <h1>CRUD with context an using multiple image</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Userlist />} />
          <Route path="/adduser" element={<Adduser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
