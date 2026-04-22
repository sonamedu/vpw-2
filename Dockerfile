# Use nginx to serve static files
FROM nginx:alpine

# Copy static files to nginx html directory
COPY . /usr/share/nginx/html

# Move the template to the templates directory for envsubst
COPY default.conf.template /etc/nginx/templates/default.conf.template

# Default PORT is 8080 for Cloud Run if not specified
ENV PORT 8080

# Start nginx
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
