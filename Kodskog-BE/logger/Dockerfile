FROM ubuntu:latest

# Install necessary packages
RUN apt-get update && \
    apt-get install -y gcc libcurl4-openssl-dev curl

# Copy the C source file into the Docker image
COPY main.c /app/main.c

# Compile the C source file
WORKDIR /app
RUN gcc main.c -o traffic_logger -lcurl

# Command to run the traffic logger
CMD ["./traffic_logger"]
