# Deployment Guide - Khems Cleaning Website

## Overview

| Environment | URL | Docker Compose |
|-------------|-----|----------------|
| Development | https://khems-dev.zunkireelabs.com | `docker-compose.dev.yml` |
| Production | https://khemscleaning.com (TBD) | `docker-compose.yml` |

---

## Quick Deploy

### Deploy to Dev
```bash
./deploy.sh dev
```

### Deploy to Production
```bash
./deploy.sh prod
# Requires confirmation (y/n)
```

---

## What the Deploy Script Does

1. **Build Next.js** - `npm run build` creates static files in `/out`
2. **Build Docker Image** - Packages static files into nginx:alpine container
3. **Stop Old Container** - Gracefully stops existing container
4. **Start New Container** - Launches new version with Traefik labels
5. **Verify** - Confirms container is running

---

## Infrastructure

### Server
- **Type:** VPS (Ubuntu 24.04)
- **Location:** (Your VPS provider)
- **IP:** (Your server IP)

### Reverse Proxy: Traefik
Traefik handles:
- SSL certificates (auto-renewed via Let's Encrypt)
- HTTP → HTTPS redirect
- Domain routing to containers
- Load balancing (if needed)

**Config:** `/home/zunkireelabs/traefik/traefik.yml`

### Docker Network
All web containers must be on the `hosting` network:
```bash
docker network ls | grep hosting
```

---

## Container Details

### Dev Container
- **Name:** `khems-dev`
- **Image:** `khems-web-dev-khems-dev:latest`
- **Port:** 80 (internal, Traefik routes to it)
- **Labels:** Traefik routing for `khems-dev.zunkireelabs.com`

### Prod Container
- **Name:** `khems-prod`
- **Image:** `khems-web-dev-khems-prod:latest`
- **Port:** 80 (internal)
- **Labels:** Traefik routing for `khemscleaning.com`

---

## Monitoring

### Check Container Status
```bash
docker ps | grep khems
```

### View Logs
```bash
# Dev
docker logs khems-dev

# Prod
docker logs khems-prod

# Follow logs
docker logs -f khems-dev
```

### Check Container Health
```bash
docker inspect khems-dev --format='{{.State.Status}}'
```

---

## Troubleshooting

### Container Not Starting
```bash
# Check logs
docker compose -f docker-compose.dev.yml logs

# Check if port conflict
docker ps --format "table {{.Names}}\t{{.Ports}}"
```

### SSL Not Working
```bash
# Check Traefik logs
docker logs traefik

# Verify acme.json has certificates
cat /home/zunkireelabs/traefik/acme.json | jq '.letsencrypt.Certificates'
```

### Site Not Accessible
1. Check DNS points to server IP
2. Check container is on `hosting` network
3. Check Traefik labels are correct
4. Check firewall allows 80/443

### Rebuild from Scratch
```bash
# Stop and remove container
docker compose -f docker-compose.dev.yml down

# Remove image
docker rmi khems-web-dev-khems-dev:latest

# Rebuild
./deploy.sh dev
```

---

## DNS Configuration

### Dev (khems-dev.zunkireelabs.com)
```
Type: A
Name: khems-dev
Value: (Your VPS IP)
TTL: 3600
```

### Prod (khemscleaning.com)
```
# Root domain
Type: A
Name: @
Value: (Your VPS IP)
TTL: 3600

# WWW subdomain
Type: CNAME
Name: www
Value: khemscleaning.com
TTL: 3600
```

---

## Rollback

If a deployment breaks the site:

```bash
# 1. Check running containers
docker ps -a | grep khems

# 2. If old image still exists, revert:
docker compose -f docker-compose.dev.yml down
docker tag khems-web-dev-khems-dev:previous khems-web-dev-khems-dev:latest
docker compose -f docker-compose.dev.yml up -d
```

For critical rollback, keep previous builds:
```bash
# Before deploy, tag current as backup
docker tag khems-web-dev-khems-dev:latest khems-web-dev-khems-dev:backup-$(date +%Y%m%d)
```

---

## Production Checklist

Before deploying to production:

- [ ] All features tested on dev
- [ ] Mobile responsiveness verified
- [ ] Forms working correctly
- [ ] Images optimized
- [ ] SEO meta tags in place
- [ ] Analytics configured
- [ ] DNS pointing to server
- [ ] SSL certificate ready

---

## Maintenance

### Update Dependencies
```bash
npm update
npm audit fix
./deploy.sh dev  # Test on dev first
```

### Server Updates
```bash
sudo apt update && sudo apt upgrade
docker system prune -f  # Clean old images
```

### SSL Renewal
Handled automatically by Traefik + Let's Encrypt. Certificates renew 30 days before expiry.

---

## Emergency Contacts

- **VPS Provider:** (Your provider support)
- **Domain Registrar:** (Your registrar)
- **Developer:** (Your contact)
