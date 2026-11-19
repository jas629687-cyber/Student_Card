
import { useEffect, useState } from "react";
import {
  Users,
  UserCheck,
  UserX,
  Plus,
  Search,
  Pencil,
  Trash2,
  X,
} from "lucide-react";

const initialStudents = [
  {
    id: "UC001",
    name: "Arun Kumar",
    email: "arun@gmail.com",
    department: "CSE",
    year: "3rd Year",
    status: "Active",
  },
  {
    id: "UC002",
    name: "Priya Sharma",
    email: "priya@gmail.com",
    department: "AIML",
    year: "2nd Year",
    status: "Active",
  },
  {
    id: "UC003",
    name: "Rahul Kumar",
    email: "rahul@gmail.com",
    department: "IT",
    year: "3rd Year",
    status: "Inactive",
  },
];

function Dashboard() {
  const [students, setStudents] = useState(() => {
    try {
      const saved = localStorage.getItem("unicard_students");
      return saved ? JSON.parse(saved) : initialStudents;
    } catch {
      return initialStudents;
    }
  });

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const emptyForm = {
    name: "",
    email: "",
    department: "CSE",
    year: "1st Year",
    status: "Active",
  };

  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    localStorage.setItem("unicard_students", JSON.stringify(students));
  }, [students]);

  const activeCount = students.filter(
    (student) => student.status === "Active"
  ).length;

  const inactiveCount = students.length - activeCount;

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.id.toLowerCase().includes(search.toLowerCase()) ||
      student.email.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment =
      department === "All" || student.department === department;

    return matchesSearch && matchesDepartment;
  });

  function openAddForm() {
    setEditingId(null);
    setForm(emptyForm);
    setShowForm(true);
  }

  function openEditForm(student) {
    setEditingId(student.id);
    setForm({
      name: student.name,
      email: student.email,
      department: student.department,
      year: student.year,
      status: student.status,
    });
    setShowForm(true);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (editingId) {
      setStudents((current) =>
        current.map((student) =>
          student.id === editingId
            ? { ...student, ...form }
            : student
        )
      );
    } else {
      const newStudent = {
        id: `UC${Date.now().toString().slice(-6)}`,
        ...form,
      };

      setStudents((current) => [newStudent, ...current]);
    }

    setShowForm(false);
    setForm(emptyForm);
    setEditingId(null);
  }

  function deleteStudent(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (confirmed) {
      setStudents((current) =>
        current.filter((student) => student.id !== id)
      );
    }
  }

  return (
    <div className="dashboard">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon blue"><Users /></div>
          <div>
            <p>Total Students</p>
            <h2>{students.length}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green"><UserCheck /></div>
          <div>
            <p>Active Students</p>
            <h2>{activeCount}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon red"><UserX /></div>
          <div>
            <p>Inactive Students</p>
            <h2>{inactiveCount}</h2>
          </div>
        </div>
      </div>

      <section className="student-section">
        <div className="section-heading">
          <div>
            <h2>Student Management</h2>
            <p>Manage and organize your student records.</p>
          </div>

          <button className="add-btn" onClick={openAddForm}>
            <Plus size={18} />
            Add Student
          </button>
        </div>

        <div className="student-toolbar">
          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search name, ID or email..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <select
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
          >
            <option value="All">All Departments</option>
            <option value="CSE">CSE</option>
            <option value="AIML">AIML</option>
            <option value="IT">IT</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
          </select>
        </div>

        <div className="table-wrapper">
          <table className="student-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Student ID</th>
                <th>Department</th>
                <th>Year</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>
                    <div className="student-name-cell">
                      <div className="student-avatar">
                        {student.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <strong>{student.name}</strong>
                        <span>{student.email}</span>
                      </div>
                    </div>
                  </td>

                  <td>{student.id}</td>
                  <td>{student.department}</td>
                  <td>{student.year}</td>

                  <td>
                    <span
                      className={`status-badge ${
                        student.status === "Active"
                          ? "status-active"
                          : "status-inactive"
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>

                  <td>
                    <div className="action-buttons">
                      <button
                        className="edit-btn"
                        title="Edit student"
                        onClick={() => openEditForm(student)}
                      >
                        <Pencil size={17} />
                      </button>

                      <button
                        className="delete-btn"
                        title="Delete student"
                        onClick={() => deleteStudent(student.id)}
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredStudents.length === 0 && (
                <tr>
                  <td colSpan="6" className="empty-message">
                    No students found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="table-footer">
          Showing {filteredStudents.length} of {students.length} students
        </p>
      </section>

      {showForm && (
        <div className="modal-overlay">
          <div className="student-modal">
            <div className="modal-heading">
              <div>
                <h2>{editingId ? "Edit Student" : "Add New Student"}</h2>
                <p>Enter the student information below.</p>
              </div>

              <button
                className="close-btn"
                onClick={() => setShowForm(false)}
              >
                <X />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <label>Full Name</label>
              <input
                required
                value={form.name}
                placeholder="Enter student name"
                onChange={(event) =>
                  setForm({ ...form, name: event.target.value })
                }
              />

              <label>Email Address</label>
              <input
                required
                type="email"
                value={form.email}
                placeholder="Enter email address"
                onChange={(event) =>
                  setForm({ ...form, email: event.target.value })
                }
              />

              <label>Department</label>
              <select
                value={form.department}
                onChange={(event) =>
                  setForm({ ...form, department: event.target.value })
                }
              >
                <option>CSE</option>
                <option>AIML</option>
                <option>IT</option>
                <option>ECE</option>
                <option>EEE</option>
              </select>

              <label>Academic Year</label>
              <select
                value={form.year}
                onChange={(event) =>
                  setForm({ ...form, year: event.target.value })
                }
              >
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>4th Year</option>
              </select>

              <label>Status</label>
              <select
                value={form.status}
                onChange={(event) =>
                  setForm({ ...form, status: event.target.value })
                }
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>

              <div className="modal-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>

                <button type="submit" className="add-btn">
                  {editingId ? "Save Changes" : "Add Student"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
