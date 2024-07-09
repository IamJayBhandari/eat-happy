# FROM node:18.2.0-alpine3.15

# WORKDIR /app/auth-server
# RUN npm install
# COPY . . 

# EXPOSE 3001 

# CMD ["npm", "run", "start-dev"] 

# Use the official Node.js Alpine image
FROM node:18.2.0-alpine3.15

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY ./auth-server/package*.json ./

# Install nodemon globally
RUN npm install -g nodemon

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY ./auth-server .

# Expose port 8000
EXPOSE 8000

# Command to run the application in development mode
CMD ["npm", "run", "start-dev"]
