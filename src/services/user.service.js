import axios from 'axios';
import useAxios from 'axios-hooks';
import authHeader from './auth-header';

const BASE_URL = "http://localhost:8080/api/";

class UserService {
  getPublicContent() {
    return axios.get(BASE_URL + 'public/all');
  }

  getUserBoard() {
    return axios.get(BASE_URL + 'auth/user', { headers: authHeader() });
  }

  getModeratorBoard() {
    const [{ data, loading, error }] = useAxios(
      {
        url: BASE_URL + 'auth/mod',
        method: 'GET',
        headers: authHeader()
      },
      { manual: false }
    )

    if (loading) {
      console.log("Loading Axios Hooks ... ")
    }

    if (error) {
      console.log("Error Axios Hooks")
    }

    console.log("Content: ", data)

    return data
  }

  getAdminBoard() {
    return axios.get(BASE_URL + 'auth/admin', { headers: authHeader()});
  }
}

export default new UserService();
