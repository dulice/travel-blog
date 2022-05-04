import axios from 'axios';

const register = async(userData) => {
    const res = await axios.post("http://localhost:5000/api/auth/register", userData);
    if(res.data) {
       localStorage.setItem('user', JSON.stringify(res.data));
    }
    return res.data;
}

const authSerivce = { register };
export default authSerivce;