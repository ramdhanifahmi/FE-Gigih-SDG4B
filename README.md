# Scholar-centre-web
Project Description: This web application is a platform that provides information about scholarships from various sources. Users can find details about available scholarships, application deadlines, and article that relate for students who want to continue their study.

## Features

- **Scholarship Listings:** Browse through a curated list of scholarships from different sources.

- **Search Functionality:** Easily search for specific scholarships based on keywords or filters.

- **Article Section:** Explore insightful articles providing tips, insights, and advice on the scholarship application process, mindset, and more.

## How to Install & Run
### 1. Running with docker
1. Clone the repository
2. Go to a .env file and set the following environment variables of you want run locally, change this url to your server side url. for example:
   ```
   VITE_CLIENT_URL=http://localhost:3000
   ```
3. Make sure you has running the server with the same port
4. Make sure you have installed docker in your system
5. Running your docker
6. Build the image by running the dockerfile, you can run this in your terminal:
    ```
   docker build -t fe/scholar .
   ```
7. After finsih build the image, run this in your terminal:
    ```
   docker run -p 3001:3001 fe/scholar
   ```
8. The Client should now be running locally on `http://localhost:3001`

### 2. Running locally
1. Clone the repository
2. Go to a .env file and set the following environment variables of you want run locally, change this url to your server side url. for example:
   ```
   VITE_CLIENT_URL=http://localhost:3000
   ```
3. Make sure you has running the server with the same port
4. Install the required dependencies by running in terminal:
   ```
   npm install
   ```

5. Run the project by running this in terminal
   ```
   npm run dev
   ```
6. The Client should now be running locally on `http://localhost:3001`
