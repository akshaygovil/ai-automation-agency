export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0D1B3D 0%, #3E5BA9 100%)",
        color: "#F6F8FA",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "64px", fontWeight: 800, marginBottom: "0.5rem" }}>
        404
      </h1>

      <p style={{ fontSize: "20px", opacity: 0.8, marginBottom: "2rem" }}>
        Looks like you've wandered off the training plan.
      </p>

      <a
        href="/"
        style={{
          background: "linear-gradient(90deg, #D4AF37, #B78A2E)",
          padding: "12px 24px",
          borderRadius: "12px",
          color: "#0D1B3D",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        Go Back Home
      </a>
    </div>
  );
}
