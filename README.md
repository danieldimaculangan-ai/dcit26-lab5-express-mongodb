
# DCIT 26 Laboratory 5: Express and MongoDB

## Description
A Student Records REST API built using Node.js, Express,
MongoDB, and Mongoose.

## Requirements
- Node.js and npm
- MongoDB Community Server
- MongoDB Compass (optional)

## Installation
1. Clone or download this repository.
2. Open the project folder in VS Code.
3. Install the dependencies:

   npm install

4. Create a .env file using .env.example as a guide.
5. Make sure MongoDB is running locally.
6. Start the development server:

   npm run dev

The API runs at http://localhost:5000.

## API Routes

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/health | Check API status |
| GET | /api/students | Get all students |
| GET | /api/students/:id | Get one student |
| POST | /api/students | Create a student |
| PUT | /api/students/:id | Update a student |
| DELETE | /api/students/:id | Delete a student |

## Sample Request Body

{
  "fullName": "Alex Santos",
  "course": "BSIT",
  "yearLevel": 2,
  "section": "IT-2A"
}
