import axios from 'axios';

const EntrenamientoBD = axios.create({
    baseURL: 'https://dietservice.bitjoins.pe/api/canal_videos',
              
    
})

export default EntrenamientoBD