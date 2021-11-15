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
    const [admin, setAdmin] = useState(false);
  
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

    useEffect(() => {
      fetch(`https://thawing-headland-26014.herokuapp.com/user/${user.email}`)
        .then((res) => res.json())
        .then((data) => setAdmin(data.admin));
    }, [user.email]);

    const registerUser = (email, password, name, history) => {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setError("");
          saveUser(email, "POST");
          updateProfile(auth.currentUser, {
            displayName: name,
          })
            .then(() => {})
            .catch((error) => {});
          history.replace("/");
        })
        .catch((error) => {
          setError(error.message);
          console.log(error);
        })
        .finally(() => setIsLoading(false));
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

    const saveUser = (email, method) => {
      const user = { email };
      fetch("https://thawing-headland-26014.herokuapp.com/user/", {
        method: method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      }).then();
    };
    return {
      user,
      isLoading,
      error,
      setError,
      registerUser,
      saveUser,
      admin,
      signInWithEmail,
      signInUsingGoogle,
      //signup,
      getEmail,
      getPassword,
      getName,
      setUser,
      logout,
      }
  }
  
  export default useFirebase;