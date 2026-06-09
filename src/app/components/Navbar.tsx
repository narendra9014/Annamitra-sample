import { useState } from "react";
import { Leaf, Menu, X, Heart } from "lucide-react";

interface NavbarProps {
  activeView: string;
  onNavigate: (view: string) => void;
}

export function Navbar({ activeView, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { id: "home", label: "Home" },
    { id: "donate", label: "Donate Food" },
    { id: "volunteer", label: "Volunteer" },
    { id: "impact", label: "Our Impact" },
  ];

  return (
    <nav
      style={{
        fontFamily: "'DM Sans', sans-serif",
        backgroundColor: "#2d6a4f",
        position: "sticky",
        top: 0,
        zIndex: 50,
        boxShadow: "0 2px 12px rgba(45,106,79,0.25)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => onNavigate("home")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              backgroundColor: "#e9a11a",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Leaf size={18} color="#1c2b1e" />
          </div>
          <span
            style={{
              fontFamily: "'Fraunces', serif",
              color: "#ffffff",
              fontSize: "1.375rem",
              fontWeight: 700,
              letterSpacing: "-0.01em",
            }}
          >
            AnnaMitra
          </span>
        </button>

        {/* Desktop links */}
        <div
          style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}
          className="hidden md:flex"
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                border: "none",
                cursor: "pointer",
                backgroundColor:
                  activeView === link.id
                    ? "rgba(233,161,26,0.9)"
                    : "transparent",
                color: activeView === link.id ? "#1c2b1e" : "rgba(255,255,255,0.85)",
                fontWeight: activeView === link.id ? 600 : 400,
                transition: "all 0.2s",
                fontSize: "0.9375rem",
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => onNavigate("donate")}
            style={{
              marginLeft: "0.75rem",
              padding: "0.5rem 1.25rem",
              borderRadius: "2rem",
              border: "none",
              cursor: "pointer",
              backgroundColor: "#e9a11a",
              color: "#1c2b1e",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
              transition: "opacity 0.2s",
              fontSize: "0.9375rem",
            }}
          >
            <Heart size={15} />
            Donate Now
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#ffffff",
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "#1e5a3f",
            padding: "0.75rem 1.5rem 1rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
          className="md:hidden"
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setMenuOpen(false);
              }}
              style={{
                padding: "0.75rem 1rem",
                borderRadius: "0.5rem",
                border: "none",
                cursor: "pointer",
                backgroundColor:
                  activeView === link.id ? "rgba(233,161,26,0.85)" : "transparent",
                color: activeView === link.id ? "#1c2b1e" : "rgba(255,255,255,0.85)",
                fontWeight: activeView === link.id ? 600 : 400,
                textAlign: "left",
                fontSize: "1rem",
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              onNavigate("donate");
              setMenuOpen(false);
            }}
            style={{
              marginTop: "0.5rem",
              padding: "0.75rem 1rem",
              borderRadius: "2rem",
              border: "none",
              cursor: "pointer",
              backgroundColor: "#e9a11a",
              color: "#1c2b1e",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "1rem",
            }}
          >
            <Heart size={16} />
            Donate Now
          </button>
        </div>
      )}
    </nav>
  );
}
