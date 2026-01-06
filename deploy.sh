#!/bin/bash
echo "Deploying Staging..."

docker pull user/backend:staging
docker pull user/frontend:staging

docker-compose down
docker-compose up -d

echo "Running DB migrations..."
docker exec backend node migrate.js || true

echo "Deployment Successful "
