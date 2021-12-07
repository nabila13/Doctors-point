import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";
import initializeFirebase from "../firebase/initialize";
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .finally(() => { setLoading(false) });

    }

    const updateName = (firstName) => {
        setLoading(true);
        updateProfile(auth.currentUser, { displayName: firstName })
            .then(result => {
                setLoading(false);
            })
    }
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .finally(() => { setLoading(false) });
    }

    const signInOldUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .finally(() => { setLoading(false) });

    }

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setLoading(false))
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])
    return {
        user,
        loading,
        signInWithGoogle,
        logOut,
        createNewUser,
        updateName,
        signInOldUser

    }
}
export default useFirebase;