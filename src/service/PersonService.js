import axios from 'axios';

export default class NoticiasService {

    obtenerPersonas() {
        let buscaPersona = 'https://randomuser.me/api/'
        return axios.get(buscaPersona).then(response => response.data);

    }
}