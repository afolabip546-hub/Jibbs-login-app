export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000",
        color: "#fff",
        padding: "24px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          padding: "32px",
          border: "1px solid #333",
          borderRadius: "16px",
          background: "#111",
        }}
      >
        <h1 style={{ fontSize: "32px", marginBottom: "8px" }}>
          Jibbs
        </h1>

        <p style={{ color: "#aaa", marginBottom: "28px" }}>
          Sign in to your account
        </p>

        <form>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "20px",
              borderRadius: "8px",
              border: "1px solid #444",
              background: "#000",
              color: "#fff",
            }}
          />

          <label
            htmlFor="password"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            placeholder="••••••••"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "20px",
              borderRadius: "8px",
              border: "1px solid #444",
              background: "#000",
              color: "#fff",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "13px",
              borderRadius: "8px",
              border: "none",
              background: "#fff",
              color: "#000",
              fontWeight: "bold",
            }}
          >
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
          }
