# Node.js Docker App 🌐
Node.js Docker App is a simple HTTP server application built with Node.js. It responds with the message: "Hello, my name is Alexandra". This project is containerized with Docker, making it easy to deploy and run across various environments. 🚀
# Deployment on Render 🌍
Access the deployed app at: https://greeting-js.onrender.com/ 
# Project Structure 📁
The project is organized as follows:
node-app/
│
├── greeting.js       # Main Node.js application code

├── Dockerfile        # Dockerfile to build the container image

├── docker-compose.yml # Docker Compose configuration

└── README.md         # Project documentation
# Requirements 📋
To run this project locally or with Docker, you need:
-Node.js (v14 or higher) 🟢
-Docker 🐳
-Git (to clone the repository)
# How to Clone and Run
To clone this repository to your local machine, use the following commands:
git clone https://github.com/AlexandraN2001/greeting-js.git
cd greeting-js
To run the program locally with Node.js, use:
node greeting.js
# Docker Hub
# Docker Hub Link
Find the Dockerized version of the project at:
https://hub.docker.com/r/alenac07/greeting-js 
# Step 1: Download the Image 📦
Download the image from Docker Hub with the following command:
docker pull alenac07/greeting-js:latest
This will pull the greeting-js image from your Docker Hub repository.
# Step 2: Run the Container 🚀
After downloading the image, you can run the container with this command:
docker run alenac07/greeting-js:latest

