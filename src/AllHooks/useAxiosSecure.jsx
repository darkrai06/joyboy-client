import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";



const axiosSecure = axios.create({
    baseURL: 'https://joyboy-server.onrender.com/'
})
const useAxiosSecure = () => {

    const navigate = useNavigate
    const { Out } = useAuth()
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        console.log(token);
        config.headers.authorization = `Bearer ${token}`
        return config
    })
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    },
        async (error) => {
            
            const status = error.response.status
            if (status === 401 || status === 403) {
                await Out()
                navigate('/login')
            }

            return Promise.reject(error);
        })
    return (
        axiosSecure
    );
};

export default useAxiosSecure;