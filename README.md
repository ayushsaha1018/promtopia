# Promptopia

Promptopia is an open-source AI prompting tool built using NextJs that allows users to discover, create, and share creative prompts. With Promptopia, users can create profiles using Google OAuth and create prompts. They can also view prompts created by other users, search for prompts using prompt text, tag name, or username, and edit or delete prompts created by them. Promptopia is built using NextJs, MongoDB, and nextAuth, and styled using Tailwind CSS.

## Getting Started

To get started with Promptopia, follow these steps:

1. Clone the repository or download the ZIP file.
2. Install the required dependencies by running the following command in the project directory:
    ```bash
    npm install
    ```
3. Create a `.env` file in the project root directory with the following variables:

    ```
    GOOGLE_CLIENT_ID=<your_google_client_id>
    GOOGLE_CLIENT_SECRET=<your_google_client_secret>
    MONGODB_URI=<your_mongodb_uri>
    NEXTAUTH_URL = http://localhost:3000
    NEXTAUTH_INTERNAL_URL = http://localhost:3000
    NEXTAUTH_SECRET = <your_nextauth_secret>
    ```
4. Start the development server by running the following command:
    ```bash
    npm run dev
    ```
5. Open `http://localhost:3000` in your browser to access Promptopia.

## Features

Here are some of the features of Promptopia:

- Users can create profiles using Google OAuth.
- Users can create prompts.
- Users can view prompts created by other users.
- Users can search for prompts using prompt text, tag name, or username.
- Users can edit or delete prompts created by them.

## Technologies Used

Promptopia is built using the following technologies:

- NextJs
- MongoDB
- nextAuth
- Tailwind CSS

## Contributing

If you'd like to contribute to Promptopia, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test them thoroughly.
4. Create a pull request with your changes.
