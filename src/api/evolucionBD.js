import axios from 'axios';

const evolucionBD = axios.create({
    baseURL: 'http://dietservice.bitjoins.pe/api/evolucion/',
              
    
})

export default evolucionBD