
function Sidebar({ activePage, setActivePage }) {
  const menuItems = [
    "Dashboard",
    "Students",
    "ID Cards",
    "Attendance",
    "Settings"
  ];

  return (
    <aside className="sidebar">
      <div className="brand">
        <span>🎓</span>
        <h2>UniCard</h2>
      </div>

      <p className="menu-label">MAIN MENU</p>

      <nav>
        {menuItems.map((item) => (
          <button
            key={item}
            className={`menu-item ${
              activePage === item ? "active" : ""
            }`}
            onClick={() => setActivePage(item)}
          >
            {item}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <p>UniCard Management</p>
        <small>Version 2.0</small>
      </div>
    </aside>
  );
}

export default Sidebar;
