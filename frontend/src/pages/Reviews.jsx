import { useState } from "react";
import "./Reviews.css";

const initialReviews = [
  { id: 1, name: "Priya Sharma", rating: 5, date: "2025-06-10", comment: "Absolutely divine! The Dal Makhani and Butter Naan were out of this world. The ambiance is royal and the service was impeccable.", avatar: "PS" },
  { id: 2, name: "Rahul Mehta", rating: 5, date: "2025-06-05", comment: "Best biryani I've had outside of Lucknow. The Mutton Biryani was fragrant, perfectly spiced and the portions are generous.", avatar: "RM" },
  { id: 3, name: "Ananya Singh", rating: 4, date: "2025-05-28", comment: "Loved the Paneer Tikka and Kadai Paneer. The Qawwali night was a fantastic experience. Will definitely come back!", avatar: "AS" },
  { id: 4, name: "Vikram Kapoor", rating: 5, date: "2025-05-20", comment: "The Seekh Kebabs were smoky and juicy. Tandoori Chicken was perfectly charred. A must-visit for North Indian food lovers.", avatar: "VK" },
  { id: 5, name: "Neha Gupta", rating: 4, date: "2025-05-15", comment: "Sarson Ka Saag with Makki Ki Roti was exactly like home. The desi ghee finish on every dish makes all the difference.", avatar: "NG" },
];

const StarRating = ({ rating, interactive = false, onRate }) => {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${star <= (interactive ? hovered || rating : rating) ? "filled" : ""}`}
          onClick={() => interactive && onRate(star)}
          onMouseEnter={() => interactive && setHovered(star)}
          onMouseLeave={() => interactive && setHovered(0)}
          style={{ cursor: interactive ? "pointer" : "default" }}
        >★</span>
      ))}
    </div>
  );
};

const avgRating = (reviews) => (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

const ratingCount = (reviews, star) => reviews.filter((r) => r.rating === star).length;

export default function Reviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [form, setForm] = useState({ name: "", rating: 0, comment: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.rating || !form.comment) return setError("Please fill all fields and select a rating.");
    setError("");
    const newReview = {
      id: reviews.length + 1,
      name: form.name,
      rating: form.rating,
      date: new Date().toISOString().split("T")[0],
      comment: form.comment,
      avatar: form.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2),
    };
    setReviews([newReview, ...reviews]);
    setForm({ name: "", rating: 0, comment: "" });
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="page-section">
      <div className="container">
        <div className="section-header">
          <h2>Customer Reviews</h2>
          <div className="divider" />
          <p>What our guests say about The Zafran Tales</p>
        </div>

        {/* Rating Summary */}
        <div className="rating-summary">
          <div className="rating-avg">
            <span className="avg-number">{avgRating(reviews)}</span>
            <StarRating rating={Math.round(avgRating(reviews))} />
            <span className="total-reviews">{reviews.length} reviews</span>
          </div>
          <div className="rating-bars">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="rating-bar-row">
                <span>{star} ★</span>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: `${(ratingCount(reviews, star) / reviews.length) * 100}%` }} />
                </div>
                <span>{ratingCount(reviews, star)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reviews-layout">
          {/* Review Form */}
          <div className="review-form-card">
            <h3>Write a Review</h3>
            {success && <div className="success-banner">✅ Thank you for your review!</div>}
            {error && <p className="error-msg" style={{ marginBottom: 16 }}>{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your Name *</label>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Rahul Sharma" />
              </div>
              <div className="form-group">
                <label>Rating *</label>
                <StarRating rating={form.rating} interactive onRate={(r) => setForm({ ...form, rating: r })} />
              </div>
              <div className="form-group">
                <label>Your Review *</label>
                <textarea rows={4} value={form.comment} onChange={(e) => setForm({ ...form, comment: e.target.value })} placeholder="Share your experience..." />
              </div>
              <button type="submit" className="btn btn-gold" style={{ width: "100%" }}>Submit Review</button>
            </form>
          </div>

          {/* Reviews List */}
          <div className="reviews-list">
            {reviews.map((r) => (
              <div key={r.id} className="review-card">
                <div className="review-header">
                  <div className="avatar">{r.avatar}</div>
                  <div className="review-meta">
                    <strong>{r.name}</strong>
                    <span className="review-date">{new Date(r.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
                  </div>
                  <StarRating rating={r.rating} />
                </div>
                <p className="review-comment">{r.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
