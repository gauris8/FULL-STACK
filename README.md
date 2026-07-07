# 🍔 Food Delivery MERN Application

A full-stack **Food Delivery Web Application** built using the **MERN Stack**. The application consists of a **customer-facing frontend**, an **admin dashboard**, and a **backend API**. Users can browse food items, manage their cart, securely place orders using Stripe, while administrator can manage food listings and customer orders through a dedicated dashboard.

---

## 🚀 Features

### 👤 Customer

- Browse food items by category
- View available food items
- Add and remove items from cart
- User registration and login
- JWT-based authentication
- Secure Stripe payment integration
- View previous orders
- Order payment verification

### 🛠️ Admin

- Add new food items
- Upload food images
- View all food items
- Remove food items
- View customer orders
- Update order status

### ⚙️ Backend

- REST APIs using Express.js
- MongoDB integration with Mongoose
- JWT authentication
- Password hashing with bcrypt
- Image upload using Multer
- Stripe Checkout payment flow


---

# 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Axios
- React Toastify

### Backend
- Node.js
- Express.js
- JWT
- bcrypt
- Multer
- Stripe

### Database
- MongoDB
- Mongoose

---

# 📁 Project Structure

```text
FOOD-DEL/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── admin/
│   ├── public/
│   ├── src/
│   └── package.json
│
└── README.md
```

---

# 🏗️ System Architecture

```text
                     Customer Frontend
                             │
                             │
                     HTTP Requests
                             │
        ┌────────────────────▼────────────────────┐
        │          Express.js Backend             │
        │                                         │
        │  • Authentication (JWT)                 │
        │  • Food APIs                            │
        │  • Cart APIs                            │
        │  • Order APIs                           │
        │  • Stripe Payment                       │
        └────────────────────┬────────────────────┘
                             │
                      MongoDB Database
                             ▲
                             │
                     Admin Dashboard
```

---

# 📌 Backend Overview

The backend follows a modular structure using **Express.js**.

### Main Server

```text
backend/server.js
```

### API Routes

| Route | Description |
|-------|-------------|
| `/api/user` | User authentication |
| `/api/food` | Food management |
| `/api/cart` | Shopping cart |
| `/api/order` | Orders & payments |
| `/images` | Static image hosting |

---

# 📡 API Endpoints

## User

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/user/register` | Register a user |
| POST | `/api/user/login` | Login user |

## Food

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/food/add` | Add food item |
| GET | `/api/food/list` | Get all food items |
| POST | `/api/food/remove` | Remove food item |

## Cart

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/cart/add` | Add item to cart |
| POST | `/api/cart/remove` | Remove item from cart |
| POST | `/api/cart/get` | Fetch user cart |

## Orders

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/order/place` | Place order |
| POST | `/api/order/verify` | Verify payment |
| POST | `/api/order/userorders` | User order history |
| GET | `/api/order/list` | Admin order list |
| POST | `/api/order/status` | Update order status |

---

# 🔐 Authentication

The application uses **JWT (JSON Web Tokens)** for authentication.

- Users receive a JWT after successful login or registration.
- The frontend stores the token in **localStorage**.
- Protected APIs verify the token using authentication middleware before processing requests.
- Cart and order operations are accessible only to authenticated users.

---

# 🗄️ Database Models

## User

```text
name
email
password
cartData
```

## Food

```text
name
description
price
image
category
```

## Order

```text
userId
items
amount
address
status
date
payment
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the **backend** folder.

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

---

# 🚀 Installation & Setup

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/FOOD-DEL.git
cd FOOD-DEL
```

---

## 2. Backend

```bash
cd backend
npm install
npm run server
```

Runs on:

```
http://localhost:4000
```

---

## 3. Frontend

Open another terminal.

```bash
cd frontend
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

## 4. Admin Dashboard

Open another terminal.

```bash
cd admin
npm install
npm run dev
```

Runs on:

```
http://localhost:5174
```

---

# 🔄 Application Workflow

1. Admin adds food items through the dashboard.
2. Food details are stored in MongoDB.
3. Customers browse available food items.
4. Customers add items to their cart.
5. Users register or log in.
6. JWT is generated after authentication.
7. Protected APIs validate the JWT.
8. Customer places an order.
9. Stripe processes the payment.
10. Payment is verified.
11. Admin manages and updates order status.

---

# 🌱 Future Improvements

- Admin authentication
- Search and filtering
- Order cancellation
- Loading skeletons
- Stripe Webhooks
- Email notifications
- Deployment configuration

---

# 👩‍💻 Author

**Gauri S**

GitHub: https://github.com/gauris8
