# Use the official PostgreSQL image from Docker Hub
FROM postgres:latest

# Copy the SQL script to initialize the database and create the table
COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432
