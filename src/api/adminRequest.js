import axios from 'axios'


const API = axios.create({ baseURL: "http://localhost:5000"})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('user')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
    }
    return req;
  })
export const getEmployeesList = () => API.get('admin/employee-list')