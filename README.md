
Cred-Pal Backend Node.js Interview Test - Wallet System Project I participated in the Cred-Pal Backend Node.js Interview and successfully completed the assignment. I built a wallet system API using Node.js and Express, with MongoDB as the database, Here is an overview of what I accomplished:
Project Overview Models I created three models for this project:
Users: This model stores user information, including their first name, last name, phone number, email, and password.
Wallets: The wallets model manages user wallets and includes details such as the associated user and the wallet balance.
Transactions: I implemented a transactions model to record financial transactions, including sender, recipient, amount, and transaction type (e.g., transfer or deposit).
Endpoints I designed and implemented several API endpoints to provide various wallet management features:
Wallet Creation: Users can create a new wallet.
Wallet Update: I provided functionality to update wallet details.
Get Wallet Details: Users can retrieve wallet information, including the current balance.
Transfer Funds: I implemented a secure way to transfer funds from one wallet to another, including validation to ensure the sender has sufficient funds.
Get List of Transactions: Users can fetch the list of transactions associated with their account.
Authentication: I ensured that authentication is implemented wherever necessary to secure access to specific endpoints.
How to Use To use my Cred-Pal Backend Node.js Interview API, follow these steps:
Clone or download the project repository to your local machine.
Set up the required environment variables, such as database connection details and secret keys, in a .env file.
Install the project dependencies using npm install.
Start the Node.js server using npm start.
Access the API endpoints via the defined routes, typically on http://localhost:your-port number.
Technologies Used I utilized several technologies to build this project:
Node.js and Express: These were the primary technologies for building the API server. 
MongoDB: I used MongoDB as the database to store user data, wallet details, and transactions. 
JWT (JSON Web Tokens): JWTs were employed for authentication and authorization of users. 
Express Middleware: I used middleware to handle authentication and error handling. 
Mongoose: Mongoose served as an ODM (Object Data Modeling) library for MongoDB. 
Contributions Contributions to this project are welcome! If you have suggestions, bug reports, or feature requests, please submit an issue or create a pull request.
