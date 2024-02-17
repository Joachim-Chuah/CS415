# Use the official Node.js 14 as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to work directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application's code
COPY . .

# Make port 3000 available outside this container
EXPOSE 3000

# Run the app when the container launches
CMD ["node", "index.js"]
