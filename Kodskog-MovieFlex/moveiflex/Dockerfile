# Use the official OpenJDK 17 base image
FROM openjdk:17

# Set the working directory inside the container
WORKDIR /app

# Copy the Maven wrapper files and POM file
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

# Clean the target directory
RUN ./mvnw clean

# Download the Maven dependencies (skipping tests)
RUN ./mvnw dependency:go-offline -DskipTests=true

# Copy the application source code
COPY src src

# Package the application (skipping tests)
RUN ./mvnw package -DskipTests=true

EXPOSE 5432

# Specify the entry point for running the Spring Boot application
ENTRYPOINT ["java", "-jar", "target/movieflex-0.0.1-SNAPSHOT.jar"]
