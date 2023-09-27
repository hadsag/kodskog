#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <curl/curl.h>

// Define the URL of the REST API endpoint
#define API_URL "http://example.com/api/log"

// Function to log traffic data to the REST API
void log_traffic(const char *user_agent, const char *ip_address) {
    CURL *curl;
    CURLcode res;
    char post_data[256];

    // Initialize CURL
    curl_global_init(CURL_GLOBAL_DEFAULT);
    curl = curl_easy_init();

    if(curl) {
        // Format the POST data
        snprintf(post_data, sizeof(post_data), "user_agent=%s&ip_address=%s", user_agent, ip_address);

        // Set CURL options
        curl_easy_setopt(curl, CURLOPT_URL, API_URL);
        curl_easy_setopt(curl, CURLOPT_POSTFIELDS, post_data);

        // Perform the request
        res = curl_easy_perform(curl);

        // Check for errors
        if(res != CURLE_OK)
            fprintf(stderr, "curl_easy_perform() failed: %s\n", curl_easy_strerror(res));

        // Clean up
        curl_easy_cleanup(curl);
    }

    // Clean up the CURL library
    curl_global_cleanup();
}

int main() {
    // Example usage
    log_traffic("Mozilla/5.0", "192.168.1.1");

    return 0;
}
