
import { useState } from "react";
import {
  Users,
  UserCheck,
  CreditCard,
  GraduationCap
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import SearchBar from "../components/Searchbar";
import StudentCard from "../components/StudentCard";

function Dashboard() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const [students] = useState([
    {
      name: "Jasmine V",
      id: "AIML001",
      department: "CSE - AI & ML",
      year: "III Year",
      status: "Active",
      photo: "https://i.pravatar.cc/150?img=47"
    },
    {
      name: "Harini",
      id: "AIML002",
      department: "CSE - AI & ML",
      year: "III Year",
      status: "Active",
      photo: "https://i.pravatar.cc/150?img=44"
    },
    {
      name: "Priya",
      id: "CSE003",
      department: "CSE",
      year: "II Year",
      status: "Active",
      photo: "https://i.pravatar.cc/150?img=45"
    },
    {
      name: "Rahul",
      id: "IT004",
      department: "IT",
      year: "III Year",
      status: "Inactive",
      photo: "https://i.pravatar.cc/150?img=12"
    }
  ]);

  const activeStudents = students.filter(
    (student) => student.status === "Active"
  ).length;

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.id.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment =
      department === "All" ||
      student.department === department;

    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="app-layout">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="main-content">
        <Navbar />

        <section className="dashboard-content">
          <div className="welcome-section">
            <div>
              <h1>Welcome to UniCard 👋</h1>
              <p>Here's your student management overview.</p>
            </div>

            <span className="date-label">ACADEMIC YEAR 2026–27</span>
          </div>

          <div className="stats-grid">
            <StatsCard
              title="Total Students"
              value={students.length}
              icon={Users}
              color="blue"
              description="Registered students"
            />

            <StatsCard
              title="Active Students"
              value={activeStudents}
              icon={UserCheck}
              color="green"
              description="Currently active"
            />

            <StatsCard
              title="ID Cards"
              value={students.length}
              icon={CreditCard}
              color="purple"
              description="Student cards created"
            />

            <StatsCard
              title="Departments"
              value={new Set(students.map(s => s.department)).size}
              icon={GraduationCap}
              color="orange"
              description="Departments represented"
            />
          </div>

          <section className="students-section">
            <div className="section-heading">
              <div>
                <h2>Student ID Cards</h2>
                <p>View and manage student identity cards.</p>
              </div>

              <span className="student-count">
                {filteredStudents.length} Students
              </span>
            </div>

            <div className="filter-row">
              <SearchBar
                search={search}
                setSearch={setSearch}
              />

              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="All">All Departments</option>
                <option value="CSE - AI & ML">CSE - AI & ML</option>
                <option value="CSE">CSE</option>
                <option value="IT">IT</option>
              </select>
            </div>

            <div className="card-container">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <StudentCard
                    key={student.id}
                    student={student}
                  />
                ))
              ) : (
                <div className="empty-state">
                  <Users size={40} />
                  <h3>No students found</h3>
                  <p>Try another name, ID or department.</p>
                </div>
              )}
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
