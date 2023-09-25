# Use an official OpenJDK 20 runtime as a parent image
FROM openjdk:20

# Create a directory for your application and set it as the working directory
WORKDIR /usr/src/myapp

# Copy your Java source code, the PostgreSQL JDBC driver, and the JSON-java library JAR into the container
COPY *.java ./
COPY postgresql-42.6.0.jar ./
COPY movies.csv ./
COPY movies.json ./
COPY json.jar ./ 

# Compile your Java code with both JAR files in the classpath
RUN javac -cp ".:postgresql-42.6.0.jar:json.jar:" fetchIds.java


# Define an entrypoint script to run your Java application
COPY entrypoint.sh ./
RUN chmod +x entrypoint.sh

# Specify the entrypoint script as the command to run
CMD ["./entrypoint.sh"]
