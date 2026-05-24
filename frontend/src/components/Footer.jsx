import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <h3>🪔 The Zafran Tales</h3>
          <p>Authentic Indian cuisine crafted with love, tradition & the finest spices from across India.</p>
        </div>
        <div className="footer-info">
          <h4>Hours</h4>
          <p>Mon–Thu: 12PM – 3PM, 6PM – 10:30PM</p>
          <p>Fri–Sat: 12PM – 3PM, 6PM – 11PM</p>
          <p>Sun: 12PM – 10PM</p>
        </div>
        <div className="footer-info">
          <h4>Contact</h4>
          <p>📍 GR-05, GF, WorldMark Gurgaon, Maidawas Rd, Sector 65, Gurugram, Haryana, 122102</p>
          <p>📞 +91 87756 13062</p>
          <p>✉ namaste@zafrantales.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 The Zafran Tales. All rights reserved.</p>
      </div>
    </footer>
  );
}
