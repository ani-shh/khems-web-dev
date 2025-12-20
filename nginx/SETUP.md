# Nginx Setup Instructions

## One-time Server Setup

### 1. Copy config files to Nginx
```bash
sudo cp nginx/khems-dev.conf /etc/nginx/sites-available/khems-dev
sudo cp nginx/khems-prod.conf /etc/nginx/sites-available/khems-prod
```

### 2. Enable sites
```bash
sudo ln -s /etc/nginx/sites-available/khems-dev /etc/nginx/sites-enabled/
sudo ln -s /etc/nginx/sites-available/khems-prod /etc/nginx/sites-enabled/
```

### 3. Create web directories
```bash
sudo mkdir -p /var/www/khems-dev
sudo mkdir -p /var/www/khems-prod
sudo chown -R www-data:www-data /var/www/khems-dev /var/www/khems-prod
```

### 4. Generate SSL certificates
```bash
# Dev
sudo certbot certonly --nginx -d khems-dev.zunkireelabs.com

# Prod (when ready)
sudo certbot certonly --nginx -d khemscleaning.com -d www.khemscleaning.com
```

### 5. Test and reload Nginx
```bash
sudo nginx -t
sudo systemctl reload nginx
```

## Deployment

After setup, simply run:
```bash
./deploy.sh dev   # Deploy to dev
./deploy.sh prod  # Deploy to production
```
