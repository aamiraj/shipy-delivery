import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const UserContext = ({ children }) => {
  const [user, setUser] = useState();
  const [isLoading, setLoading] = useState(false);

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const gitHubLogIn = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  const logOut = () => {
    localStorage.removeItem("access-token");
    return signOut(auth);
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        logIn,
        googleLogIn,
        gitHubLogIn,
        logOut,
        isLoading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
