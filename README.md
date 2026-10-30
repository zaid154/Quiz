# 🧠 QuizMaster — Full-Stack Interactive Assessment Platform

> A comprehensive, production-grade **MERN** quiz and assessment platform with timed questions, category filters, real-time scoring, detailed solution analysis, and admin question management.

---

## 👨‍💻 Developer & Author

* **Developer Name**: Mohd Zaid
* **Portfolio**: [zaid-pro.vercel.app](https://zaid-pro.vercel.app/)
* **GitHub**: [github.com/zaid154](https://github.com/zaid154)
* **LinkedIn**: [linkedin.com/in/mohd-zaid-794090231/](https://www.linkedin.com/in/mohd-zaid-794090231/)
* **Email**: [zaidm1323@gmail.com](mailto:zaidm1323@gmail.com)

---

## 🌟 Key Features

- ⏱️ **Timed Quizzes & Assessments**: Real-time countdown timer with auto-submission on timeout.
- 🎯 **Multi-Domain Categories**: Quizzes spanning Web Development, JavaScript, React, Node.js, DSA, Aptitude, and General Tech.
- 📊 **Instant Results & Performance Analytics**: Score percentage, correct vs. incorrect breakdown, and detailed explanations.
- 🔐 **Authentication & Role-Based Access**: Secure JWT authentication with Bcrypt password hashing.
- 🛡️ **Admin Management Suite**: Create, update, categorize, and delete questions and manage quiz settings.
- 💳 **Razorpay Integration Ready**: Monetization support for premium certification quizzes.

---

## 🛠️ Technology Stack

| Layer | Technologies Used |
|---|---|
| **Frontend** | React 19, React Router v7, Tailwind CSS v4, Lucide Icons, Axios |
| **Backend** | Node.js, Express.js, Helmet, Express-Rate-Limit, Express-Validator |
| **Database** | MongoDB & Mongoose ODM |
| **Authentication** | JSON Web Tokens (JWT) & Bcrypt.js |
| **Payments** | Razorpay Node SDK |

---

## 📁 Project Structure

```
Quiz/
├── server/
│   └── src/
│       ├── controllers/   # Quiz & Auth controllers
│       ├── models/        # Question, User, Score models
│       ├── routes/        # API routes
│       └── server.js      # Express server entry point
├── src/                   # React frontend pages & components
├── index.html
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Frontend runs on `http://localhost:5173` and Backend on `http://localhost:5000`.

### Default Admin Credentials
- **Email**: `zaidquiz@gmail.com`
- **Password**: `Zaid@123456`
