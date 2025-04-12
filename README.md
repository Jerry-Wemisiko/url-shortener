# 🔗 Node.js URL Shortener

A simple and efficient URL Shortener built with **Node.js**, **Express**, and **MongoDB**. This app allows users to shorten long URLs and redirect using the generated short URLs.

## 🚀 Features

- Shorten long URLs
- Redirect short URLs to original destinations
- Custom base URL support
- API endpoint for shortening
- MongoDB-based persistence
- Built-in validation
- RESTful architecture

## 🛠 Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB (via Mongoose)
- **Validation**: validator.js
- **Environment**: dotenv

## Project Structure

url-shortener/
├── config/              # Configuration files (env, db, etc.)
│   └── db.js
│   └── index.js
├── controllers/         # Business logic
│   └── urlController.js
├── models/              # Database models
│   └── Url.js
├── routes/              # Route definitions
│   └── urlRoutes.js
├── middlewares/         # Custom middleware (error handling, auth, etc.)
│   └── errorHandler.js
├── services/            # Services (e.g., URL generation, Redis, etc.)
│   └── urlService.js
├── utils/               # Utility functions (e.g., ID generator)
│   └── generateShortId.js
├── .env                 # Environment variables
├── .gitignore
├── package.json
├── server.js            # App entry point
└── README.md


## ⚙️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/Jerry-Wemisiko/url-shortener.git
cd url-shortener
