# Fibonacci API by Marco Castro

## Overview

The Fibonacci API is a simple RESTful service developed by Marco Castro that allows users to calculate Fibonacci numbers. Fibonacci numbers are a sequence of numbers where each number is the sum of the two preceding ones.

This API provides both recursive and iterative methods for calculating Fibonacci numbers, and it's designed to be easy to use and integrate into your applications.

## Usage

### Base URL

The base URL for the Fibonacci API is `http://localhost:3000/api/fibonacci`.

### Endpoints

#### 1. Calculate Fibonacci Number
- **Endpoint**: `/api/fibonacci/:n`
- **Method**: GET
- **Description**: Calculate the nth Fibonacci number.
- **Parameters**:
 - `n` (integer): The position of the Fibonacci number to calculate.
- **Example Request**:
 ```shell curl https://localhost:300/api/fibonacci/10```
- **Example Response**:
```json {"message":"Fibonacci Successfully Calculated","data":8}```

## Installation

To use the Fibonacci API, you can deploy it on your own server.

If you want to run it locally, follow these steps:

1. Clone the repository:
   ``` shell
   git clone https://github.com/MarcoCastroCarreon/fibonacci
   ```
   
2. Navigate to the project directory:
   ``` shell
   cd fibonacci
   ```
   
3. Install the required dependencies:
   ``` shell
   npm install
   ```

4. Start the server:
   ``` shell
    npm start
   ```
   
The API will be available at `http://localhost:3000/api/fibonacci`.

## Contributions

Contributions to this project are welcome! Feel free to submit issues, pull requests, or suggestions.

## License
This Fibonacci API is open-source software licensed under the MIT License.

## Contact

For questions or inquiries, you can reach out to Marco Castro via email at mcastrodevelopment@gmail.com.
