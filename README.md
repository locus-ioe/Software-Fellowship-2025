# Software-Fellowship-2025
This repository contains the Todo app developed as part of the Software Fellowship 2025, organized by [LOCUS](https://locus.com.np/).

Live demonstration: https://todos-locus.vercel.app/

## Requirements
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Usage
1. Clone the repository
```
git clone https://github.com/locus-ioe/Software-Fellowship-2025.git
```

2. Navigate to the repository :open_file_folder:
```
cd Software-Fellowship-2025
```

3. Install the dependencies
```
cd frontend
npm install
cd ../backend
npm install
```

4. Create a `.env` file inside the backend folder with the following credential:
```
#.env
MONGODB_URI="mongodb://0.0.0.0:27017/todos-db"
```

5. Start the backend development server
```
npm run start
```

6. Open a new terminal from `frontend` folder and run the frontend development server
```
npm run dev
```

You can view the application at http://localhost:5173/.
