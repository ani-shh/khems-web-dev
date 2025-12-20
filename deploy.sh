#!/bin/bash

# Khems Cleaning Website - Deploy Script
# Usage: ./deploy.sh [dev|prod]

set -e

# Configuration
DEV_URL="khems-dev.zunkireelabs.com"
PROD_URL="khemscleaning.com"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check argument
if [ -z "$1" ]; then
    echo -e "${RED}Error: Please specify environment (dev or prod)${NC}"
    echo "Usage: ./deploy.sh [dev|prod]"
    exit 1
fi

ENV=$1

# Set config based on environment
if [ "$ENV" == "dev" ]; then
    COMPOSE_FILE="docker-compose.dev.yml"
    CONTAINER_NAME="khems-dev"
    SITE_URL=$DEV_URL
elif [ "$ENV" == "prod" ]; then
    COMPOSE_FILE="docker-compose.yml"
    CONTAINER_NAME="khems-prod"
    SITE_URL=$PROD_URL
    echo -e "${YELLOW}⚠️  Deploying to PRODUCTION. Are you sure? (y/n)${NC}"
    read -r confirm
    if [ "$confirm" != "y" ]; then
        echo "Deployment cancelled."
        exit 0
    fi
else
    echo -e "${RED}Error: Invalid environment. Use 'dev' or 'prod'${NC}"
    exit 1
fi

echo -e "${GREEN}🚀 Starting $ENV deployment...${NC}"

# Step 1: Build Next.js
echo -e "${YELLOW}📦 Building Next.js static export...${NC}"
npm run build

# Step 2: Check if out directory exists
if [ ! -d "out" ]; then
    echo -e "${RED}Error: Build failed - 'out' directory not found${NC}"
    exit 1
fi

# Step 3: Build Docker image
echo -e "${YELLOW}🐳 Building Docker image...${NC}"
docker compose -f $COMPOSE_FILE build --no-cache

# Step 4: Stop existing container (if running)
echo -e "${YELLOW}🔄 Restarting container...${NC}"
docker compose -f $COMPOSE_FILE down 2>/dev/null || true

# Step 5: Start new container
docker compose -f $COMPOSE_FILE up -d

# Step 6: Verify container is running
sleep 2
if docker ps | grep -q $CONTAINER_NAME; then
    echo -e "${GREEN}✅ Deployment complete!${NC}"
    echo -e "${GREEN}🌐 Site live at: https://$SITE_URL${NC}"
else
    echo -e "${RED}❌ Container failed to start. Check logs:${NC}"
    docker compose -f $COMPOSE_FILE logs
    exit 1
fi
