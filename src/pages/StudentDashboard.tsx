export default function StudentDashboard() {
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
      <h1>Student Dashboard</h1>

      <p>Welcome back, Student.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div style={cardStyle}>
          <h2>3</h2>
          <p>Enrolled Courses</p>
        </div>

        <div style={cardStyle}>
          <h2>5</h2>
          <p>Assignments Pending</p>
        </div>

        <div style={cardStyle}>
          <h2>2</h2>
          <p>Certificates Earned</p>
        </div>

        <div style={cardStyle}>
          <h2>78%</h2>
          <p>Overall Progress</p>
        </div>
      </div>

      <h2 style={{ marginTop: "50px" }}>
        My Courses
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "20px",
        }}
      >
        <div style={cardStyle}>
          <h3>Numerical Methods using MATLAB</h3>
          <p>Progress: 75%</p>
        </div>

        <div style={cardStyle}>
          <h3>Hydrology Fundamentals</h3>
          <p>Progress: 40%</p>
        </div>

        <div style={cardStyle}>
          <h3>GIS Applications</h3>
          <p>Progress: 90%</p>
        </div>
      </div>
    </div>
  );
}