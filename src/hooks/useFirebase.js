import {getAuth, signInWithPopup,GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword,
    signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";
import { useEffect, useState, } from 'react'
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

  
  initializeAuthentication();
  const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(true);
  
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
  
    const signInUsingGoogle = () => {
      return signInWithPopup(auth, googleProvider);
    };
  
    const signInWithEmail = () => {
      return signInWithEmailAndPassword(auth, email, password);
    };
    const setNameAndImage = () => {
      updateProfile(auth.currentUser, {
        displayName: name,
      })
        .then(() => {})
        .catch((error) => {
          setError(error.message);
        });
    };
  
    const logout = () => {
      signOut(auth)
        .then(() => {
          setUser({});
        })
        .catch((error) => {
          setError(error.message);
        });
        
    };
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        }
        setIsLoading(false);
      });
      return () => unsubscribe;
    }, []);
    const signup = (event) => {
      event.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          setNameAndImage();
          alert("User created");
        })
        .catch((err) => {
          setError(err.message);
        });
    };
    const getName = (event) => {
      setName(event?.target?.value);
    };
    const getEmail = (event) => {
      setEmail(event?.target?.value);
    };
  
    const getPassword = (event) => {
      setPassword(event?.target?.value);
    };
  
    return {
      user,
      isLoading,
      error,
      setError,
      signInWithEmail,
      signInUsingGoogle,
      signup,
      getEmail,
      getPassword,
      getName,
      setUser,
      logout,
      }
  }
  
  export default useFirebase;