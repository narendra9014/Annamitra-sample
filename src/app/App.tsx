import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { HowItWorks } from "./components/HowItWorks";
import { DonateForm } from "./components/DonateForm";
import { VolunteerDashboard } from "./components/VolunteerDashboard";
import { ImpactSection } from "./components/ImpactSection";
import { Footer } from "./components/Footer";

{/* MARKER-MAKE-KIT-INVOKED */}

type View = "home" | "donate" | "volunteer" | "impact";

export default function App() {
  const [activeView, setActiveView] = useState<View>("home");

  const navigateTo = (view: string) => {
    setActiveView(view as View);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#faf7f2",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <Navbar activeView={activeView} onNavigate={navigateTo} />

      <main style={{ flex: 1 }}>
        {activeView === "home" && (
          <>
            <HeroSection onNavigate={navigateTo} />
            <HowItWorks />
            {/* CTA Banner */}
            <section
              style={{
                backgroundColor: "#e9a11a",
                padding: "3.5rem 1.5rem",
                textAlign: "center",
              }}
            >
              <div style={{ maxWidth: "680px", margin: "0 auto" }}>
                <h2
                  style={{
                    fontFamily: "'Fraunces', serif",
                    color: "#1c2b1e",
                    fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                    fontWeight: 700,
                    marginBottom: "0.75rem",
                  }}
                >
                  Have Leftover Food? Don't Let it Go to Waste.
                </h2>
                <p
                  style={{
                    color: "rgba(28,43,30,0.7)",
                    lineHeight: 1.7,
                    marginBottom: "1.75rem",
                    fontSize: "1.0625rem",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Whether you're a restaurant, caterer, event host, or household — your
                  surplus can feed someone who needs it today.
                </p>
                <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                  <button
                    onClick={() => navigateTo("donate")}
                    style={{
                      padding: "0.875rem 2.25rem",
                      borderRadius: "2rem",
                      border: "none",
                      cursor: "pointer",
                      backgroundColor: "#1c2b1e",
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: "1rem",
                      fontFamily: "'DM Sans', sans-serif",
                      transition: "opacity 0.2s",
                    }}
                  >
                    Donate Food Now
                  </button>
                  <button
                    onClick={() => navigateTo("volunteer")}
                    style={{
                      padding: "0.875rem 2.25rem",
                      borderRadius: "2rem",
                      border: "2px solid #1c2b1e",
                      cursor: "pointer",
                      backgroundColor: "transparent",
                      color: "#1c2b1e",
                      fontWeight: 600,
                      fontSize: "1rem",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    Join as Volunteer
                  </button>
                </div>
              </div>
            </section>
            <ImpactSection />
          </>
        )}

        {activeView === "donate" && <DonateForm />}
        {activeView === "volunteer" && <VolunteerDashboard />}
        {activeView === "impact" && <ImpactSection />}
      </main>

      <Footer />
    </div>
  );
}
