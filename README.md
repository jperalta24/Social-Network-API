# Social-Network-API

## Description
This project is a social media API that uses a NoSQL database to handle large amounts of unstructured data. The API provides endpoints for users, thoughts, reactions, and friends, allowing users to create, read, update, and delete these resources.

See video demonstration here: (https://drive.google.com/file/d/1YaUEIw_Qfp2e6U1BoGnktSKxV34fobzN/view)

### User Story
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data


### Acceptance Criteria
-   When the user enters the command to invoke the application, the server is started and the Mongoose models are synced to the MongoDB database.
-   When the user opens API GET routes in Insomnia for users and thoughts, the data for - each of these routes is displayed in a formatted JSON.
-   When the user tests API POST, PUT, and DELETE routes in Insomnia, they are able to successfully create, update, and delete users and thoughts in the database.
-   When the user tests API POST and DELETE routes in Insomnia, they are able to successfully create and delete reactions to thoughts and add and remove friends to a user's friend list.

### Installation
To install and use this project, follow these steps:

1. Clone the repository
2. Install dependencies by running npm install
3. Start the server by running npm start


### Usage
To user the API, open insomnia or a similar tool and test the available endpoints.

### Credits
This project was created by Jonathan Peralta.