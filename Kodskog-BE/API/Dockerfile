FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Copy the application files to the container
COPY app.py /app/

# Install the required dependencies
RUN pip install Flask python-keycloak requests

# Expose the application port
EXPOSE 5000

# Start the application
CMD ["python", "app.py"]
