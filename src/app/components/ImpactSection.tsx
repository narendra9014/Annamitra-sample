import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { TrendingUp, Globe, Award } from "lucide-react";

const monthlyData = [
  { month: "Jan", meals: 18400 },
  { month: "Feb", meals: 22100 },
  { month: "Mar", meals: 27300 },
  { month: "Apr", meals: 31800 },
  { month: "May", meals: 29500 },
  { month: "Jun", meals: 35200 },
];

const testimonials = [
  {
    quote:
      "AnnaMitra volunteers reached our shelter within 45 minutes. The food was fresh and the children ate a full meal that evening. This platform is life-changing.",
    name: "Renuka G B",
    role: "Director, Snehalaya Children's Home",
    city: "Angallu",
    initials: "AD",
    bg: "#2d6a4f",
  },
  {
    quote:
      "Every weekend we used to throw away 80+ plates of food. Now those meals go to families in need. Donating through AnnaMitra takes less than 5 minutes.",
    name: "Maheswari",
    role: "Owner, Rajan Catering Services",
    city: "Madanapalle",
    initials: "RS",
    bg: "#e9a11a",
  },
  {
    quote:
      "I volunteer every Saturday. The dashboard is so clear — I know exactly where to go and what to pick up. It feels like real, direct impact.",
    name: "Surya Narayana",
    role: "AnnaMitra Volunteer",
    city: "Angallu",
    initials: "DK",
    bg: "#1e5a3f",
  },
];

export function ImpactSection() {
  return (
    <section
      style={{
        padding: "5rem 1.5rem",
        backgroundColor: "#1c2b1e",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span
            style={{
              display: "inline-block",
              backgroundColor: "rgba(233,161,26,0.15)",
              color: "#e9a11a",
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
            Our Impact
          </span>
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              color: "#ffffff",
              marginBottom: "0.75rem",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 700,
            }}
          >
            Every Number is a Full Stomach
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            Real impact, tracked daily. Here's what the AnnaMitra network has achieved
            together since 2021.
          </p>
        </div>

        {/* Stats grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            marginBottom: "4rem",
          }}
          className="grid-cols-1 sm:grid-cols-3"
        >
          {[
            {
              icon: TrendingUp,
              value: "3,20,000+",
              label: "Meals Rescued",
              sub: "+18% from last year",
            },
            {
              icon: Globe,
              value: "28 Cities",
              label: "Coverage Across India",
              sub: "Expanding to 40 by Dec 2026",
            },
            {
              icon: Award,
              value: "840+ Volunteers",
              label: "Verified & Active",
              sub: "Avg. 4.8 ★ donor rating",
            },
          ].map(({ icon: Icon, value, label, sub }) => (
            <div
              key={label}
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "1.25rem",
                padding: "2rem",
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
                  marginBottom: "1.25rem",
                }}
              >
                <Icon size={22} color="#e9a11a" />
              </div>
              <div
                style={{
                  fontFamily: "'Fraunces', serif",
                  color: "#ffffff",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 700,
                  marginBottom: "0.25rem",
                  lineHeight: 1,
                }}
              >
                {value}
              </div>
              <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", marginBottom: "0.375rem" }}>
                {label}
              </div>
              <div
                style={{
                  color: "#e9a11a",
                  fontSize: "0.8125rem",
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                {sub}
              </div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.04)",
            borderRadius: "1.25rem",
            border: "1px solid rgba(255,255,255,0.07)",
            padding: "2rem",
            marginBottom: "4rem",
          }}
        >
          <h3
            style={{
              fontFamily: "'Fraunces', serif",
              color: "#ffffff",
              fontSize: "1.25rem",
              fontWeight: 600,
              marginBottom: "0.375rem",
            }}
          >
            Meals Rescued — 2026
          </h3>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.875rem", marginBottom: "1.75rem" }}>
            Monthly breakdown across all cities
          </p>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={monthlyData} barCategoryGap="35%">
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
              <XAxis
                dataKey="month"
                tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 12, fontFamily: "'DM Mono', monospace" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "rgba(255,255,255,0.35)", fontSize: 11, fontFamily: "'DM Mono', monospace" }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1c2b1e",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "0.625rem",
                  color: "#fff",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                formatter={(v: number) => [v.toLocaleString("en-IN"), "Meals"]}
                cursor={{ fill: "rgba(233,161,26,0.06)" }}
              />
              <Bar dataKey="meals" fill="#e9a11a" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Testimonials */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {testimonials.map(({ quote, name, role, city, initials, bg }) => (
            <div
              key={name}
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "1.25rem",
                padding: "1.75rem",
              }}
            >
              <p
                style={{
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.75,
                  fontSize: "0.9375rem",
                  marginBottom: "1.5rem",
                  fontStyle: "italic",
                }}
              >
                "{quote}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Fraunces', serif",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    flexShrink: 0,
                  }}
                >
                  {initials}
                </div>
                <div>
                  <div style={{ color: "#ffffff", fontWeight: 600, fontSize: "0.9rem" }}>
                    {name}
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8rem" }}>
                    {role} · {city}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
