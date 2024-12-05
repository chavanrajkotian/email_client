#Angular Email Client
This is a simple email client application built with **Angular**, designed to provide the core functionalities of an email system. Features include user authentication (sign-up and sign-in), email inbox, and options to compose and reply to emails. The application utilizes cookie-based authentication for managing user sessions.

##Features
1. Cookie-based Authentication: Secure authentication with login and registration using cookies to manage user sessions
2. Sign In/Sign Up: Users can register a new account or sign in to an existing one
3. Email Inbox: View received emails in an organized inbox
4. Compose Emails: Create and send new emails to recipients
5. Reply to Emails: Respond to received emails directly from the inbox

##Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js: Version 14 or above
npm: Version 6 or above
Angular CLI: Version 12 or above

##Installation
1. Clone the Repository
`https://github.com/chavanrajkotian/email_client.git`
2. Install Dependencies
Run the following command to install the necessary dependencies:
`npm install`
3. Run the Application
Once dependencies are installed, you can run the application locally:
`ng serve`
This will start the Angular development server. You can access the application at http://localhost:4200.

##Usage
1. Sign Up: Navigate to the sign-up page, fill out the required details, and click "Sign Up" to create a new user account.
2. Sign In: After registering, use the sign-in form to log in to your account.
3. Inbox: After logging in, the inbox will be populated with emails received by the user.
4. Compose Email: Use the compose email form to create and send new emails.
5. Reply to Email: You can reply to any email from the inbox with the "Reply" button, which will open a reply form pre-filled with the original email content.

##Technologies Used
1. Frontend: Angular
  >> Angular Material for UI components
  >> RxJS for reactive programming
  >> HTTPClient for API calls
2. Authentication: Cookie-based authentication using JWT (JSON Web Tokens)
