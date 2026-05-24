const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const menu = [
  {
    id: 1, category: "Starters & Chaat",
    items: [
      {
        id: 1, name: "Samosa (2 pcs)", price: 60, spicy: 1, veg: true,
        desc: "Crispy golden pastry stuffed with spiced potatoes & peas, served with mint & tamarind chutney",
        img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80"
      },
      {
        id: 2, name: "Chole Bhature", price: 180, spicy: 2, veg: true,
        desc: "Fluffy deep-fried bhature served with spicy Punjabi chole — a Delhi street food legend",
        img: "https://images.pexels.com/photos/4149256/pexels-photo-4149256.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 4, name: "Papdi Chaat", price: 110, spicy: 1, veg: true,
        desc: "Crispy papdi loaded with boiled potato, chickpeas, sweet yogurt, tamarind & green chutney",
        img: "https://images.unsplash.com/photo-1680764955303-81618ecb67b5?w=800&q=80"
      },
      {
        id: 5, name: "Gol Gappe / Pani Puri", price: 80, spicy: 2, veg: true,
        desc: "Hollow crispy puris filled with spiced potato & dunked in tangy mint-tamarind water",
        img: "https://images.pexels.com/photos/12318206/pexels-photo-12318206.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 6, name: "Dahi Bhalla", price: 130, spicy: 1, veg: true,
        desc: "Soft lentil dumplings soaked in chilled yogurt, drizzled with tamarind & green chutney",
        img: "https://images.unsplash.com/photo-1559561723-bcb9e0db1d66?w=800&q=80"
      },
      {
        id: 7, name: "Paneer Tikka", price: 320, spicy: 2, veg: true,
        desc: "Cottage cheese cubes marinated in spiced yogurt, char-grilled in tandoor with peppers & onions",
        img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80"
      },
      {
        id: 8, name: "Chicken Tikka", price: 380, spicy: 2, veg: false,
        desc: "Boneless chicken marinated overnight in yogurt & aromatic spices, grilled in clay oven",
        img: "https://images.pexels.com/photos/29173114/pexels-photo-29173114.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 9, name: "Seekh Kebab", price: 360, spicy: 2, veg: false,
        desc: "Minced mutton blended with ginger, garlic, herbs & spices, skewered & grilled over charcoal",
        img: "https://images.pexels.com/photos/14286679/pexels-photo-14286679.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 10, name: "Tandoori Chicken (Half)", price: 420, spicy: 3, veg: false,
        desc: "Whole chicken marinated in yogurt & Kashmiri chilli, roasted in a blazing tandoor",
        img: "https://images.pexels.com/photos/5031938/pexels-photo-5031938.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
    ],
  },
  {
    id: 2, category: "Vegetarian Mains",
    items: [
      {
        id: 11, name: "Dal Makhani", price: 280, spicy: 1, veg: true,
        desc: "Black urad dal slow-cooked overnight with butter, cream, tomatoes & a hint of fenugreek",
        img: "https://images.pexels.com/photos/19834445/pexels-photo-19834445.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 12, name: "Butter Paneer Masala", price: 340, spicy: 1, veg: true,
        desc: "Soft cottage cheese in a rich silky tomato-butter-cream sauce — North India's favourite",
        img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80"
      },
      {
        id: 13, name: "Palak Paneer", price: 320, spicy: 1, veg: true,
        desc: "Fresh cottage cheese cubes in velvety spinach gravy with ginger, garlic & cream",
        img: "https://images.pexels.com/photos/31249589/pexels-photo-31249589.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 14, name: "Shahi Paneer", price: 360, spicy: 1, veg: true,
        desc: "Cottage cheese in a royal Mughlai cashew-cream sauce with cardamom & rose water",
        img: "https://images.pexels.com/photos/10345736/pexels-photo-10345736.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 15, name: "Kadai Paneer", price: 340, spicy: 2, veg: true,
        desc: "Paneer & bell peppers tossed in a bold freshly ground kadai masala",
        img: "https://images.pexels.com/photos/30858402/pexels-photo-30858402.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 16, name: "Chole Masala", price: 260, spicy: 2, veg: true,
        desc: "Punjabi-style chickpeas in a tangy, deeply spiced tomato-onion gravy with amchur",
        img: "https://images.pexels.com/photos/9287032/pexels-photo-9287032.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 17, name: "Aloo Gobi", price: 240, spicy: 1, veg: true,
        desc: "Potatoes & cauliflower stir-fried with turmeric, cumin seeds & fresh coriander",
        img: "https://images.pexels.com/photos/13823417/pexels-photo-13823417.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 18, name: "Baingan Bharta", price: 260, spicy: 2, veg: true,
        desc: "Smoky fire-roasted aubergine mashed with onions, tomatoes, garlic & spices",
        img: "https://images.pexels.com/photos/15108368/pexels-photo-15108368.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 19, name: "Rajma Chawal", price: 220, spicy: 1, veg: true,
        desc: "Red kidney beans in a thick Punjabi masala gravy, served with steamed basmati rice",
        img: "https://images.pexels.com/photos/12737913/pexels-photo-12737913.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 20, name: "Sarson Ka Saag", price: 300, spicy: 1, veg: true,
        desc: "Slow-cooked mustard greens with spinach & bathua, served with makki ki roti & white butter",
        img: "https://images.pexels.com/photos/17696680/pexels-photo-17696680.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
    ],
  },
  {
    id: 3, category: "Non-Veg Mains",
    items: [
      {
        id: 21, name: "Butter Chicken", price: 420, spicy: 1, veg: false,
        desc: "Tandoor-roasted chicken in a silky, mildly spiced tomato-butter-cream sauce — the all-time classic",
        img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80"
      },
      {
        id: 22, name: "Chicken Tikka Masala", price: 440, spicy: 2, veg: false,
        desc: "Grilled chicken tikka simmered in a bold, spiced onion-tomato masala with cream",
        img: "https://images.pexels.com/photos/12089283/pexels-photo-12089283.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 23, name: "Mutton Rogan Josh", price: 520, spicy: 3, veg: false,
        desc: "Slow-braised Kashmiri mutton with whole spices, Kashmiri chillies & fennel powder",
        img: "https://images.pexels.com/photos/29684989/pexels-photo-29684989.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 24, name: "Chicken Korma", price: 420, spicy: 1, veg: false,
        desc: "Tender chicken in a mild, fragrant Mughlai almond-cream sauce with cardamom & rose water",
        img: "https://images.pexels.com/photos/36264075/pexels-photo-36264075.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 25, name: "Mutton Keema", price: 460, spicy: 2, veg: false,
        desc: "Minced mutton cooked with green peas, tomatoes, ginger & warming whole spices",
        img: "https://images.pexels.com/photos/32825911/pexels-photo-32825911.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 26, name: "Laal Maas", price: 540, spicy: 3, veg: false,
        desc: "Rajasthani fiery red mutton curry with mathania chillies, garlic & mustard oil",
        img: "https://images.pexels.com/photos/6358975/pexels-photo-6358975.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 27, name: "Chicken Kadai", price: 420, spicy: 2, veg: false,
        desc: "Chicken cooked in a wok with freshly ground coriander, cumin, peppers & tomatoes",
        img: "https://images.pexels.com/photos/29684985/pexels-photo-29684985.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
    ],
  },
  {
    id: 4, category: "Breads",
    items: [
      {
        id: 28, name: "Butter Naan", price: 60, spicy: 0, veg: true,
        desc: "Soft, fluffy leavened bread brushed with butter, baked in tandoor",
        img: "https://images.pexels.com/photos/10337726/pexels-photo-10337726.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 29, name: "Garlic Naan", price: 70, spicy: 0, veg: true,
        desc: "Tandoor-baked naan topped with minced garlic, butter & fresh coriander",
        img: "https://images.pexels.com/photos/16851842/pexels-photo-16851842.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 30, name: "Laccha Paratha", price: 70, spicy: 0, veg: true,
        desc: "Flaky, layered whole wheat flatbread pan-fried to golden perfection",
        img: "https://images.pexels.com/photos/9609857/pexels-photo-9609857.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 31, name: "Makki Ki Roti", price: 60, spicy: 0, veg: true,
        desc: "Traditional Punjabi cornmeal flatbread, best paired with sarson ka saag & white butter",
        img: "https://images.pexels.com/photos/37051462/pexels-photo-37051462.jpeg?auto=compress&cs=tinysrgb&w=800&fit=crop&crop=center"
      },
      {
        id: 32, name: "Tandoori Roti", price: 40, spicy: 0, veg: true,
        desc: "Whole wheat roti baked directly in the tandoor — light, healthy & smoky",
        img: "https://images.pexels.com/photos/35066812/pexels-photo-35066812.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 33, name: "Stuffed Aloo Paratha", price: 120, spicy: 1, veg: true,
        desc: "Whole wheat flatbread stuffed with spiced mashed potato, served with butter & pickle",
        img: "https://images.pexels.com/photos/12737919/pexels-photo-12737919.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 34, name: "Puri Bhaji", price: 140, spicy: 1, veg: true,
        desc: "Deep-fried whole wheat puris served with spiced potato bhaji — a classic North Indian breakfast",
        img: "https://images.pexels.com/photos/20422124/pexels-photo-20422124.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
    ],
  },
  {
    id: 5, category: "Biryani & Rice",
    items: [
      {
        id: 35, name: "Lucknowi Chicken Biryani", price: 460, spicy: 2, veg: false,
        desc: "Awadhi dum biryani — fragrant basmati rice layered with tender chicken, saffron & fried onions",
        img: "https://images.pexels.com/photos/34159109/pexels-photo-34159109.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 36, name: "Mutton Biryani", price: 540, spicy: 3, veg: false,
        desc: "Royal dum biryani with succulent mutton, rose water, saffron & crispy fried onions",
        img: "https://images.pexels.com/photos/9609863/pexels-photo-9609863.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 37, name: "Vegetable Biryani", price: 360, spicy: 2, veg: true,
        desc: "Fragrant basmati rice layered with seasonal vegetables, saffron & whole spices, dum-cooked",
        img: "https://images.pexels.com/photos/5410410/pexels-photo-5410410.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 38, name: "Jeera Rice", price: 160, spicy: 0, veg: true,
        desc: "Fragrant basmati rice tempered with cumin seeds, ghee & fresh coriander",
        img: "https://images.pexels.com/photos/7593253/pexels-photo-7593253.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 39, name: "Pulao", price: 200, spicy: 1, veg: true,
        desc: "Basmati rice cooked with whole spices, vegetables & ghee in a light aromatic broth",
        img: "https://images.pexels.com/photos/37303308/pexels-photo-37303308.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
    ],
  },
  {
    id: 6, category: "Desserts",
    items: [
      {
        id: 40, name: "Gulab Jamun", price: 120, spicy: 0, veg: true,
        desc: "Soft khoya dumplings soaked in rose & cardamom sugar syrup, served warm",
        img: "https://images.pexels.com/photos/30577321/pexels-photo-30577321.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 41, name: "Gajar Ka Halwa", price: 150, spicy: 0, veg: true,
        desc: "Slow-cooked carrot pudding with ghee, full-fat milk, sugar, cardamom & cashews",
        img: "https://images.pexels.com/photos/20446403/pexels-photo-20446403.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 42, name: "Rasmalai", price: 170, spicy: 0, veg: true,
        desc: "Soft cottage cheese patties soaked in chilled saffron-cardamom milk with pistachios",
        img: "https://images.unsplash.com/photo-1708782343877-fc452a98eb02?w=800&q=80"
      },
      {
        id: 43, name: "Jalebi & Rabri", price: 180, spicy: 0, veg: true,
        desc: "Crispy spiral jalebis dipped in sugar syrup, served with thick saffron rabri",
        img: "https://images.pexels.com/photos/34964936/pexels-photo-34964936.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 44, name: "Kheer", price: 140, spicy: 0, veg: true,
        desc: "Creamy rice pudding slow-cooked with full-fat milk, cardamom, saffron & dry fruits",
        img: "https://images.pexels.com/photos/33430555/pexels-photo-33430555.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
    ],
  },
  {
    id: 7, category: "Drinks",
    items: [
      {
        id: 46, name: "Mango Lassi", price: 140, spicy: 0, veg: true,
        desc: "Chilled yogurt drink blended with sweet Alphonso mango pulp & a pinch of cardamom",
        img: "https://images.pexels.com/photos/14930476/pexels-photo-14930476.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 47, name: "Sweet Lassi", price: 100, spicy: 0, veg: true,
        desc: "Classic chilled yogurt drink with sugar, rose water & a sprinkle of cardamom",
        img: "https://images.pexels.com/photos/4475024/pexels-photo-4475024.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 48, name: "Chaas", price: 100, spicy: 0, veg: true,
        desc: "Refreshing yogurt drink with black salt, roasted cumin & fresh mint",
        img: "https://images.pexels.com/photos/20689315/pexels-photo-20689315.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 51, name: "Shikanji", price: 80, spicy: 0, veg: true,
        desc: "North Indian lemonade with black salt, roasted cumin, ginger & fresh mint",
        img: "https://images.pexels.com/photos/36268523/pexels-photo-36268523.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 52, name: "Rose Sharbat", price: 90, spicy: 0, veg: true,
        desc: "Chilled rose syrup drink with basil seeds (sabja) & a squeeze of lemon",
        img: "https://images.pexels.com/photos/37090689/pexels-photo-37090689.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
    ],
  },
];

const events = [
  { id: 1, title: "Diwali Gala Dinner",       date: "2025-10-20", time: "7:00 PM",  desc: "Celebrate the Festival of Lights with a lavish 5-course Diwali feast, live classical music & diyas.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Diwali_2012.jpg/800px-Diwali_2012.jpg", seats: 80 },
  { id: 2, title: "Holi Brunch Fiesta",       date: "2025-09-14", time: "11:00 AM", desc: "A vibrant Sunday brunch with live chaat stations, thandai bar & traditional Holi sweets.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/A_group_of_people_playing_Holi.jpg/800px-A_group_of_people_playing_Holi.jpg", seats: 60 },
  { id: 3, title: "Chef's North Indian Tasting", date: "2025-08-22", time: "7:30 PM", desc: "An exclusive 7-course journey through Awadhi, Punjabi & Mughlai cuisines by Head Chef Arjun Sharma.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Chicken_curry_%28Hindi%3A_%E0%A4%AE%E0%A5%81%E0%A4%B0%E0%A5%8D%E0%A4%97%E0%A4%BC_%E0%A4%95%E0%A4%B0%E0%A5%80%29.jpg/800px-Chicken_curry_%28Hindi%3A_%E0%A4%AE%E0%A5%81%E0%A4%B0%E0%A5%8D%E0%A4%97%E0%A4%BC_%E0%A4%95%E0%A4%B0%E0%A5%80%29.jpg", seats: 16 },
  { id: 4, title: "Biryani & Qawwali Night",  date: "2025-08-30", time: "8:00 PM",  desc: "Savour our signature Lucknowi dum biryanis while enjoying live Qawwali performances.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Biryani_at_Bawarchi.jpg/800px-Biryani_at_Bawarchi.jpg", seats: 50 },
  { id: 5, title: "Lohri Bonfire Dinner",     date: "2025-09-13", time: "7:00 PM",  desc: "Celebrate Lohri with a Punjabi feast — sarson ka saag, makki ki roti, gajak & rewri around the bonfire.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Sarson_ka_saag.jpg/800px-Sarson_ka_saag.jpg", seats: 60 },
];

const restaurantInfo = {
  name: "The Zafran Tales",
  phone: "+91 87756 13062",
  address: "GR-05, GF, WorldMark Gurgaon, Maidawas Rd, Sector 65, Gurugram, Haryana, 122102",
  email: "namaste@zafrantales.com",
};

app.get("/api/info", (req, res) => res.json(restaurantInfo));

let nextId = 1;

app.get("/api/menu", (req, res) => res.json(menu));
app.get("/api/events", (req, res) => res.json(events));
app.get("/api/reservations", (req, res) => res.json(reservations));

app.post("/api/reservations", (req, res) => {
  const { name, email, phone, date, time, guests, specialRequests } = req.body;
  if (!name || !email || !date || !time || !guests)
    return res.status(400).json({ error: "Missing required fields" });
  const reservation = { id: nextId++, name, email, phone, date, time, guests, specialRequests, status: "Confirmed", createdAt: new Date() };
  reservations.push(reservation);
  res.status(201).json(reservation);
});

app.delete("/api/reservations/:id", (req, res) => {
  const id = parseInt(req.params.id);
  reservations = reservations.filter((r) => r.id !== id);
  res.json({ message: "Reservation cancelled" });
});

app.listen(5000, () => console.log("🍽 The Zafran Tales server running on http://localhost:5000"));
