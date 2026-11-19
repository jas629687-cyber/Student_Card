
import {
  LayoutDashboard,
  Users,
  CreditCard,
  CalendarCheck,
  Settings,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useState } from "react";

function Sidebar({ activePage, setActivePage }) {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Students", icon: Users },
    { name: "ID Cards", icon: CreditCard },
    { name: "Attendance", icon: CalendarCheck },
    { name: "Settings", icon: Settings },
  ];

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-brand">
        <div className="brand-icon">
          <GraduationCap size={26} />
        </div>

        {!collapsed && (
          <div>
            <h2>UniCard</h2>
            <span>Student Management</span>
          </div>
        )}
      </div>

      <button
        className="collapse-btn"
        onClick={() => setCollapsed(!collapsed)}
        title="Toggle sidebar"
      >
        {collapsed ? <ChevronRight /> : <ChevronLeft />}
      </button>

      <p className="menu-label">
        {!collapsed && "MAIN MENU"}
      </p>

      <nav className="sidebar-menu">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className={`menu-item ${
                activePage === item.name ? "active" : ""
              }`}
              onClick={() => setActivePage(item.name)}
              title={collapsed ? item.name : ""}
            >
              <Icon size={20} />
              {!collapsed && <span>{item.name}</span>}
            </button>
          );
        })}
      </nav>

      {!collapsed && (
        <div className="sidebar-footer">
          <div className="footer-avatar">A</div>
          <div>
            <strong>Admin User</strong>
            <span>Administrator</span>
          </div>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
