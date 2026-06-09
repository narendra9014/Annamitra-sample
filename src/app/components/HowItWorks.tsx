import { ClipboardList, Bike, HandHeart } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Submit a Donation",
    description:
      "Restaurants, caterers, and households fill out our quick form with food details, quantity, and pickup location.",
    color: "#2d6a4f",
  },
  {
    icon: Bike,
    step: "02",
    title: "Volunteer Picks Up",
    description:
      "A nearby verified volunteer receives the alert, confirms pickup, and collects the food within the hour.",
    color: "#e9a11a",
  },
  {
    icon: HandHeart,
    step: "03",
    title: "Meals Reach the Needy",
    description:
      "Food is delivered to partner shelters, orphanages, and communities — fresh, safe, and with dignity.",
    color: "#1e5a3f",
  },
];

export function HowItWorks() {
  return (
    <section
      style={{
        padding: "5rem 1.5rem",
        backgroundColor: "#faf7f2",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span
            style={{
              display: "inline-block",
              backgroundColor: "#eef5f0",
              color: "#2d6a4f",
              padding: "0.3rem 1rem",
              borderRadius: "2rem",
              fontSize: "0.8125rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "1rem",
              fontFamily: "'DM Mono', monospace",
            }}
          >
            Simple Process
          </span>
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              color: "#1c2b1e",
              marginBottom: "0.75rem",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 700,
            }}
          >
            How AnnaMitra Works
          </h2>
          <p
            style={{
              color: "#6b7c6e",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
              fontSize: "1.0625rem",
            }}
          >
            Three simple steps connect food donors with hungry communities — no waste,
            no bureaucracy, just timely action.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
          }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {steps.map(({ icon: Icon, step, title, description, color }) => (
            <div
              key={step}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "1.25rem",
                padding: "2rem",
                border: "1px solid rgba(45,106,79,0.1)",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 12px 36px rgba(45,106,79,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "-20px",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  backgroundColor: color,
                  opacity: 0.06,
                }}
              />
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  color: color,
                  letterSpacing: "0.08em",
                  marginBottom: "1.25rem",
                  opacity: 0.8,
                }}
              >
                STEP {step}
              </div>
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "0.875rem",
                  backgroundColor: `${color}18`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                }}
              >
                <Icon size={24} color={color} />
              </div>
              <h3
                style={{
                  fontFamily: "'Fraunces', serif",
                  color: "#1c2b1e",
                  marginBottom: "0.75rem",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                }}
              >
                {title}
              </h3>
              <p style={{ color: "#6b7c6e", lineHeight: 1.7, fontSize: "0.9375rem" }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
