import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../Firebase.config";
import { GoogleAuthProvider,GithubAuthProvider  } from "firebase/auth";

export const AuthContext = createContext(null);

const Authprovaider = ({ children }) => {
    const githubprovider = new GithubAuthProvider();
    const googleprovider = new GoogleAuthProvider();
  const [user, setuser] = useState(null);
  const [loding,setloding]=useState(true);

  const createUse = (email, password) => {
    setloding(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInuser = (email, password) => {
    setloding(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout=()=>{
    setloding(true)
    return signOut(auth)
  }
  const sininwidthgoogle=()=>{
    return signInWithPopup(auth,googleprovider)
  }

  const githubsingin=()=>{
    return signInWithPopup(auth,githubprovider)
  }

  useEffect(() => {
  const unsubsibe=  onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
      console.log('objarb',currentUser)
    setloding(false)
    
    });
    return()=>{
        unsubsibe()
    }
  }, []);

  const AuthInfo = { user, createUse,loding, signInuser,logout ,sininwidthgoogle,githubsingin};

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default Authprovaider;

Authprovaider.propTypes = {
    children: PropTypes.node,
  };

// create context and export it
//div=AuthContext.provider
//setProvider with value
//use it on main.jsx file
//access children in the AuthProvider component as children and use it in the meddle of the provider
