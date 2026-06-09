import { useState, useEffect } from "react";
import {
  MapPin,
  Package,
  Clock,
  Phone,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  User,
  Filter,
  ChevronRight,
} from "lucide-react";

type Status = "pending" | "in-progress" | "completed";

interface FoodRequest {
  id: string;
  donorName: string;
  phone: string;
  foodType: string;
  quantity: string;
  address: string;
  city: string;
  timeAgo: string;
  status: Status;
  urgency: "high" | "medium" | "low";
  meals: number;
}

const mockRequests: FoodRequest[] = [
  {
    id: "AM-24680135",
    donorName: "Hotel Grand Meridian",
    phone: "9841234567",
    foodType: "Wedding Catering",
    quantity: "200 plates",
    address: "12 NTR circle, Madanapalle",
    city: "Madanapalle",
    timeAgo: "8 min ago",
    status: "pending",
    urgency: "high",
    meals: 200,
  },
  {
    id: "AM-24680122",
    donorName: "Nandini M K",
    phone: "9751122334",
    foodType: "Cooked Rice / Dal",
    quantity: "60 plates",
    address: "45 Hostel",
    city: "Angallu",
    timeAgo: "21 min ago",
    status: "in-progress",
    urgency: "high",
    meals: 60,
  },
  {
    id: "AM-24680110",
    donorName: "Navya Bakery",
    phone: "9600987654",
    foodType: "Bread & Bakery Items",
    quantity: "80 loaves",
    address: "Kadiri Road, Angallu",
    city: "Angallu",
    timeAgo: "45 min ago",
    status: "in-progress",
    urgency: "medium",
    meals: 80,
  },
  {
    id: "AM-24680098",
    donorName: "Mehta Caterers",
    phone: "9876012345",
    foodType: "Packaged / Dry Food",
    quantity: "30 kg",
    address: "Adyar Signal, Kasturba Nagar",
    city: "Chennai",
    timeAgo: "1 hr 12 min ago",
    status: "completed",
    urgency: "low",
    meals: 55,
  },
  {
    id: "AM-24680087",
    donorName: "Ritu Sharma",
    phone: "9444001122",
    foodType: "Fruits & Vegetables",
    quantity: "25 kg",
    address: "16 Nungambakkam High Rd",
    city: "Chennai",
    timeAgo: "2 hr ago",
    status: "completed",
    urgency: "low",
    meals: 40,
  },
  {
    id: "AM-24680074",
    donorName: "Annapurna Restaurant",
    phone: "9500445566",
    foodType: "Restaurant Leftovers",
    quantity: "40 plates",
    address: "MRC Nagar Main Road",
    city: "Chennai",
    timeAgo: "3 hr ago",
    status: "pending",
    urgency: "medium",
    meals: 40,
  },
];

const statusConfig: Record<Status, { label: string; bg: string; color: string; icon: typeof CheckCircle }> = {
  pending: { label: "Pending", bg: "#fff8ec", color: "#b07d0f", icon: AlertCircle },
  "in-progress": { label: "In Progress", bg: "#eef5f0", color: "#2d6a4f", icon: RefreshCw },
  completed: { label: "Completed", bg: "#f0ebe2", color: "#6b7c6e", icon: CheckCircle },
};

const urgencyConfig = {
  high: { label: "Urgent", color: "#c0392b", bg: "#fdf0ed" },
  medium: { label: "Moderate", color: "#b07d0f", bg: "#fff8ec" },
  low: { label: "Low", color: "#6b7c6e", bg: "#f0ebe2" },
};

