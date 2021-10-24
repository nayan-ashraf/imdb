import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, error => {
        const expectedError = error.response &&
        error.response.status >= 400 &&
        error.response.status <500
      
        if(!expectedError) {
          toast.error('An Unexpected Error occured . Please try again later');
        }
        else if(error.response.status === 400) {
          toast.error('Bad request');
        }
        else if(error.response.status === 404) {
          toast.error('This post is not found or previously deleted');
            }
            return Promise.reject(error);
      })

const http = {
        get: axios.get,
        post: axios.post,
        put: axios.put,
        delete: axios.delete
}

export default http;