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

