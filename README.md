# 💻Micro Blogging Web Application

![localhost_3000_ (3)](https://github.com/HAWKZ4/WriteNotion/assets/108879264/d50ad32e-fb58-4227-abfa-3b4315400a2c)

This is a Micro Blogging web application built with React, Firebase Authentication, and Firestore. 
Users can log in, create posts with a title and description, and share them with others in a single place.
The project is deployed on Netlify.

## Features

- User authentication with Firebase
- Create and share posts
- Real-time data storage with Firestore
- Responsive design

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

```
REACT_APP_API_KEY=<your-firebase-api-key>
REACT_APP_APP_ID=<your-firebase-app-id>
REACT_APP_AUTH_DOMAIN=<your-firebase-auth-domain>
REACT_APP_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>
REACT_APP_STORAGE_BUCKET=<your-firebase-storage-bucket>
```

## Installation

1. Clone the repository:

```sh
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. Install dependencies:

```sh
npm install
```

3. Create a `.env` file in the root of your project and add your Firebase configuration:

```sh
REACT_APP_API_KEY=your-api-key
REACT_APP_APP_ID=your-app-id
REACT_APP_AUTH_DOMAIN=your-auth-domain
REACT_APP_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_STORAGE_BUCKET=your-storage-bucket
```

4. Start the development server:

```sh
npm start
```

## Deployment

This project is deployed using Netlify.
To deploy your own version, follow these steps:

1. Push your code to a GitHub repository.
2. Log in to [Netlify](https://www.netlify.com/) and create a new site from GitHub.
3. Connect your repository and configure the build settings:
   - Build Command: `npm run build`
   - Publish Directory: `build`
4. Add your environment variables in the Netlify dashboard under "Site settings" > "Build & deploy" > "Environment".

### Note

My Project functionalities are disabled as it's for learning purpose.

## Dependencies

- "@testing-library/jest-dom": "^5.16.5"
- "@testing-library/react": "^13.4.0"
- "@testing-library/user-event": "^13.5.0"
- "firebase": "9.10"
- "react": "^18.2.0"
- "react-dom": "^18.2.0"
- "react-loading-skeleton": "^3.3.1"
- "react-router-dom": "^6.4.2"
- "react-scripts": "5.0.1"
- "web-vitals": "^2.1.4"

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or enhancements.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [Netlify](https://www.netlify.com/)



