# Birds Game Server (express)

## Installation

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

Clone a git repository
$ git clone  command

Installation is done using the
$ npm install

### Add your own credentials

There are a special configurations for the database in the .env file.

You need to add your own:

#### MongoDB

Ensure that you have mongoDB installed on your machine or that you have mongoDB cluster or create a new cluster to save data to MongoDB [https://www.mongodb.com]("https://www.mongodb.com")
Add your connection IP address to your IP Access List in file.env to MONGOOSE=

#### Mail

The Gmail service is used to send an activation link. Ensure thet you have gmail account and pass in to .env file after EMAIL_USER=

Ensure thet you have passed the password of your account in to .env file after EMAIL_PASSWORD=

## Run the application

$ npm run dev
