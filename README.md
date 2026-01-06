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
