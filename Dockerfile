# Use the official Node.js image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the application files to the working directory
COPY . .

# Expose the port the server listens on
EXPOSE 3000

# Command to run the application
CMD ["node", "greeting.js"]
