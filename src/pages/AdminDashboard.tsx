export default function AdminDashboard() {
  const cardStyle = {
    background: "#FFFFFF",
    padding: "25px",
    borderRadius: "18px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
  };

  return (
    <div
      style={{
        padding: "40px",
        background: "#FAFAFC",
        minHeight: "100vh",
      }}
    >
      <h1>Admin Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div style={cardStyle}>
          <h2>520</h2>
          <p>Students</p>
        </div>

        <div style={cardStyle}>
          <h2>25</h2>
          <p>Courses</p>
        </div>

        <div style={cardStyle}>
          <h2>15</h2>
          <p>Faculty</p>
        </div>

        <div style={cardStyle}>
          <h2>₹4.2L</h2>
          <p>Revenue</p>
        </div>
      </div>

      <h2 style={{ marginTop: "50px" }}>
        Recent Activity
      </h2>

      <ul>
        <li>New student registered</li>
        <li>Certificate generated</li>
        <li>Assignment submitted</li>
        <li>Course published</li>
      </ul>
    </div>
  );
}