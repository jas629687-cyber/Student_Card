function StudentProfile({ student }) {
  return (
    <div className="student-profile">
      <img src={student.photo} alt="Student" />

      <h2>{student.name}</h2>
      <p>{student.department}</p>
      <p>Student ID: {student.id}</p>
      <p>Year: {student.year}</p>
    </div>
  );
}

export default StudentProfile;