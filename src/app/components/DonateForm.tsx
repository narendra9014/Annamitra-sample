import { useState } from "react";
import {
  MapPin,
  Package,
  Phone,
  User,
  Clock,
  ChevronDown,
  CheckCircle,
} from "lucide-react";

const foodTypes = [
  "Cooked Rice / Dal",
  "Bread & Bakery Items",
  "Fruits & Vegetables",
  "Packaged / Dry Food",
  "Restaurant Leftovers",
  "Wedding / Event Catering",
  "Other",
];

const initialForm = {
  name: "",
  phone: "",
  email: "",
  foodType: "",
  quantity: "",
  address: "",
  city: "",
  pincode: "",
  availableTime: "",
  notes: "",
};

export function DonateForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Partial<typeof initialForm>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: Partial<typeof initialForm> = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.phone.match(/^\d{10}$/)) e.phone = "Enter valid 10-digit phone number";
    if (!form.foodType) e.foodType = "Please select food type";
    if (!form.quantity.trim()) e.quantity = "Quantity is required";
    if (!form.address.trim()) e.address = "Pickup address is required";
    if (!form.city.trim()) e.city = "City is required";
    if (!form.availableTime) e.availableTime = "Pickup time is required";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) {
      setErrors(e2);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const inputStyle = (hasError: boolean) => ({
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "0.625rem",
    border: `1.5px solid ${hasError ? "#c0392b" : "rgba(45,106,79,0.2)"}`,
    backgroundColor: "#f5f1e8",
    color: "#1c2b1e",
    fontSize: "0.9375rem",
    fontFamily: "'DM Sans', sans-serif",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box" as const,
  });

  const labelStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "0.375rem",
    marginBottom: "0.4rem",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    color: "#1c2b1e",
    fontSize: "0.9375rem",
  };

  const errorStyle: React.CSSProperties = {
    color: "#c0392b",
    fontSize: "0.8125rem",
    marginTop: "0.25rem",
    fontFamily: "'DM Sans', sans-serif",
  };

  if (submitted) {
    return (
      <section
        style={{
          padding: "5rem 1.5rem",
          backgroundColor: "#faf7f2",
          fontFamily: "'DM Sans', sans-serif",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            textAlign: "center",
            maxWidth: "480px",
            backgroundColor: "#ffffff",
            borderRadius: "1.5rem",
            padding: "3rem 2rem",
            border: "1px solid rgba(45,106,79,0.12)",
            boxShadow: "0 16px 48px rgba(45,106,79,0.1)",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              backgroundColor: "#eef5f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem",
            }}
          >
            <CheckCircle size={36} color="#2d6a4f" />
          </div>
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              color: "#1c2b1e",
              fontSize: "1.75rem",
              fontWeight: 700,
              marginBottom: "0.75rem",
            }}
          >
            Thank You, {form.name.split(" ")[0]}!
          </h2>
          <p style={{ color: "#6b7c6e", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            Your donation request has been received. A volunteer will contact you within{" "}
            <strong style={{ color: "#2d6a4f" }}>30 minutes</strong> to coordinate
            pickup. Every meal you share changes a life.
          </p>
          <div
            style={{
              backgroundColor: "#eef5f0",
              borderRadius: "0.875rem",
              padding: "1rem",
              marginBottom: "1.5rem",
              textAlign: "left",
            }}
          >
            <div style={{ fontSize: "0.8125rem", color: "#6b7c6e", marginBottom: "0.25rem" }}>
              Reference ID
            </div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#2d6a4f",
                fontWeight: 500,
                fontSize: "0.9375rem",
              }}
            >
              AM-{Date.now().toString().slice(-8)}
            </div>
          </div>
          <button
            onClick={() => {
              setForm(initialForm);
              setErrors({});
              setSubmitted(false);
            }}
            style={{
              padding: "0.75rem 2rem",
              borderRadius: "2rem",
              border: "none",
              cursor: "pointer",
              backgroundColor: "#2d6a4f",
              color: "#ffffff",
              fontWeight: 600,
              fontSize: "0.9375rem",
            }}
          >
            Submit Another Donation
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      style={{
        padding: "5rem 1.5rem",
        backgroundColor: "#faf7f2",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "2.5rem" }}>
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
            Food Donation
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
            Donate Surplus Food
          </h2>
          <p style={{ color: "#6b7c6e", lineHeight: 1.7, fontSize: "1.0625rem", maxWidth: "540px" }}>
            Fill in the details below and a verified volunteer will coordinate pickup from
            your location — usually within the hour.
          </p>
        </div>

        {/* Form card */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "1.5rem",
            padding: "2.5rem",
            border: "1px solid rgba(45,106,79,0.1)",
            boxShadow: "0 8px 32px rgba(45,106,79,0.07)",
          }}
        >
          <form onSubmit={handleSubmit} noValidate>
            {/* Section: Contact Info */}
            <div
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "#2d6a4f",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
                fontFamily: "'DM Mono', monospace",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <User size={14} /> Contact Information
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.25rem",
                marginBottom: "1.25rem",
              }}
              className="grid-cols-1 sm:grid-cols-2"
            >
              <div>
                <label style={labelStyle} htmlFor="name">
                  Full Name <span style={{ color: "#c0392b" }}>*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Priya Ramesh"
                  value={form.name}
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                    setErrors({ ...errors, name: "" });
                  }}
                  style={inputStyle(!!errors.name)}
                />
                {errors.name && <div style={errorStyle}>{errors.name}</div>}
              </div>
              <div>
                <label style={labelStyle} htmlFor="phone">
                  <Phone size={14} /> Phone Number <span style={{ color: "#c0392b" }}>*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="9876543210"
                  value={form.phone}
                  onChange={(e) => {
                    setForm({ ...form, phone: e.target.value });
                    setErrors({ ...errors, phone: "" });
                  }}
                  style={inputStyle(!!errors.phone)}
                />
                {errors.phone && <div style={errorStyle}>{errors.phone}</div>}
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <label style={labelStyle} htmlFor="email">
                  Email Address <span style={{ color: "#6b7c6e", fontSize: "0.8125rem", fontWeight: 400 }}>(optional)</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="priya@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={inputStyle(false)}
                />
              </div>
            </div>

            {/* Divider */}
            <div
              style={{
                borderTop: "1px solid rgba(45,106,79,0.1)",
                margin: "1.75rem 0",
              }}
            />

            {/* Section: Food Details */}
            <div
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "#2d6a4f",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
                fontFamily: "'DM Mono', monospace",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <Package size={14} /> Food Details
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.25rem",
                marginBottom: "1.25rem",
              }}
              className="grid-cols-1 sm:grid-cols-2"
            >
              <div>
                <label style={labelStyle} htmlFor="foodType">
                  Food Type <span style={{ color: "#c0392b" }}>*</span>
                </label>
                <div style={{ position: "relative" }}>
                  <select
                    id="foodType"
                    value={form.foodType}
                    onChange={(e) => {
                      setForm({ ...form, foodType: e.target.value });
                      setErrors({ ...errors, foodType: "" });
                    }}
                    style={{
                      ...inputStyle(!!errors.foodType),
                      appearance: "none",
                      paddingRight: "2.5rem",
                    }}
                  >
                    <option value="">Select food type…</option>
                    {foodTypes.map((ft) => (
                      <option key={ft} value={ft}>{ft}</option>
                    ))}
                  </select>
                  <ChevronDown
                    size={16}
                    color="#6b7c6e"
                    style={{ position: "absolute", right: "0.875rem", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
                  />
                </div>
                {errors.foodType && <div style={errorStyle}>{errors.foodType}</div>}
              </div>
              <div>
                <label style={labelStyle} htmlFor="quantity">
                  Quantity / Servings <span style={{ color: "#c0392b" }}>*</span>
                </label>
                <input
                  id="quantity"
                  type="text"
                  placeholder="e.g. 50 plates, 10 kg"
                  value={form.quantity}
                  onChange={(e) => {
                    setForm({ ...form, quantity: e.target.value });
                    setErrors({ ...errors, quantity: "" });
                  }}
                  style={inputStyle(!!errors.quantity)}
                />
                {errors.quantity && <div style={errorStyle}>{errors.quantity}</div>}
              </div>
            </div>

            {/* Divider */}
            <div style={{ borderTop: "1px solid rgba(45,106,79,0.1)", margin: "1.75rem 0" }} />

            {/* Section: Pickup Location */}
            <div
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "#2d6a4f",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
                fontFamily: "'DM Mono', monospace",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <MapPin size={14} /> Pickup Location & Timing
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="grid-cols-1 sm:grid-cols-2">
              <div style={{ gridColumn: "1 / -1" }}>
                <label style={labelStyle} htmlFor="address">
                  Street Address <span style={{ color: "#c0392b" }}>*</span>
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder="Building, street, landmark…"
                  value={form.address}
                  onChange={(e) => {
                    setForm({ ...form, address: e.target.value });
                    setErrors({ ...errors, address: "" });
                  }}
                  style={inputStyle(!!errors.address)}
                />
                {errors.address && <div style={errorStyle}>{errors.address}</div>}
              </div>
              <div>
                <label style={labelStyle} htmlFor="city">
                  City <span style={{ color: "#c0392b" }}>*</span>
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="Chennai"
                  value={form.city}
                  onChange={(e) => {
                    setForm({ ...form, city: e.target.value });
                    setErrors({ ...errors, city: "" });
                  }}
                  style={inputStyle(!!errors.city)}
                />
                {errors.city && <div style={errorStyle}>{errors.city}</div>}
              </div>
              <div>
                <label style={labelStyle} htmlFor="pincode">
                  Pincode
                </label>
                <input
                  id="pincode"
                  type="text"
                  placeholder="600001"
                  value={form.pincode}
                  onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                  style={inputStyle(false)}
                />
              </div>
              <div>
                <label style={labelStyle} htmlFor="availableTime">
                  <Clock size={14} /> Available for Pickup <span style={{ color: "#c0392b" }}>*</span>
                </label>
                <div style={{ position: "relative" }}>
                  <select
                    id="availableTime"
                    value={form.availableTime}
                    onChange={(e) => {
                      setForm({ ...form, availableTime: e.target.value });
                      setErrors({ ...errors, availableTime: "" });
                    }}
                    style={{ ...inputStyle(!!errors.availableTime), appearance: "none", paddingRight: "2.5rem" }}
                  >
                    <option value="">Select time window…</option>
                    <option>Within 1 hour</option>
                    <option>In 1–2 hours</option>
                    <option>In 2–4 hours</option>
                    <option>This evening (6–9 PM)</option>
                    <option>Tomorrow morning</option>
                  </select>
                  <ChevronDown size={16} color="#6b7c6e" style={{ position: "absolute", right: "0.875rem", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
                </div>
                {errors.availableTime && <div style={errorStyle}>{errors.availableTime}</div>}
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <label style={labelStyle} htmlFor="notes">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  placeholder="Any special instructions for the volunteer — packaging, access, dietary info…"
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  style={{
                    ...inputStyle(false),
                    resize: "vertical",
                    minHeight: "80px",
                  }}
                />
              </div>
            </div>

            {/* Submit */}
            <div style={{ marginTop: "2rem", display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
              <button
                type="submit"
                disabled={loading}
                style={{
                  padding: "0.875rem 2.5rem",
                  borderRadius: "2rem",
                  border: "none",
                  cursor: loading ? "not-allowed" : "pointer",
                  backgroundColor: loading ? "#6b7c6e" : "#2d6a4f",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "1rem",
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "background-color 0.2s",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                {loading ? (
                  <>
                    <span
                      style={{
                        width: "16px",
                        height: "16px",
                        border: "2px solid rgba(255,255,255,0.4)",
                        borderTopColor: "#fff",
                        borderRadius: "50%",
                        display: "inline-block",
                        animation: "spin 0.7s linear infinite",
                      }}
                    />
                    Submitting…
                  </>
                ) : (
                  "Submit Donation Request"
                )}
              </button>
              <p style={{ color: "#6b7c6e", fontSize: "0.875rem", lineHeight: 1.5 }}>
                A volunteer will call within 30 minutes of confirmation.
              </p>
            </div>
          </form>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
