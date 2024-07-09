# FROM node:18.2.0-alpine3.15

# WORKDIR /app/auth-client
# RUN npm install
# COPY . .

# EXPOSE 3000 

# CMD ["npm", "run","dev"]
FROM node:16.16.0-alpine

WORKDIR /app
COPY ./auth-client /app/
RUN npm i vite
# Expose port 3000 for Vite development server
EXPOSE 8000

CMD ["npm", "run", "dev"]
