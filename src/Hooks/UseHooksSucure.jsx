import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axosScure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const UseHooksSucure = () => {
    const { logout } = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        axosScure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log(error.response);
            if (error.response.status === 401 || error.response.status === 403)
                console.log('user logout');
       
            logout()
                    .then(() => {
                        navigate('/login')
                     })
                    .catch(error => console.log(error))
        })
    }, [])
    return axosScure;

};

export default UseHooksSucure;