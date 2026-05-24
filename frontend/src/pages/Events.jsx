import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getEvents } from "../api";
import "./Events.css";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvents().then((r) => { setEvents(r.data); setLoading(false); });
  }, []);

  if (loading) return <div className="loader">Loading events…</div>;

  return (
    <div className="page-section">
      <div className="container">
        <div className="section-header">
          <h2>Upcoming Events</h2>
          <div className="divider" />
          <p>Festivals, feasts & unforgettable North Indian evenings at Spice Garden</p>
        </div>

        <div className="events-grid">
          {events.map((ev) => (
            <div key={ev.id} className="event-card">
              <div className="event-img">
                <img src={ev.img} alt={ev.title} />
                <div className="event-date-badge">
                  <span>{new Date(ev.date).toLocaleDateString("en-US", { month: "short" })}</span>
                  <strong>{new Date(ev.date).getDate()}</strong>
                </div>
              </div>
              <div className="event-body">
                <h3>{ev.title}</h3>
                <div className="event-meta">
                  <span>🕐 {ev.time}</span>
                  <span>💺 {ev.seats} seats available</span>
                </div>
                <p>{ev.desc}</p>
                <Link to="/reservations" className="btn btn-gold" style={{ marginTop: 16 }}>
                  Book for This Event
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
