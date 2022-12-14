import axios from 'axios';

const dietaBD = axios.create({
    baseURL: 'https://intranet.dietservice.pe/appdiet/json/data_categories.php',
    
})

export default dietaBD