# DevCon

A MERN stack social media app which is used to connect developers to each other.

### How to get it up and running

First go ahead and clone this repository either by downloading the .ZIP file or by entering `https://github.com/ashraw007/dev-connector.git` into your terminal.

Next to install the dependancies and run this project requires [Node JS & NPM package manager](https://www.nodejs.org) version 10 or higher.

```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

This project also requires a MongoDB database or other NoSQL database in order to store the user & posts data. In order to connect this project to a MongoDB database follow the instructions below.

You will need to create a keys.js in the server config folder with

```
module.exports = {
  mongoURI: 'YOUR_OWN_MONGO_URI',
  secretOrKey: 'YOUR_OWN_SECRET'
};
```
