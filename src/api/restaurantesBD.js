import axios from 'axios';

const restaurantesBD = axios.create({
    // baseURL: 'https://intranet.dietservice.pe/appdiet/json/data_chefs.php',
    baseURL: 'https://dietservice.bitjoins.pe/api/chefs/'
    
})

export default restaurantesBD