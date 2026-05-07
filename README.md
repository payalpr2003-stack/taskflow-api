# TaskFlow API

A RESTful Backend API built using Node.js and Express.js.
# TaskFlow API 🚀

TaskFlow API is a RESTful backend service built using Node.js and Express.js for managing tasks efficiently.  
It provides CRUD operations (Create, Read, Update, Delete) with proper middleware, error handling, and API testing support.


## 🛠️ Tech Stack

- Node.js
- Express.js
- CORS
- Morgan
- Helmet
- Thunder Client / Postman


## 📂 Project Structure

taskflow-api
│
├── screenshots
├── src
│ ├── controllers
│ ├── routes
│ ├── middleware
│ └── utils
│
├── tests
├── server.js
├── package.json
├── package-lock.json
├── README.md
├── .gitignore
└── .env



## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/payalpr2003-stack/taskflow-api.git
2️⃣ Navigate to Project Folder
Bash
cd taskflow-api

3️⃣ Install Dependencies
Bash
npm install

4️⃣ Start Development Server
Bash
npm run dev

Server will run on:
Bash
http://localhost:5000

📡 API Endpoints
Method	 Endpoint     	Description
GET	   /api/tasks     	Get all tasks
GET 	 /api/tasks/:id  	Get single task
POST	 /api/tasks      	 Create task
PUT	   /api/tasks/:id    	Update task
DELETE	/api/tasks/:id  	Delete task


📥 Sample Request Body
Create Task
{
  "text": "Complete internship project"
}
✅ Sample Response
{
  "id": 1,
  "text": "Complete internship project",
  "completed": false,
  "createdAt": "2026-05-07T12:00:00.000Z"
}

🧪 API Testing
API testing was performed using Thunder Client/Postman.
Tested APIs:
GET API
POST API
PUT API
DELETE API

## Features

- Create Task
- Get All Tasks
- Get Single Task
- Update Task
- Delete Task
- Error Handling
- Middleware
- Security Headers


## Screenshots
### Folder Structure

![folder-structure](screenshots/folder-structure.png)

---

### Server Running

![Server Running](screenshots/server-running.png)

---

### GET API

![GET API](screenshots/get-api.png)

---

### POST API

![POST API](screenshots/post-api.png)

---

### PUT API

![PUT API](screenshots/put-api.png)

---

### DELETE API

![DELETE API](screenshots/delete-api.png)

## VERIFY DELETE
![VERIFY DELETE](screenshots/verify-delete.png)

## Technologies Used

- Node.js
- Express.js
- CORS
- Morgan
- Helmet

## API Endpoints

### GET All Tasks

GET /api/tasks

### GET Single Task

GET /api/tasks/:id

### POST Create Task

POST /api/tasks

### PUT Update Task

PUT /api/tasks/:id

### DELETE Task

DELETE /api/tasks/:id

## Run Project

npm install

npm run dev

🔒 Middleware Used

express.json()
cors()
morgan()
helmet()


🚀 Future Improvements

Deploy API on Render
Add MongoDB Database
Implement JWT Authentication
Add Swagger API Documentation
Add Rate Limiting
Add Input Validation using Zod


👨‍💻 Author
Payal Priya
Developed as part of a Full Stack Internship Task using Node.js and Express.js.
