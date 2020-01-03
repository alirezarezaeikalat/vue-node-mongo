1. to install in DevDependecies:
   npm install -D <package name>

2. to start with npm run dev include this in package.json
  "scripts": {
    "start": "node server/app.js",
    "dev": "nodemon server/app.js"
  },