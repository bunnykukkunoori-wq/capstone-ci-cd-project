# CI/CD Pipeline for 2-Tier Web Application (Docker + GitHub Actions)

## Project Overview
This project demonstrates a complete CI/CD system that automatically tests, builds, scans and    deploys a simple 2-tier web application using:

• Docker

• Docker Compose

• GitHub Actions

• Staging environment

The application consists of:

• Backend: Node.js (Express)

• Frontend: Static HTML/CSS/JavaScript

• Database: PostgreSQL

## Architecture Overview
### 2-Tier Application Architecture
• Frontend: Static web application (HTML/CSS/JavaScript) served via Nginx

• Backend: Node.js (Express) REST API

• Database: PostgreSQL

• CI/CD: GitHub Actions

• Containerization: Docker & Docker Compose

```
User
 │
 ▼
Frontend (Nginx)
 │
 ▼
Backend (Express API)
 │
 ▼
PostgreSQL Database
```
## Tools & Technologies Used:
• Git & GitHub – Source control

• Docker – Containerization

• Docker Compose – Multi-container orchestration

• GitHub Actions – CI/CD automation

• Node.js (Express) – Backend API

• HTML / CSS / JS – Frontend

• PostgreSQL – Database

• Trivy – Security vulnerability scanning

• Ubuntu Linux – CI runner environment

## Project Structure
```
ci-cd-project/
│
├── .github/
│   └── workflows/
│       └── ci-cd.yml                # GitHub Actions CI/CD pipeline
│
├── backend/
│   ├── tests/
│   │   └── api.tests.js              # Backend unit/API tests
│   │
│   ├── db.js                         # Database connection logic
│   ├── server.js                    # Express server (health API)
│   ├── package.json                 # Backend dependencies & scripts
│   └── Dockerfile                   # Backend Dockerfile
│
├── frontend/
│   ├── public/
│   │   └── index.html               # UI (table-based health status)
│   │
│   ├── src/
│   │   ├── App.js                   # Optional frontend JS logic
│   │   └── index.js
│   │
│   ├── nginx.conf                   # Nginx config for frontend
│   ├── package.json                 # Frontend metadata (optional)
│   └── Dockerfile                   # Frontend Dockerfile
│
├── docker-compose.yml               # Multi-container orchestration
├── deploy.sh                        # Deployment automation script
├── .env                             # Environment variables (staging)
├── README.md                        # Project documentation
```
## Backend Application (Express)
### Exposes:
• / → Backend status

• /health → Health check endpoint

### Uses environment variables for:
• Database host

• Database credentials

• Port

## Frontend Application
• Static HTML page

• Displays backend health status in table format

• Served using Nginx

• Fetches /health endpoint from backend

## Docker Compose (Local Development)

### Features Implemented

• Application services

• PostgreSQLdatabase

• Custom network

• Persistent volume

• Health checks

### 1. Start Application Locally
```
docker compose up -d
```
![CI-CD Project](./screenshots/ci%20-%20cd%20project.png)

### 2. Build all application images (frontend + backend)
```
docker compose build
```
![CI-CD Project](./screenshots/ci-cd%20project.png)

### 3. Check Running Containers
```
docker ps
```
![CI-CD Project Screenshot](./screenshots/ci-cd%20project2.png)

### 4. Stop Application
```
docker compose down
```
![CI-CD Project Screenshot](./screenshots/ci-cd%20project3.png)

## CI/CD Pipeline (GitHub Actions)

### Pipeline Stages

1. Build Docker Images

2. Run Unit Tests

3. Scan Images (Trivy)

4. Push Images to Docker Hub

5. Deploy to Staging

6. Deploy to Production (Approval Required)