export function VolunteerDashboard() {
  const [requests, setRequests] = useState<FoodRequest[]>(mockRequests);
  const [filter, setFilter] = useState<"all" | Status>("all");
  const [refreshing, setRefreshing] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [lastRefreshed, setLastRefreshed] = useState(new Date());

  const filtered = filter === "all" ? requests : requests.filter((r) => r.status === filter);

  const totalPending = requests.filter((r) => r.status === "pending").length;
  const totalInProgress = requests.filter((r) => r.status === "in-progress").length;
  const totalCompleted = requests.filter((r) => r.status === "completed").length;
  const totalMeals = requests.filter((r) => r.status === "completed").reduce((a, r) => a + r.meals, 0);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setLastRefreshed(new Date());
      // Simulate new request
      const newReq: FoodRequest = {
        id: `AM-${Math.floor(Math.random() * 90000000 + 10000000)}`,
        donorName: ["Lotus Biryani", "Ms. Naga Sudha", "Spice Garden"][Math.floor(Math.random() * 3)],
        phone: `9${Math.floor(Math.random() * 900000000 + 100000000)}`,
        foodType: ["Cooked Rice / Dal", "Restaurant Leftovers", "Packaged / Dry Food"][Math.floor(Math.random() * 3)],
        quantity: `${Math.floor(Math.random() * 80 + 20)} plates`,
        address: ["Sudha hostel", "Kadiri Road"][Math.floor(Math.random() * 3)],
        city: "Angallu",
        timeAgo: "Just now",
        status: "pending",
        urgency: "high",
        meals: Math.floor(Math.random() * 80 + 20),
      };
      setRequests((prev) => [newReq, ...prev]);
    }, 1200);
  };

  const updateStatus = (id: string, status: Status) => {
    setRequests((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
  };

  const selectedReq = requests.find((r) => r.id === selectedId);

  return (
    <section
      style={{
        padding: "5rem 1.5rem",
        backgroundColor: "#faf7f2",
        fontFamily: "'DM Sans', sans-serif",
        minHeight: "80vh",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: "2rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
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
                marginBottom: "0.75rem",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              Live Feed
            </span>
            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                color: "#1c2b1e",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
                marginBottom: "0.375rem",
              }}
            >
              Volunteer Dashboard
            </h2>
            <p style={{ color: "#6b7c6e", fontSize: "0.9rem" }}>
              Last updated:{" "}
              <span style={{ fontFamily: "'DM Mono', monospace" }}>
                {lastRefreshed.toLocaleTimeString()}
              </span>
            </p>
          </div>
          <button
            onClick={handleRefresh}
            disabled={refreshing}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.625rem 1.25rem",
              borderRadius: "2rem",
              border: "1.5px solid rgba(45,106,79,0.3)",
              cursor: refreshing ? "not-allowed" : "pointer",
              backgroundColor: refreshing ? "#eef5f0" : "#ffffff",
              color: "#2d6a4f",
              fontWeight: 600,
              fontSize: "0.9rem",
              transition: "background 0.2s",
            }}
          >
            <RefreshCw
              size={15}
              style={{ animation: refreshing ? "spin 0.7s linear infinite" : "none" }}
            />
            {refreshing ? "Refreshing…" : "Refresh Feed"}
          </button>
        </div>

        {/* Summary cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem",
            marginBottom: "2rem",
          }}
          className="grid-cols-2 md:grid-cols-4"
        >
          {[
            { label: "Pending", value: totalPending, color: "#b07d0f", bg: "#fff8ec" },
            { label: "In Progress", value: totalInProgress, color: "#2d6a4f", bg: "#eef5f0" },
            { label: "Completed Today", value: totalCompleted, color: "#1e5a3f", bg: "#d8f0e4" },
            { label: "Meals Delivered", value: totalMeals, color: "#1c2b1e", bg: "#f0ebe2" },
          ].map(({ label, value, color, bg }) => (
            <div
              key={label}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "1rem",
                padding: "1.25rem",
                border: "1px solid rgba(45,106,79,0.1)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                  color,
                  lineHeight: 1,
                  marginBottom: "0.375rem",
                }}
              >
                {value}
              </div>
              <div style={{ fontSize: "0.8125rem", color: "#6b7c6e" }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Filter tabs */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            marginBottom: "1.5rem",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Filter size={15} color="#6b7c6e" />
          {(["all", "pending", "in-progress", "completed"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: "0.4rem 1rem",
                borderRadius: "2rem",
                border: "1.5px solid",
                borderColor: filter === f ? "#2d6a4f" : "rgba(45,106,79,0.18)",
                cursor: "pointer",
                backgroundColor: filter === f ? "#2d6a4f" : "#ffffff",
                color: filter === f ? "#ffffff" : "#6b7c6e",
                fontWeight: filter === f ? 600 : 400,
                fontSize: "0.875rem",
                textTransform: "capitalize",
                transition: "all 0.15s",
              }}
            >
              {f === "all" ? "All Requests" : f.replace("-", " ")}
              {f !== "all" && (
                <span
                  style={{
                    marginLeft: "0.375rem",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.75rem",
                    opacity: 0.8,
                  }}
                >
                  ({f === "pending" ? totalPending : f === "in-progress" ? totalInProgress : totalCompleted})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Main layout */}
        <div style={{ display: "grid", gridTemplateColumns: selectedReq ? "1fr 380px" : "1fr", gap: "1.5rem" }} className="grid-cols-1 lg:grid-cols-2">
          {/* Request list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            {filtered.length === 0 && (
              <div
                style={{
                  textAlign: "center",
                  padding: "3rem",
                  color: "#6b7c6e",
                  backgroundColor: "#ffffff",
                  borderRadius: "1rem",
                  border: "1px dashed rgba(45,106,79,0.2)",
                }}
              >
                No {filter !== "all" ? filter : ""} requests at the moment.
              </div>
            )}
            {filtered.map((req) => {
              const sc = statusConfig[req.status];
              const uc = urgencyConfig[req.urgency];
              const StatusIcon = sc.icon;
              return (
                <div
                  key={req.id}
                  onClick={() => setSelectedId(selectedId === req.id ? null : req.id)}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "1rem",
                    padding: "1.25rem 1.5rem",
                    border: `1.5px solid ${selectedId === req.id ? "#2d6a4f" : "rgba(45,106,79,0.1)"}`,
                    cursor: "pointer",
                    transition: "all 0.15s",
                    boxShadow: selectedId === req.id ? "0 4px 20px rgba(45,106,79,0.12)" : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (selectedId !== req.id)
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(45,106,79,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    if (selectedId !== req.id)
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(45,106,79,0.1)";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "1rem",
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.375rem", flexWrap: "wrap" }}>
                        <span
                          style={{
                            fontFamily: "'DM Mono', monospace",
                            fontSize: "0.75rem",
                            color: "#6b7c6e",
                          }}
                        >
                          {req.id}
                        </span>
                        <span
                          style={{
                            padding: "0.1875rem 0.6rem",
                            borderRadius: "2rem",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            backgroundColor: uc.bg,
                            color: uc.color,
                          }}
                        >
                          {uc.label}
                        </span>
                      </div>
                      <h3
                        style={{
                          fontFamily: "'Fraunces', serif",
                          color: "#1c2b1e",
                          fontSize: "1.05rem",
                          fontWeight: 600,
                          marginBottom: "0.5rem",
                        }}
                      >
                        {req.donorName}
                      </h3>
                      <div
                        style={{
                          display: "flex",
                          gap: "1.25rem",
                          flexWrap: "wrap",
                          fontSize: "0.875rem",
                          color: "#6b7c6e",
                        }}
                      >
                        <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                          <Package size={13} /> {req.foodType} · {req.quantity}
                        </span>
                        <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                          <MapPin size={13} /> {req.city}
                        </span>
                        <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                          <Clock size={13} /> {req.timeAgo}
                        </span>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.5rem" }}>
                      <span
                        style={{
                          padding: "0.3rem 0.75rem",
                          borderRadius: "2rem",
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          backgroundColor: sc.bg,
                          color: sc.color,
                          display: "flex",
                          alignItems: "center",
                          gap: "0.3rem",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <StatusIcon size={12} style={{ animation: req.status === "in-progress" ? "spin 1.5s linear infinite" : "none" }} />
                        {sc.label}
                      </span>
                      <ChevronRight size={16} color="#6b7c6e" style={{ transform: selectedId === req.id ? "rotate(90deg)" : "none", transition: "transform 0.2s" }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detail panel */}
          {selectedReq && (
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "1.25rem",
                border: "1.5px solid rgba(45,106,79,0.15)",
                overflow: "hidden",
                alignSelf: "flex-start",
                position: "sticky",
                top: "80px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#2d6a4f",
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.6)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {selectedReq.id}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Fraunces', serif",
                      color: "#ffffff",
                      fontSize: "1.125rem",
                      fontWeight: 600,
                    }}
                  >
                    {selectedReq.donorName}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedId(null)}
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    border: "none",
                    borderRadius: "0.5rem",
                    width: "28px",
                    height: "28px",
                    cursor: "pointer",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1rem",
                  }}
                >
                  ✕
                </button>
              </div>

              <div style={{ padding: "1.5rem" }}>
                {[
                  { icon: Package, label: "Food Type", value: `${selectedReq.foodType} · ${selectedReq.quantity}` },
                  { icon: MapPin, label: "Pickup Address", value: `${selectedReq.address}, ${selectedReq.city}` },
                  { icon: Clock, label: "Submitted", value: selectedReq.timeAgo },
                  { icon: User, label: "Donor", value: selectedReq.donorName },
                  { icon: Phone, label: "Phone", value: selectedReq.phone },
                ].map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      gap: "0.875rem",
                      marginBottom: "1rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "0.5rem",
                        backgroundColor: "#eef5f0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      <Icon size={15} color="#2d6a4f" />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.75rem", color: "#6b7c6e", marginBottom: "0.15rem" }}>
                        {label}
                      </div>
                      <div style={{ fontSize: "0.9375rem", color: "#1c2b1e", fontWeight: 500 }}>
                        {value}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Action buttons */}
                <div
                  style={{
                    borderTop: "1px solid rgba(45,106,79,0.1)",
                    paddingTop: "1.25rem",
                    marginTop: "0.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.625rem",
                  }}
                >
                  <p style={{ fontSize: "0.8125rem", color: "#6b7c6e", marginBottom: "0.25rem" }}>
                    Update request status:
                  </p>
                  {(["pending", "in-progress", "completed"] as Status[]).map((s) => {
                    const sc = statusConfig[s];
                    const isActive = selectedReq.status === s;
                    return (
                      <button
                        key={s}
                        onClick={() => updateStatus(selectedReq.id, s)}
                        style={{
                          padding: "0.625rem 1rem",
                          borderRadius: "0.625rem",
                          border: `1.5px solid ${isActive ? sc.color : "rgba(45,106,79,0.15)"}`,
                          cursor: "pointer",
                          backgroundColor: isActive ? sc.bg : "transparent",
                          color: isActive ? sc.color : "#6b7c6e",
                          fontWeight: isActive ? 600 : 400,
                          fontSize: "0.9rem",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          transition: "all 0.15s",
                          textTransform: "capitalize",
                        }}
                      >
                        <sc.icon size={14} />
                        Mark as {s.replace("-", " ")}
                        {isActive && (
                          <span style={{ marginLeft: "auto", fontSize: "0.75rem" }}>✓ Current</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
