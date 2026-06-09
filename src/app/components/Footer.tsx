import { Leaf, Phone, Mail, MapPin, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#121a14",
        fontFamily: "'DM Sans', sans-serif",
        padding: "3.5rem 1.5rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
            gap: "3rem",
            marginBottom: "3rem",
          }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  backgroundColor: "#e9a11a",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Leaf size={16} color="#1c2b1e" />
              </div>
              <span
                style={{
                  fontFamily: "'Fraunces', serif",
                  color: "#ffffff",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                }}
              >
                AnnaMitra
              </span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.75, fontSize: "0.9rem", maxWidth: "260px", marginBottom: "1.25rem" }}>
              Rescuing surplus food and redirecting it to communities in need across
              India — one meal at a time.
            </p>
            <div style={{ display: "flex", gap: "0.625rem" }}>
              {["📘", "📷", "🐦", "🔗"].map((emoji, i) => (
                <div
                  key={i}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.07)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1rem",
                    cursor: "pointer",
                  }}
                >
                  {emoji}
                </div>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#e9a11a",
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Platform
            </h4>
            {["Donate Food", "Volunteer Dashboard", "Track a Request", "Partner with Us", "Privacy Policy"].map((item) => (
              <div
                key={item}
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "0.9rem",
                  marginBottom: "0.625rem",
                  cursor: "pointer",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
              >
                {item}
              </div>
            ))}
          </div>

          {/* About */}
          <div>
            <h4
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#e9a11a",
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              About
            </h4>
            {["Our Mission", "Impact Reports", "News & Stories", "FAQs", "Careers"].map((item) => (
              <div
                key={item}
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "0.9rem",
                  marginBottom: "0.625rem",
                  cursor: "pointer",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#e9a11a",
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Contact Us
            </h4>
            {[
              { icon: Phone, text: "+91 9010735719" },
              { icon: Mail, text: "help@annamitra.org" },
              { icon: MapPin, text: "MITS college, Angallu — 516 325" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.625rem",
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "0.9rem",
                  marginBottom: "0.875rem",
                }}
              >
                <Icon size={14} color="#e9a11a" style={{ marginTop: "3px", flexShrink: 0 }} />
                {text}
              </div>
            ))}
            <div
              style={{
                marginTop: "1.25rem",
                backgroundColor: "rgba(233,161,26,0.12)",
                borderRadius: "0.625rem",
                padding: "0.75rem 1rem",
                fontSize: "0.8125rem",
                color: "#e9a11a",
                fontWeight: 500,
              }}
            >
              🕐 Helpline: Mon–Sat, 8 AM – 8 PM
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8125rem" }}>
            © 2026 AnnaMitra Food Rescue Network. Registered NGO — Reg. No. MH/2021/0143/R
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
              color: "rgba(255,255,255,0.3)",
              fontSize: "0.8125rem",
            }}
          >
            Made with <Heart size={12} color="#e9a11a" style={{ fill: "#e9a11a" }} /> for a hunger-free India
          </div>
        </div>
      </div>
    </footer>
  );
}
