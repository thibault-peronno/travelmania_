import axios from 'axios';

const axuiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
  withCredentials: true,
})

class AuthService {
    async login(email:string, password:string) {
        const axiosReponse = axuiosInstance.post('login', {
            email: email,
            password: password
        })
        .then(function(resp) {
            return resp;
        })
        .catch(function (error){
            return error;
        });
        return axiosReponse;
    }

}

export default AuthService;