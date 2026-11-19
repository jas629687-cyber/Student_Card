
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  return (
    <div className="app-container">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="main-content">
        <Navbar activePage={activePage} />

        <div className="page-content">
          {activePage === "Dashboard" && <Dashboard />}
          {activePage === "Students" && <h2>Students Management</h2>}
          {activePage === "ID Cards" && <h2>Digital ID Cards</h2>}
          {activePage === "Attendance" && <h2>Attendance Management</h2>}
          {activePage === "Settings" && <h2>Settings</h2>}
        </div>
      </main>
    </div>
  );
}

export default App;
