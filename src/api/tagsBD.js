import axios from 'axios';

const tagsBD = axios.create({
    baseURL: 'https://dietservice.bitjoins.pe/api/canal_tags',                  
})

export default tagsBD