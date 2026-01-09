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

5. Deploy to Development

6. Deploy to Staging

7. Deploy to Production (Approval Required)

### CI/CD END-TO-END WORKFLOW EXPLANATION:
#### Stage 1: Build Docker Images
##### Purpose:
• Convert application source code into Docker images for:

   1. Backend (Node.js / Express)

   2. Frontend (React / Static site)
##### What Happens
• GitHub Actions checks out the source code

• Docker builds images using Dockerfiles

• Multi-stage builds reduce image size

• Layer caching improves build speed
#### Stage 2: Run Unit Tests
##### Purpose:
• Ensure code quality and prevent broken builds.
##### What Happens
• Tests run inside containers (same environment as production)

• Backend tests validate:

   1. API routes

   2. Database connectivity

• Frontend tests (optional)

#### Stage 3: Scan Docker Images (Trivy)
##### Purpose:
• Detect security vulnerabilities before deployment.
##### What Happens
• Trivy scans images for:

  1. OS vulnerabilities

  2. Dependency issues

  3. CVEs (Critical/High)

#### Stage 4: Push Images to Docker Hub
##### Purpose:
• Store versioned images in a central registry.
##### What Happens
• Pipeline logs into Docker Hub using secrets

• Images are tagged and pushed

#### Stage 5: Deploy to Development
##### Purpose:
• Deploy latest changes for developer validation.
##### What Happens
• Containers deployed using docker-compose

• Development environment uses:

   1. .env.development

   2. Debug settings enabled

#### Stage 6: Deploy to Staging
##### Purpose:
• Pre-production testing environment.
##### What Happens
• Uses .env.staging

• Mirrors production closely

• Database migrations executed

• Health checks performed

#### Stage 7: Deploy to Production (Manual Approval)
##### Purpose:
• Requires manual approval in GitHub Actions

• Uses .env.production

• Runs on protected environment

• Zero-downtime deployment 

### Final CI/CD Flow Diagram
```
Code Push
   ↓
Build Images
   ↓
Run Tests
   ↓
Trivy Scan
   ↓
Push to Docker Hub
   ↓
Deploy to Development
   ↓
Deploy to Staging
   ↓
Manual Approval
   ↓
Deploy to Production
```
### Expected Output
![CI-CD Project Screenshot](screenshots/ci-cd%20project7.png)

## Local Development URLs (Localhost)

### Frontend UI( User Interface) URL
```
http://localhost:3000
```
![CI-CD Project Screenshot 4](screenshots/ci-cd%20project4.png)

### Backend API (root) URL
```
http://localhost:5000
```
![CI-CD Project Screenshot 6](screenshots/ci-cd%20project6.png)

### Backend Health Check
```
http://localhost:5000/health
```
![CI-CD Project Screenshot 5](screenshots/ci-cd%20project5.png)



