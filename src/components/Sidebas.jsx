
import {
  LayoutDashboard,
  Users,
  CreditCard,
  CalendarCheck,
  Settings,
  GraduationCap
} from "lucide-react";

function Sidebar({ activePage, setActivePage }) {
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Students", icon: Users },
    { name: "ID Cards", icon: CreditCard },
    { name: "Attendance", icon: CalendarCheck },
    { name: "Settings", icon: Settings }
  ];

  return (
    <aside className="sidebar">
      <div className="brand">
        <GraduationCap size={32} />
        <h2>UniCard</h2>
      </div>

      <p className="menu-label">MAIN MENU</p>

      {menuItems.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.name}
            className={`menu-item ${
              activePage === item.name ? "active" : ""
            }`}
            onClick={() => setActivePage(item.name)}
          >
            <Icon size={19} />
            {item.name}
          </button>
        );
      })}

      <div className="sidebar-footer">
        <p>UniCard Management</p>
        <small>Version 2.0</small>
      </div>
    </aside>
  );
}

export default Sidebar;
