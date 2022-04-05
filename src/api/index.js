import axios from 'axios'

const api = axios.create({
    baseURL: 'mongodb+srv://sheng:1234@cluster0.smepc.mongodb.net/hansigjib',
})


export const getAllMenu = () => api.get(`/menu`)
export const getUsers = () => api.get(`/user`)

