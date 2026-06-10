import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{
      minHeight: "80vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "40px 24px",
      paddingTop: "120px",
    }}>
      <div>
        <div style={{ fontSize: "5rem", marginBottom: "16px" }}>🧶</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", color: "#3D3530", margin: "0 0 16px" }}>
          Oops! That page unravelled.
        </h1>
        <p style={{ color: "#8A7F7A", fontSize: "1rem", lineHeight: 1.7, marginBottom: "32px", maxWidth: "400px" }}>
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to something beautiful.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" style={{
            backgroundColor: "#3D3530", color: "#FFF9F5",
            padding: "12px 28px", borderRadius: "50px", textDecoration: "none", fontWeight: 700,
          }}>
            Go Home
          </Link>
          <Link href="/products" style={{
            backgroundColor: "#A8B5A0", color: "#fff",
            padding: "12px 28px", borderRadius: "50px", textDecoration: "none", fontWeight: 700,
          }}>
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
