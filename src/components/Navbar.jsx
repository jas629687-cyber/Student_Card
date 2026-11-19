
import { Bell, Search, Menu } from "lucide-react";

function Navbar({ activePage }) {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="breadcrumb">
          <span>UniCard</span>
          <span>/</span>
          <strong>{activePage}</strong>
        </div>

        <h2>{activePage}</h2>
        <p>Welcome back! Here's your student management overview.</p>
      </div>

      <div className="navbar-right">
        <div className="navbar-search">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search anything..."
          />
        </div>

        <button className="notification-btn" title="Notifications">
          <Bell size={21} />
          <span className="notification-dot"></span>
        </button>

        <div className="admin-profile">
          <div className="admin-avatar">A</div>
          <div className="admin-info">
            <strong>Admin User</strong>
            <span>Administrator</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
