from flask import Flask, request
import datetime
import logging
import os

app = Flask(__name__)

# Ensure the log directory exists
log_dir = '/app/logs'
os.makedirs(log_dir, exist_ok=True)

# Setup logging
log_file_path = os.path.join(log_dir, 'traffic.log')
logging.basicConfig(filename=log_file_path, level=logging.INFO)

@app.route('/log_traffic', methods=['POST'])
def log_traffic():
    # Get data from the incoming request's JSON payload
    data = request.json
    
    # Log the received data with a timestamp
    logging.info('%s - Received Data: %s', datetime.datetime.now(), data)
    print('%s - Received Data: %s', datetime.datetime.now(), data)
    
    # Return a success response
    return 'Data logged successfully!', 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5000)
