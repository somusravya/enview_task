
# Enview Task

This repository contains a vehicle monitoring system that detects unsafe driving behavior and generates alerts based on predefined rules. The system uses Node.js and MongoDB for data storage.

## Getting Started

To run this program locally, follow the steps below.

### Prerequisites

- Node.js installed on your local machine
- MongoDB installed and running locally

### Installation

1. Clone the repository to your local machine:

   git clone https://github.com/somusravya/enview_task.git


2. Change into the project directory:

   
   cd enview_task
 

3. Install the required npm packages:

   
   npm install
   

### Starting the Program

To start the program, run the following command:


npm start


The program will run on `http://127.0.0.1:3000`.

## Usage

### Creating a Vehicle ID

To create a vehicle ID and send a POST request to the system, you can use the following `curl` command:


curl --location 'http://127.0.0.1:3000/event' \
--header 'Content-Type: application/json' \
--data '{
  "is_overspeeding": true,
  "vehicle_id": "542110",
  "location_type": "highway"
}'


### Retrieving Alerts

To retrieve alerts based on a generated vehicle ID, use the following `curl` command:


curl --location 'http://127.0.0.1:3000/alert/{{ID}}'


Replace `{{ID}}` with the actual alert ID obtained from the POST request.

### Scheduled Monitoring

The system includes a scheduler that runs every 1 minute to evaluate driving behavior and generate alerts for rule violations.

