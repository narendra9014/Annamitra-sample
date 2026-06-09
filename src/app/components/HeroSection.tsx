import { ArrowRight, Utensils, Users, MapPin } from "lucide-react";

interface HeroSectionProps {
  onNavigate: (view: string) => void;
}

const stats = [
  { icon: Utensils, value: "3.2L+", label: "Meals Rescued" },
  { icon: Users, value: "840+", label: "Active Volunteers" },
  { icon: MapPin, value: "28", label: "Cities Covered" },
];

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #1c2b1e 0%, #2d6a4f 60%, #1e5a3f 100%)",
        padding: "5rem 1.5rem 4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          backgroundColor: "rgba(233,161,26,0.07)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "-60px",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.04)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
        }}
        className="grid-cols-1 md:grid-cols-2"
      >
        {/* Left: copy */}
        <div>
          <span
            style={{
              display: "inline-block",
              backgroundColor: "rgba(233,161,26,0.18)",
              color: "#e9a11a",
              padding: "0.3rem 1rem",
              borderRadius: "2rem",
              fontSize: "0.8125rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
              fontFamily: "'DM Mono', monospace",
            }}
          >
            Food Rescue Network — India
          </span>

          <h1
            style={{
              fontFamily: "'Fraunces', serif",
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: "1.25rem",
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              fontWeight: 700,
            }}
          >
            No Meal Should{" "}
            <em
              style={{
                color: "#e9a11a",
                fontStyle: "italic",
              }}
            >
              Go to Waste
            </em>{" "}
            While Someone Sleeps Hungry
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.7,
              marginBottom: "2rem",
              maxWidth: "480px",
              fontSize: "1.0625rem",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            AnnaMitra connects surplus food donors — restaurants, caterers, households —
            with verified NGO volunteers who deliver meals to those who need them most.
            Join us in rescuing food and restoring dignity.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button
              onClick={() => onNavigate("donate")}
              style={{
                padding: "0.875rem 2rem",
                borderRadius: "2rem",
                border: "none",
                cursor: "pointer",
                backgroundColor: "#e9a11a",
                color: "#1c2b1e",
                fontWeight: 700,
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "'DM Sans', sans-serif",
                transition: "transform 0.15s, box-shadow 0.15s",
                boxShadow: "0 4px 16px rgba(233,161,26,0.4)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
              }}
            >
              Donate Surplus Food <ArrowRight size={18} />
            </button>
            <button
              onClick={() => onNavigate("volunteer")}
              style={{
                padding: "0.875rem 2rem",
                borderRadius: "2rem",
                border: "2px solid rgba(255,255,255,0.3)",
                cursor: "pointer",
                backgroundColor: "transparent",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "1rem",
                fontFamily: "'DM Sans', sans-serif",
                transition: "border-color 0.15s, background 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.6)";
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.3)";
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
              }}
            >
              Become a Volunteer
            </button>
          </div>
        </div>

        {/* Right: image */}
        <div
          style={{ position: "relative" }}
          className="hidden md:block"
        >
          <div
            style={{
              borderRadius: "1.25rem",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
              aspectRatio: "4/3",
              backgroundColor: "#1e5a3f",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=700&h=525&fit=crop&auto=format"
              alt="Volunteers packing food parcels for donation at a community kitchen"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "-1rem",
              left: "-1rem",
              backgroundColor: "#e9a11a",
              borderRadius: "1rem",
              padding: "1rem 1.25rem",
              boxShadow: "0 8px 24px rgba(233,161,26,0.4)",
            }}
          >
            <div
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#1c2b1e",
              }}
            >
              3.2 Lakh+
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: "#1c2b1e",
                opacity: 0.75,
              }}
            >
              Meals rescued this year
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "3rem auto 0",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: "2.5rem",
        }}
        className="grid-cols-1 sm:grid-cols-3"
      >
        {stats.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "0.75rem",
                backgroundColor: "rgba(233,161,26,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Icon size={22} color="#e9a11a" />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Fraunces', serif",
                  color: "#ffffff",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  lineHeight: 1,
                  marginBottom: "0.25rem",
                }}
              >
                {value}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "0.875rem",
                }}
              >
                {label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
