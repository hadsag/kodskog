#!/bin/sh

# Set the classpath to include the PostgreSQL JDBC driver
CLASSPATH=".:/usr/src/myapp/postgresql-42.6.0.jar"

# Run your Java application (replace 'MainClass' with the actual name of your main class)
java -cp $CLASSPATH fetchIds
