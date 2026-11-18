
import { useState } from "react";

import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import StatsCard from "../components/StatsCard.jsx";
import SearchBar from "../components/SearchBar.jsx";
import StudentCard from "../components/StudentCard.jsx";

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

  // Count active students
  const activeStudents = students.filter(
    (student) => student.status === "Active"
  ).length;

  // Search and department filtering
  const filteredStudents = students.filter((student) => {

    const matchesSearch =
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.id.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment =
      department === "All" ||
      student.department === department;

    return matchesSearch && matchesDepartment;
  });

  const departments = [
    ...new Set(students.map((student) => student.department))
  ];

  return (
    <div className="app-layout">

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="main-content">

        <Navbar />

        <section className="dashboard-content">

          {/* Welcome section */}

          <div className="welcome-section">
            <div>
              <h1>Welcome to UniCard 👋</h1>
              <p>Manage your student identity cards easily.</p>
            </div>

            <span className="date-label">
              ACADEMIC YEAR 2026-27
            </span>
          </div>

          {/* Statistics */}

          <div className="stats-grid">

            <StatsCard
              title="Total Students"
              value={students.length}
              icon="👨‍🎓"
              color="blue"
              description="Registered students"
            />

            <StatsCard
              title="Active Students"
              value={activeStudents}
              icon="✅"
              color="green"
              description="Currently active"
            />

            <StatsCard
              title="ID Cards"
              value={students.length}
              icon="🪪"
              color="purple"
              description="Cards generated"
            />

            <StatsCard
              title="Departments"
              value={departments.length}
              icon="🏫"
              color="orange"
              description="Departments available"
            />

          </div>

          {/* Student section */}

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

            {/* Search and filter */}

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

                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}

              </select>

            </div>

            {/* Student cards */}

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
                  <h3>🔍 No Students Found</h3>
                  <p>Try searching with another name or ID.</p>
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
