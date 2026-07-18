# 🔐 Auth Dashboard App (React)

A simple and clean authentication-based dashboard application built with **React**.  
This project demonstrates a complete frontend authentication flow using modern React tools and best practices.

---
Live - https://agent-69c4d76a0ecb8f--auth-dashboard-application.netlify.app/login

## Features

- User **Signup & Login**
- Form validation using **React Hook Form**
- **Protected Routes** (Dashboard accessible only after login)
- Global authentication state using **Context API**
- Auth persistence using **localStorage**
- Clean and responsive UI with **SCSS**
- Logout functionality with redirect
- Simple, readable, and scalable folder structure

---

## Tech Stack

- **React**
- **React Router DOM**
- **Context API**
- **React Hook Form**
- **SCSS (Sass)**
- **Vite** (for fast development)

---

## 📁 Project Structure

src/
│
├── components/
│ ├── Navbar.jsx
│ └── ProtectedRoute.jsx
│
├── context/
│ └── AuthContext.jsx
│
├── pages/
│ ├── Login.jsx
│ ├── Signup.jsx
│ └── Dashboard.jsx
│
├── styles/
│ ├── global.scss
│ ├── navbar.scss
│ ├── auth.scss
│ └── dashboard.scss
│
├── App.jsx
├── main.jsx


---

## Authentication Flow

1. User signs up with email & password  
2. User data is saved in **localStorage**
3. On login, credentials are validated against saved data
4. Auth state is managed globally using **Context API**
5. Dashboard is protected using a custom **ProtectedRoute**
6. User stays logged in even after page refresh

---

## Getting Started

### 1️⃣ Clone the repository
```bash
git clone <your-repo-url>

### 2️⃣ Install dependencies
npm install

### 3️⃣ Start the development server
npm run dev
