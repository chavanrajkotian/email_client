# Angular Email Client

This is a simple email client application built with **Angular**, designed to provide the core functionalities of an email system. Features include user authentication (sign-up and sign-in), email inbox, and options to compose and reply to emails. The application utilizes cookie-based authentication for managing user sessions.

## Features
* Cookie-based Authentication: Secure authentication with login and registration using cookies to manage user sessions
* Sign In/Sign Up: Users can register a new account or sign in to an existing one
* Email Inbox: View received emails in an organized inbox
* Compose Emails: Create and send new emails to recipients
* Reply to Emails: Respond to received emails directly from the inbox

## Prerequisites
Before you begin, ensure you have met the following requirements:

* Node.js: Version 14 or above
* npm: Version 6 or above
* Angular CLI: Version 12 or above

## Installation
* Clone the Repository
  `https://github.com/chavanrajkotian/email_client.git`
* Install Dependencies
Run the following command to install the necessary dependencies:
`npm install`
* Run the Application
Once dependencies are installed, you can run the application locally:
`ng serve`
This will start the Angular development server. You can access the application at http://localhost:4200.

## Usage
* Sign Up: Navigate to the sign-up page, fill out the required details, and click "Sign Up" to create a new user account.
* Sign In: After registering, use the sign-in form to log in to your account.
* Inbox: After logging in, the inbox will be populated with emails received by the user.
* Compose Email: Use the compose email form to create and send new emails.
* Reply to Email: You can reply to any email from the inbox with the "Reply" button, which will open a reply form pre-filled with the original email content.

## Technologies Used
* Frontend: Angular
  * _Semantic UI_
  * _RxJS for reactive programming_
  * _HTTPClient for API calls_
* Authentication: Cookie-based authentication using JWT (JSON Web Tokens)
