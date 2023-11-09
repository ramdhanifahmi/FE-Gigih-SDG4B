# Scholar-centre-web
Project Description: This web application is a platform that provides information about scholarships from various sources. Users can find details about available scholarships, application deadlines, and article that relate for students who want to continue their study.

## Features

- **Scholarship Listings:** Browse through a curated list of scholarships from different sources.

- **Search Functionality:** Easily search for specific scholarships based on keywords or filters.

- **Article Section:** Explore insightful articles providing tips, insights, and advice on the scholarship application process, mindset, and more.

## How to Install & Run
1. Clone the repository
2. Go to a .env file and set the following environment variables of you want run locally, change this url to your server side url. for example:
   ```
   VITE_CLIENT_URL=http://localhost:3001
   ```
3. Make sure you has running the server with the same port

#### After this step, you can run the application by 3 way:
### 1. Running with docker compose
if you choose docker compose, you can directly run both frontend and backend application, the docker images for frontend and backend has been push to my repository in docker hub. To run this app, you can following this step:
In this instruction I will use command compose v2. For furthest information you can read the official docker compose documentation: ```https://docs.docker.com/compose/```

1. Make sure you have installed docker (include docker compose) in your system.

2. Create container by run this command in your terminal:
    ```
      docker compose create
      ```
3. Run docker compose by run this command in your terminal:
    ```
      docker compose start
      ```
4. The client should now be running locally on `http://localhost:3001`

### 2. Running with docker container
1. Make sure you have installed docker in your system
2. Running your docker
3. Build the image by running the dockerfile, you can run this in your terminal:
    ```
   docker build -t fe/scholar .
   ```
4. After finsih build the image, run this in your terminal:
    ```
   docker run -p 3001:3001 fe/scholar
   ```
5. The Client should now be running locally on `http://localhost:3001`

### 2. Running locally
1. Install the required dependencies by running in terminal:
   ```
   npm install
   ```

2. Run the project by running this in terminal
   ```
   npm run dev
   ```
3. The Client should now be running locally on `http://localhost:3001`
