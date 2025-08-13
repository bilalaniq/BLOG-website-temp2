

## Stage 1: Build backend
FROM python:3.11.8-slim

WORKDIR /app/

## Copy necessary backend files
COPY backend/main.py backend/requirements.txt ./
## Testing COPY
## COPY backend/main.py backend/requirements.txt backend/.env ./

## Install required Python packages
RUN pip install --no-cache-dir -r requirements.txt

## Install required packages (linux) including GPG
RUN apt-get update && \
    apt-get install -y --no-install-recommends gnupg2 && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

## Copy entrypoint script and make it executable
COPY entrypoint.sh .
RUN chmod +x /app/entrypoint.sh

## Expose port 8000
EXPOSE 8000

## Start the app
CMD ["/app/entrypoint.sh"]