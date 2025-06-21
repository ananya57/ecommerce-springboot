Full Stack E-Commerce Web Application
This is a full-stack eCommerce web application built using React(frontend), Java Spring Boot with Maven(backend), and MySQL (database). 
It allows users to browse products, add them to a cart, register or log in, and place orders.
Table of Contents
1. Tech Stack
2. Features
3. Project Structure
4. How to Run the Project
5. Database Setup
6. Developer Info

 Tech Stack
- Frontend: React.js, HTML, CSS, JavaScript  
- Backend: Java, Spring Boot, Maven  
- Database: MySQL
  
Features
-  User Registration and Login
-  Product Listing
-  Add to Cart
-  Organized project structure

 Project Structure
ecommerce-springboot/ 
├── frontend/         # React application 
├── src/              # Java backend source code 
├── pom.xml           # Maven configuration 
├── README.md         # This file

How to Run the Project

 1. Clone the Repository
git clone https://github.com/ananya57/ecommerce-springboot.git

 2. Run Frontend (React)
cd frontend npm install npm start

 3. Run Backend (Spring Boot)
./mvnw spring-boot:run

 4. Configure application.properties
properties
spring.datasource.url=jdbc:mysql://localhost:3306/ecommercedb1
spring.datasource.username=root
spring.datasource.password=root


 Database Setup
1. Open MySQL
2. Create a database:
CREATE DATABASE ecommerce;
3. (Optional) Import schema from a schema.sql file if provided

 Developer Info
Ananya N
📧 ananyan075@gmail.com
🌐 GitHub : ananya57


 
