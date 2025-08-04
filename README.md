# EBook-backend
Implemented scalable back-end services for an Ebook web application, including JWT-based authentication, role-based access control, and cloud database integration.

## 🧾 Introduction

This is the backend service for an Ebook website built using ExpressJS and MongoDB. It supports user registration, authentication, and book browsing. Users can search and access Ebook information, while administrators can manage book data and user roles. The system uses JWT-based authentication and role-based access control for secure API access.

---

## 💻 Tech Stack

![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)&nbsp;
![ExpressJS](https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white)&nbsp;
![MongoDB](https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white)&nbsp;
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)


---

## 🚀 Features

### 🔐 Authentication
- User registration and login using JWT
- Default role: `GUEST`
- `ADMIN` role is manually assignable via database

### 👥 User Roles
- **Guest**: Can browse book, place orders, read book, leave reviews
- **Admin**: Can manage books, change category/author, add chapter, update order statuses.

### 🍽️ Orders
- Place an order with multiple items
- View own order history
- Manager can view all orders, update order status 

### 📅 Books
- User can view chapter, read chapter
- Admins can create, edit, or delete books, categories, authors, and chapters

### 📋 Menu & Tables
- Manager can create, update, and delete menu items and restaurant tables

### 📝 Reviews
- Guests can leave reviews for purchased/read books
- Admins can moderate or remove inappropriate reviews

---

## 📚 API List

### Authentication
- `POST /users/register` – Register as a new guest
- `POST /users/login` – Login and receive JWT token

### Orders
- `POST /orders` – Place an order
- `GET /orders/user/:userID` – Get current user's orders
- `GET /orders` – (Admin) View all orders
- `PUT /orders/:id` – (Admin) Update chosen order status

### Order-items
- `GET /order-items` – Get all books in order
- `GET /order-items/:id` – Get 1 books information in order
- `GET /order-items/get/count` – Get the number of book in order
- `POST /order-items` – Create order items
- `PUT /order-items/:id` – (Admin) Update order items status
- `DELETE /order-items/:id` – Delete an order items 
  
### Authors
- `GET /authors` – Get all author information
- `GET /authors/:id` – Get information of an author
- `POST /authors` – (Admin) Create a author
- `DELETE /authors/:id` – (Admin) Delete an author

### Categories
- `GET /categories` – Get all categories
- `GET /categories/:id` – Get 1 category
- `POST /categories` – (Admin) Create categories
- `PUT /categories/:id` – (Admin) Update category
- `DELETE /categories/:id` – (Admin) Delete category

### SubCategories
- `GET /subcategories` – Get all subcategories
- `POST /subcategories/` – Create a subcategory
- `DELETE /subcategories/:id` – Delete a subcategory


### Products
- `GET /products` –  View all books
- `GET /products/recentn` – Get all updated/new books recently
- `GET /products/:id` – Get 1 book information
- `PUT /products/:id` – Update book
- `POST /products` – Create new book
- `DELETE /products/:id` – Delete a book
- `GET /products/get/count` –  Get the number of books in database
---

## ⚙️ Installation Guide

### 1. Clone the repository

```
git clone https://github.com/MNghiazz/EBook-backend.git
cd EBook-backend
```

### 2. Configure MongoDB connection string
Replace your connection string in .env

### 3. Install neccessary library

### 4. Run the application
npm start
Server should start on: `http://localhost:3000`
