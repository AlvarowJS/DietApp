import axios from 'axios';

const recetarioBD = axios.create({
    // baseURL: 'https://intranet.dietservice.pe/appdiet/json/data_recipes.php',
    baseURL: 'http://dietservice.bitjoins.pe/api/recetas',
              
    
})

export default recetarioBD