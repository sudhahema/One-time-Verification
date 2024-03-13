import { useAuth0 } from '@auth0/auth0-react'; //login and logout func
import './App.css';
// import LoginButton from './component/login';

function App() {
  const { isAuthenticated, user, loginWithRedirect ,loginWithPopup, logout } = useAuth0();
  return (
    <div className="App">
     <h1>Auth 0  authentication</h1>
     <ul>
      <li>
        <button onClick={loginWithPopup}> Login with popup</button>
      </li>
      <li>
        <button onClick={loginWithRedirect}> Login with Redirect</button>
      </li>
      <li>
        <button onClick={logout}> Log out</button>
      </li>
     </ul>
     <h3>User is {isAuthenticated ? "Logged In" : "logged Out"}</h3>
     {isAuthenticated && (
     <pre style={{textAlign : "start" ,fontSize : "15px" }}>
     {JSON.stringify(user , null , 2)}
     
     </pre>)}
     {/* <LoginButton /> */}
    </div>
  );
}

export default App;
