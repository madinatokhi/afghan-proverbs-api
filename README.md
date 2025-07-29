# afghan-proverbs-api
# 🇦🇫 Afghan Proverbs & Sayings API

This is a simple RESTful API that stores and serves traditional Afghan proverbs and sayings in **Dari**, **Pashto**, and **English**.

---

 📦 Features

- ✅ CRUD operations (Create, Read, Update, Delete)
- 🎯 Filter proverbs by category (e.g., wisdom, humor, culture)
- 🔀 Get a random proverb
- 🧾 JSON-based data storage (ideal for learning & prototyping)

---

 🧠 Data Model

Each proverb has the following structure:

```json
{
  "id": 123,
  "textDari": "مثل در فارسی",
  "textPashto": "متل په پښتو",
  "translationEn": "Proverb in English",
  "meaning": "Interpretation or explanation",
  "category": "wisdom"
}
| Method | Endpoint               | Description                |
| ------ | ---------------------- | -------------------------- |
| GET    | `/proverbs`            | Get all proverbs           |
| GET    | `/proverbs?category=x` | Get proverbs by category   |
| GET    | `/proverbs/:id`        | Get a single proverb by ID |
| GET    | `/proverbs/random`     | Get a random proverb       |
| POST   | `/proverbs`            | Add a new proverb          |
| PUT    | `/proverbs/:id`        | Update a proverb by ID     |
| DELETE | `/proverbs/:id`        | Delete a proverb by ID     |

git clone https://github.com/yourusername/afghan-proverbs-api.git
cd afghan-proverbs-api
npm install
node app.js

{
  "id": 5,
  "textDari": "آب که از سر گذشت، چه یک گز چه صد گز",
  "textPashto": "اوبه چې له سره واوړي، که يو گز وي که سل",
  "translationEn": "Once the water passes your head, it doesn’t matter if it’s a foot or a hundred.",
  "meaning": "When something bad has already happened, the extent no longer matters.",
  "category": "wisdom"
}

👩‍💻 Author
Madina Tokhi – Computer Science Student
📚 Educational Project for learning REST API & Node.js

📜 License
This project is open source and free to use for educational purposes.
