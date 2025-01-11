# Airbnb project setup
## **Introduction**
This project is a Full Stack Airbnb built using modern web development technologies. It utilizes the latest **Next.js 13 App Router** for a cutting-edge architecture, integrating server-side rendering (SSR) and client-side rendering (CSR) efficiently. This project replicates core Airbnb functionalities such as property listings, user authentication, booking systems, and more.

---

## **Tech Stack**

### **Frontend**
- **Next.js 13 (App Router)**: A React framework with enhanced routing capabilities and server components for improved performance.
- **React**: For building reusable and dynamic UI components.
- **Tailwind CSS**: Utility-first CSS framework for rapid and responsive styling.

### **Backend**
- **Next.js API Routes**: Used for handling backend API logic.
- **Prisma**: An ORM for seamless interaction with the database.
- **MongoDB**: NoSQL database for storing application data.

### **Authentication**
- **NextAuth**: Secure user authentication with support for OAuth providers and credentials-based logins.

### **Other Tools**
- **Axios**: For handling API requests.
- **TypeScript**: Ensures type safety and better code maintainability.
- **GitHub**: For version control and collaboration.
- **Vercel**: For seamless deployment of the application.

---

## **Features**

### **Frontend**
1. **Reusable Components**:
   - **Navbar**: Persistent navigation bar with category filtering.
   - **Container**: Reusable layout wrapper for consistent UI.
2. **Responsive Design**:
   - Fully optimized for mobile, tablet, and desktop.
3. **Home Page**:
   - Dynamic property listings fetched from the database.
   - Category filtering (e.g., location, price range).

### **Backend**
1. **Database Management with Prisma**:
   - Models for users, properties, bookings, and categories.
   - Easy-to-extend schema for scalability.
2. **Authentication**:
   - User registration and login via NextAuth.
   - OAuth integration (e.g., Google, GitHub) for quick access.
3. **Booking System**:
   - API endpoints for creating, updating, and managing bookings.
4. **Error Handling**:
   - Robust error handling for API responses.
