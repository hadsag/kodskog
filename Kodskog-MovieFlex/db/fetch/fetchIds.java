import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.concurrent.TimeUnit;

import org.json.JSONArray;
import org.json.JSONObject;

public class fetchIds {
    private static final String CSV_FILE_PATH = "movies.csv";
    private static final String JSON_FILE_PATH = "movies.json";

    // Database connection parameters
    private static final String DB_URL =  System.getenv("DB_URL"); //"jdbc:postgresql://postgres-mf:5432/moviedb";
    private static final String DB_USER = System.getenv("DB_USER");
    private static final String DB_PASSWORD = System.getenv("DB_PASSWORD");

    public static void main(String[] args) {
        try {
            // Add a sleep delay before attempting to connect to the database
            TimeUnit.SECONDS.sleep(10);  // Sleep for 10 seconds (adjust as needed)

            // Establish a database connection
            Connection connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);

            // Read and insert IMDb IDs from the CSV file
            readAndInsertImdbIdsFromCsv(connection);

            // Close the database connection
            connection.close();
        } catch (SQLException | IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }

    private static void readAndInsertImdbIdsFromCsv(Connection connection) throws IOException, SQLException {
        String line;
        try (BufferedReader reader = new BufferedReader(new FileReader(CSV_FILE_PATH))) {
            while ((line = reader.readLine()) != null) {
                // Remove any leading or trailing whitespace, if needed
                String imdbId = line.trim();

                // Insert IMDb ID into the database
                insertImdbId(connection, imdbId);
            }
        }
    }


    private static void readAndInsertImdbIdsFromJson(Connection connection) throws IOException, SQLException {
        try (BufferedReader reader = new BufferedReader(new FileReader(JSON_FILE_PATH))) {
            StringBuilder jsonContent = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                jsonContent.append(line);
            }

            JSONObject jsonObject = new JSONObject(jsonContent.toString());
            JSONArray moviesArray = jsonObject.getJSONArray("movies");

            for (int i = 0; i < moviesArray.length(); i++) {
                String imdbId = moviesArray.getString(i);

                // Insert IMDb ID into the database
                insertImdbId(connection, imdbId);
            }
        }
    }

    private static void insertImdbId(Connection connection, String imdbId) throws SQLException {
        String sql = "INSERT INTO movieids (movieid) VALUES (?)";
        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setString(1, imdbId);
            preparedStatement.executeUpdate();
        }
    }
}
