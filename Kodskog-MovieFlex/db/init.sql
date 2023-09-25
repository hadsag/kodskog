-- Connect to the 'moviedb' database
\c moviedb;

-- Create the 'movieids' table
CREATE TABLE movieids (
    id SERIAL PRIMARY KEY,
    movieid VARCHAR(255)
);
