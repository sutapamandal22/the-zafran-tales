import { useEffect, useState } from "react";
import { getReservations, createReservation, cancelReservation } from "../api";
import "./Reservations.css";

const timeSlots = ["5:00 PM","5:30 PM","6:00 PM","6:30 PM","7:00 PM","7:30 PM","8:00 PM","8:30 PM","9:00 PM","9:30 PM"];

const empty = { name: "", email: "", phone: "", date: "", time: "", guests: "2", specialRequests: "" };

export default function Reservations() {
  const [form, setForm] = useState(empty);
  const [reservations, setReservations] = useState([]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const load = () => getReservations().then((r) => setReservations(r.data));

  useEffect(() => { load(); }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); setSuccess(false); setSubmitting(true);
    try {
      await createReservation(form);
      setSuccess(true);
      setForm(empty);
      load();
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = async (id) => {
    if (!confirm("Cancel this reservation?")) return;
    await cancelReservation(id);
    load();
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="page-section">
      <div className="container">
        <div className="section-header">
          <h2>Make a Reservation</h2>
          <div className="divider" />
          <p>Book your table and let us take care of the rest</p>
        </div>

        <div className="res-layout">
          {/* Form */}
          <div className="res-form-wrap">
            <div className="res-form-card">
              <h3>🪔 Reserve Your Table</h3>

              {success && (
                <div className="success-banner">
                  ✅ Your reservation is confirmed! We look forward to seeing you.
                </div>
              )}
              {error && <p className="error-msg" style={{ marginBottom: 16 }}>{error}</p>}

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="John Smith" required />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="(212) 555-0100" />
                  </div>
                  <div className="form-group">
                    <label>Guests *</label>
                    <select name="guests" value={form.guests} onChange={handleChange} required>
                      {[1,2,3,4,5,6,7,8].map((n) => (
                        <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Date *</label>
                    <input name="date" type="date" value={form.date} min={today} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Time *</label>
                    <select name="time" value={form.time} onChange={handleChange} required>
                      <option value="">Select a time</option>
                      {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Special Requests</label>
                  <textarea name="specialRequests" value={form.specialRequests} onChange={handleChange}
                    rows={3} placeholder="Dietary restrictions, celebrations, seating preferences…" />
                </div>
                <button type="submit" className="btn btn-gold" style={{ width: "100%" }} disabled={submitting}>
                  {submitting ? "Confirming…" : "Confirm Reservation"}
                </button>
              </form>
            </div>
          </div>

          {/* Info + Reservations List */}
          <div className="res-sidebar">
            <div className="res-info-card">
              <h4>📍 Location</h4>
              <p>GR-05, GF, WorldMark Gurgaon,<br />Maidawas Rd, Sector 65,<br />Gurugram, Haryana, 122102</p>
              <h4 style={{ marginTop: 20 }}>🕐 Hours</h4>
              <p>Mon–Thu: 12PM–3PM, 6PM–10:30PM<br />Fri–Sat: 12PM–3PM, 6PM–11PM<br />Sun: 12PM–10PM</p>
              <h4 style={{ marginTop: 20 }}>📞 Phone</h4>
              <p>+91 87756 13062</p>
            </div>

            {reservations.length > 0 && (
              <div className="res-list-card">
                <h4>Your Reservations</h4>
                {reservations.map((r) => (
                  <div key={r.id} className="res-item">
                    <div className="res-item-info">
                      <strong>{r.name}</strong>
                      <span>{new Date(r.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} at {r.time}</span>
                      <span>{r.guests} guest{r.guests > 1 ? "s" : ""} · <span className="confirmed-tag">Confirmed</span></span>
                    </div>
                    <button className="btn btn-danger" onClick={() => handleCancel(r.id)}>Cancel</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
