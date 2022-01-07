import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import '@aws-amplify/ui-react/styles.css';

import { withAuthenticator, Authenticator } from '@aws-amplify/ui-react';

Amplify.configure(config);

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
