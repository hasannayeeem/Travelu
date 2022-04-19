import './App.css';
import app from './firebase.init';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
const auth = getAuth(app);


function Login() {

    const [user, setUser] = useState({});
  
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
  
    const handleGoogleSignIn = () => {
      signInWithPopup(auth, googleProvider)
        .then(result => {
          const user = result.user;
          setUser(user);
        })
        .catch((error) => {
          console.log(error);
        })
    }
    const handleGoogleSignOut = () => {
      signOut(auth)
        .then(() => {
          setUser({});
        })
        .catch((error) => {
          setUser({});
        })
    }
  
  
    const handleGithubSignIn = () => {
      signInWithPopup(auth, githubProvider)
        .then(result => {
          const user = result.user;
          setUser(user);
          console.log(user);
        })
        .catch((error) => {
          console.log(error);
        })
    }
    // email password auth practice
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registered, setRegistered] = useState('');
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState('');
    const handleEmailBlur = (e) => {
      setEmail(e.target.value);
    }
    const handlePasswordBlur = (e) => {
      setPassword(e.target.value);
  
    }
    const handleFormSubmit = (e) => {
      const form = e.currentTarget;
      e.preventDefault();
      if (form.checkValidity() === false) {
        
        e.stopPropagation();
        return;
      }
      if(!/(?=.*[!@#$%^&*])/.test(password)){
        setError('plz password should be contain a special character!');
        return;
      }
      setValidated(true);
      setError('');
     
      if(registered){
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
          const user = result.user;
          console.log(user);
        })
        .catch(error  => {
          console.error(error);
          setError(error.message);
        })
      }
      else{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
          const user = result.user;
          console.log(user);
          setEmail('');
          setPassword('');
        })
        .catch(error  => {
          console.error(error);
          setError(error.message);
        })
      }
      // console.log('e.target.value', email, password);
      e.preventDefault();
    }
    const handleRegisteredChange = e =>{
      setRegistered(e.target.checked);
    }
    return (
      <div className="">
        {
          user.uid ? <button onClick={handleGoogleSignOut}>Google Sign Out</button>
            :
            <div>
              <button onClick={handleGoogleSignIn}>Google Sign In</button>
              <button onClick={handleGithubSignIn}>Github Sign In</button>
            </div>
        }
        <h2>Name:{user.displayName}</h2>
        <img src={user.photoURL} alt="" />
        <div className='w-50 mx-auto mt-2'>
          {/* <form action='' onSubmit={handleFormSubmit}>
            <input onBlur={handleEmailBlur} type="email" name="" id="" />
            <br />
            <input onBlur={handlePasswordBlur} type="password" name="" id="" />
            <br />
            <input type="submit" value="Login"></input>
          </form> */}
          <h2 className='text-primary'>Please {registered ? 'Login' : 'Register!!'}</h2>
          <Form noValidate validated={validated}  onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Email.
              </Form.Control.Feedback>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required/>
              <Form.Control.Feedback type="invalid">
                Please provide a valid password.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
          <Form.Check
            onChange={handleRegisteredChange}
            required
            label="Already Registered?"
            feedback="You must agree before submitting."
            feedbackType="invalid"/>
          </Form.Group>
            <p className='text-danger '>{error}</p>
            <Button variant="primary" type="submit">
              {registered ? 'Login' : 'Register'}
            </Button>
          </Form>
        </div>
      </div>
    );
  }
  
  export default Login;
  