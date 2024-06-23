export default function StudentList({ students }) {
  return (
    <div className="mb-4">
      <h2 className="text-xl mb-2">Students</h2>
      <ul className="list-disc pl-5 mb-4">
        {students.map((student) => (
          <li key={student.id}>{student.nim} - {student.name}</li>
        ))}
      </ul>
    </div>
  );
}
