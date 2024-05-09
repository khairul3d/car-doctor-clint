import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import axios from "axios";
export const AuthContext = createContext()
export const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const creatUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser || user; 
            const loggedUser = {user: userEmail}
            setUser(currentUser)
            console.log('onauth state change obsurve', currentUser);
            setLoading(false)
            // jwt token
            if(creatUser){
               
                axios.post('http://localhost:5000/jwt', loggedUser, {
                    withCredentials: true})
                    .then(res => {
                        console.log(res.data);
                    })
            }
            axios.post('http://localhost:5000/logout', loggedUser, {
                withCredentials: true
            })
            .then(res => {
                 console.log(res.data);
            })
        })
        return () => {
            return unsubscribe()
        }
    },[])

    const authInfo = {
      user,
      loading,
      signIn,
      creatUser,
      logout

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;