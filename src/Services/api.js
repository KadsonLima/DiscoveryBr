import axios from 'axios';


export const api = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URI
})

export async function getVagas(){
    const vagas = await api.get('/vagas')
    return vagas;
}