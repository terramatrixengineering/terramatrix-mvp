export default function Home() {
  const cardStyle = {
    background: "#FFFFFF",
    borderRadius: "20px",
    padding: "30px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  };

  return (
    <div>
      {/* Hero */}

      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
          background:
            "linear-gradient(180deg,#F8FAFF 0%, #FDFDFF 100%)",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            marginBottom: "10px",
            color: "#2E3A59",
          }}
        >
          TerraMatrix Academy MVP
        </h1>

        <p
          style={{
            fontSize: "28px",
            color: "#6B7280",
          }}
        >
          Learn. Build. Transform.
        </p>

        <p
          style={{
            maxWidth: "700px",
            margin: "30px auto",
            color: "#64748B",
            fontSize: "18px",
            lineHeight: "1.8",
          }}
        >
          Professional learning platform for engineers,
          researchers, students and industry professionals.
        </p>

        <button
          style={{
            background: "#7C8CF8",
            color: "white",
            border: "none",
            padding: "16px 36px",
            borderRadius: "14px",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          Start Learning
        </button>
      </section>

      {/* Stats */}

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "25px",
          padding: "50px",
          maxWidth: "1400px",
          margin: "auto",
        }}
      >
        <div style={cardStyle}>
          <h2>25+</h2>
          <p>Courses</p>
        </div>

        <div style={cardStyle}>
          <h2>500+</h2>
          <p>Students</p>
        </div>

        <div style={cardStyle}>
          <h2>15+</h2>
          <p>Faculty</p>
        </div>

        <div style={cardStyle}>
          <h2>100%</h2>
          <p>Digital Learning</p>
        </div>
      </section>

      {/* Features */}

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "30px",
          padding: "20px 50px 80px",
          maxWidth: "1400px",
          margin: "auto",
        }}
      >
        <div style={cardStyle}>
          <h3>📚 Courses</h3>
          <p>
            Structured engineering and technology programs.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>📝 Assignments</h3>
          <p>
            Online submission and evaluation workflow.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>🎓 Certificates</h3>
          <p>
            Auto-generated completion certificates.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>📊 Analytics</h3>
          <p>
            Track progress and learning performance.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>💻 MATLAB Training</h3>
          <p>
            Numerical methods and engineering computing.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>🌍 Civil Engineering</h3>
          <p>
            Hydrology, GIS, structures and transportation.
          </p>
        </div>
      </section>
    </div>
  );
}