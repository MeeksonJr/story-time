# StoryTime App

This is a **StoryTime** app built using **Next.js**. It allows users to upload stories, select reading styles, and listen to them. The app utilizes modern libraries and tools to provide a seamless user experience. This includes authentication through **Clerk**, **Drizzle** and **Neon databases** for data storage, and **ShadCN** and **Lucid React** for UI components.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Database Configuration](#database-configuration)
- [Authentication](#authentication)
- [File Upload and Text-to-Speech](#file-upload-and-text-to-speech)
- [UI Components](#ui-components)
- [Contributing](#contributing)

## Technologies Used

- **Next.js** - The core framework for building the app with server-side rendering and API routes.
- **Clerk** - Authentication for user login, registration, and session management.
- **ShadCN** - A UI component library for building beautiful, accessible interfaces.
- **Lucid React** - Used for icons and UI components.
- **Drizzle** - A lightweight ORM for managing and interacting with the database.
- **Neon Database** - A cloud-native database service used for storage and data management.
- **JavaScript & TypeScript** - The codebase is written in both JavaScript and TypeScript for type safety and better developer experience.

## Features

- **File Upload**: Allows users to upload PDF, DOCX, and TXT files to the app.
- **Text-to-Speech**: Converts the uploaded file's text content into speech with customizable voice styles, tones, and speeds.
- **User Authentication**: Provides user authentication through Clerk, allowing users to log in and access their uploaded stories.
- **Reading Style Selector**: Users can customize the voice style, tone, and speed of the reading.
- **Preview Functionality**: Preview the reading style and speed before applying the settings.
- **Alert Notifications**: After a file is uploaded successfully, users will receive a notification with their story details.

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MeeksonJr/story-time.git
   cd story-time
Install dependencies: Make sure to have Node.js installed. Then run:

bash
Copy code
npm install
Set up environment variables: Create a .env.local file in the root of the project and add the necessary environment variables for Clerk, Neon, and any other services:

## env
```
NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
CLERK_API_KEY=<your-clerk-api-key>
NEON_DB_URL=<your-neon-database-url>

```
## Run the development server:
```
npm run dev
Visit the app: Open http://localhost:3000 in your browser to view the app.
```
## Database Configuration
The app uses Neon Database for cloud-native data storage. The Drizzle ORM is utilized to manage database queries and operations.

## Neon Database: Create an account on Neon (https://neon.tech/) and set up your database.
Drizzle ORM: Drizzle interacts with the Neon database to persist the uploaded files and user data. Make sure to configure the database connection properly in the .env.local file.
## Authentication
The app uses Clerk for user authentication. Users can sign in using their credentials, and the app ensures that only authenticated users can save and access their uploaded files.

## Clerk Authentication Features:
- Sign Up: New users can create an account and start using the app.
- Sign In: Existing users can sign in with their email or social accounts.
- Session Management: Clerk handles the session state and manages the user's authentication flow.
### File Upload and Text-to-Speech
Users can upload their stories in PDF, DOCX, or TXT formats. Once uploaded, the app processes the text content of the file and allows users to listen to it.

## File Upload: Handled by the FileUpload component. Users can drag and drop files or select them from their device.
- Text Processing: The uploaded file's text is extracted, and the app converts the content to speech using the current reading style settings.
- Text-to-Speech Settings: Users can adjust the voice style, tone, speed, and background effect.
## UI Components
- The app uses ShadCN and Lucid React for building modern UI components with great accessibility.

## ShadCN: A component library that provides pre-designed UI elements.
- Lucid React: An icon library used for icons like file upload and play buttons.

## The UI includes:
- File upload area with drag-and-drop functionality.
- Reading style selector to adjust voice style, tone, speed, and background effects.
- Notifications for successful file uploads.

## Contributing
We welcome contributions to this project! If you'd like to contribute, please follow these steps:

## Fork the repository.
```
Create a new branch (git checkout).
Make your changes and commit them (git commit).
Push to your fork (git push origin)
Open a pull request to the main repository.
```