# 🛒 NextNest – Full Stack E-Commerce App

A modern e-commerce web application built with **Next.js** for the frontend, **NestJS** for the backend, and **PostgreSQL** as the database. This full-stack project allows users to perform complete **CRUD operations** on products, with a clean and responsive UI powered by **Tailwind CSS**.

---

## 🚀 Tech Stack

| Layer       | Technology                         |
|-------------|------------------------------------|
| 💻 Frontend | [Next.js](https://nextjs.org/) + [Tailwind CSS](https://tailwindcss.com/) |
| 🧠 Backend  | [NestJS](https://nestjs.com/) + [Prisma ORM](https://www.prisma.io/) |
| 🗃️ Database | [PostgreSQL](https://www.postgresql.org/) |
| 🌐 API      | RESTful APIs using Fetch            |

---

## 📸 Features

- 🔧 Product Management (Create, Read, Update, Delete)
- 🖼️ Upload & display product images
- 💰 Price and description support
- ⚡ Dynamic routing with client/server rendering
- 🧩 Modular codebase with clear separation of concerns
- 🔄 Real-time data refresh after CRUD operations

---
## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/teja-86/Next-Nest-Project.git
cd Next-Nest-Project
```

### 2. Install Dependencies

#### Frontend
```bash
cd client
npm install
```
#### Backend
```bash
cd ../backend
npm install
```

### 3. Set Up Environment Variables
#### Create a .env file inside the backend/ folder:
```bash
DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/yourdbname"
```

### 4. Run Prisma Setup
```bash
cd backend
npx prisma generate
npx prisma migrate dev --name init
```
### 5. Run the App
#### Start Backend:
```bash
cd backend
npm run start:dev
```
#### Start Frontend:
```bash
cd ../client
npm run dev
```
#### Visit the frontend: http://localhost:3000
 
## 🛠 Future Enhancements

- 🛒 **Shopping Cart System**  
  Allow users to add/remove items to a cart and manage quantities.

- 🧾 **Checkout and Order History**  
  Enable secure checkout with order tracking and purchase history.
  
- 📈 **Admin Dashboard & Analytics**  
  Include product sales stats, user analytics, and dashboard insights.

## 📦 Deployment Suggestions

- **Frontend** → [Vercel](https://vercel.com/)
- **Backend** → [Render](https://render.com/) or [Railway](https://railway.app/)
- **Database** → [Supabase](https://supabase.com/), [Railway PostgreSQL](https://railway.app/), or [PlanetScale](https://planetscale.com/)

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to **fork this repository**, make changes, and submit a **pull request**.  
For significant changes, please open an issue first to discuss what you'd like to improve.
