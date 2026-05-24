import { useEffect, useState } from "react";
import { getMenu } from "../api";
import "./Menu.css";

const chefSpecials = [2, 12, 21, 35, 36, 43]; // Chole Bhature, Butter Paneer, Butter Chicken, Lucknowi Biryani, Mutton Biryani, Jalebi Rabri

const SpiceLevel = ({ level }) => {
  if (!level) return <span className="spice-none">No Spice</span>;
  return (
    <span className="spice-badge">
      {"🌶".repeat(level)}
      <span className="spice-label">{["", "Mild", "Medium", "Hot"][level]}</span>
    </span>
  );
};

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMenu().then((r) => { setMenu(r.data); setLoading(false); });
  }, []);

  if (loading) return (
    <div className="loader-wrap">
      <div className="loader-spinner" />
      <p>Loading menu…</p>
    </div>
  );

  const category = menu[active];
  const items = category?.items.filter((item) => {
    if (filter === "veg") return item.veg;
    if (filter === "nonveg") return !item.veg;
    return true;
  });

  return (
    <div className="page-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Menu</h2>
          <div className="divider" />
          <p>Authentic Indian flavours crafted with love, tradition & the finest spices</p>
        </div>

        {/* Veg / Non-Veg Filter */}
        <div className="menu-filter">
          {[
            { key: "all",    label: "🍽 All Items" },
            { key: "veg",    label: "🟢 Veg Only" },
            { key: "nonveg", label: "🔴 Non-Veg" },
          ].map((f) => (
            <button key={f.key} className={`filter-btn ${filter === f.key ? "active" : ""}`}
              onClick={() => setFilter(f.key)}>
              {f.label}
            </button>
          ))}
        </div>

        {/* Category Tabs */}
        <div className="menu-tabs">
          {menu.map((cat, i) => (
            <button key={cat.id} className={`menu-tab ${active === i ? "active" : ""}`}
              onClick={() => setActive(i)}>
              {cat.category}
              <span className="tab-count">{cat.items.length}</span>
            </button>
          ))}
        </div>

        {/* Items Grid */}
        {items?.length === 0 ? (
          <div className="no-items">
            <span>🍽</span>
            <p>No items match the selected filter in this category.</p>
          </div>
        ) : (
          <div className="menu-grid">
            {items?.map((item) => (
              <div key={item.id} className={`menu-card ${chefSpecials.includes(item.id) ? "chef-special" : ""}`}>
                <div className="menu-card-img">
                  <img src={item.img} alt={item.name} loading="lazy"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=60"; }} />
                  {/* Veg / Non-Veg dot */}
                  <div className={`veg-indicator ${item.veg ? "veg" : "nonveg"}`}>
                    <span className="veg-dot" />
                  </div>
                  {chefSpecials.includes(item.id) && (
                    <div className="chef-badge">⭐ Chef's Special</div>
                  )}
                </div>
                <div className="menu-card-body">
                  <div className="menu-card-header">
                    <h3>{item.name}</h3>
                    <span className="price">₹{item.price}</span>
                  </div>
                  <p className="item-desc">{item.desc}</p>
                  <div className="menu-card-footer">
                    <SpiceLevel level={item.spicy} />
                    <span className={`diet-tag ${item.veg ? "veg-tag" : "nonveg-tag"}`}>
                      {item.veg ? "Veg" : "Non-Veg"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Legend */}
        <div className="menu-legend">
          <div className="legend-item">
            <div className="veg-indicator veg"><span className="veg-dot" /></div>
            <span>Vegetarian</span>
          </div>
          <div className="legend-item">
            <div className="veg-indicator nonveg"><span className="veg-dot" /></div>
            <span>Non-Vegetarian</span>
          </div>
          <div className="legend-item"><span>🌶 Mild</span></div>
          <div className="legend-item"><span>🌶🌶 Medium</span></div>
          <div className="legend-item"><span>🌶🌶🌶 Hot</span></div>
          <div className="legend-item"><span>⭐ Chef's Special</span></div>
        </div>
      </div>
    </div>
  );
}
