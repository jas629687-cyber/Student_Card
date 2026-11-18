
import { Bell, Search } from "lucide-react";

function Navbar() {
  return (
    <header className="navbar">
      <div>
        <h2>Student Management</h2>
        <p>Manage your campus identity cards</p>
      </div>

      <div className="nav-right">
        <button className="icon-button" aria-label="Notifications">
          <Bell size={20} />
        </button>

        <div className="admin-profile">
          <div className="admin-avatar">A</div>
          <div>
            <strong>Admin</strong>
            <small>Administrator</small>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
