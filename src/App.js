import { Amplify, API } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';

Amplify.configure({
  // OPTIONAL - if your API requires authentication 
  Auth: {
    region: 'us-east-1', // REQUIRED - Amazon Cognito Region
    userPoolId: 'us-east-1_um2uzYxoj', // OPTIONAL - Amazon Cognito User Pool ID
    userPoolWebClientId: '6jojb17i5p1gq4l0kjrbgkim55', // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
  },
  API: {
    endpoints: [
      {
        name: "MyAPIGatewayAPI",
        endpoint: "https://gbfs2m2ewg.execute-api.us-east-1.amazonaws.com/dev"
      }
    ]
  }
});

function App({ signOut, user }) {
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);