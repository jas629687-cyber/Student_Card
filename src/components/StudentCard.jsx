import CardHeader from "./CardHeader";
import StudentProfile from "./StudentProfile";
import QRCode from "./QRCode";
import StatusBadge from "./StatusBadge";

function StudentCard({ student }) {
  return (
    <div className="student-card">
      <CardHeader />

      <StudentProfile student={student} />

      <QRCode studentId={student.id} />

      <div className="card-footer">
        <p>Attendance Status</p>
        <StatusBadge status={student.status} />
      </div>
    </div>
  );
}

export default StudentCard;