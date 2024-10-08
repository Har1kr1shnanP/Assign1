## Product Management API

This Node.js server handles product information through HTTP GET, POST, and DELETE requests using JSON data.

## Features

- Use POST requests to store products.
- Retrieve all products with GET requests.
- Delete all products via DELETE requests.
- Records server start-up details, endpoints, and request/response data.
- Tracks the number of GET and POST requests.

## Installation

1. **Clone the Repository**

   git clone https://github.com/yourusername/your-repo-name.git
   
   cd your-repo-name
   

3. **Install Dependencies**

   npm install
   

## Usage

1. **Start the Server**
   
   node src/index.js
   

2. **Access the Server**
   - URL: `http://127.0.0.1:5000`
   - Endpoints:
     - `GET /products`
     - `POST /products`
     - `DELETE /products`
