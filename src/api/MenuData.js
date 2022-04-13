import axios from 'axios'
import { BACKEND } from '../utils/utils'
import urlcat from 'urlcat'

export default function MenuData(payload) {

    axios.get(urlcat(BACKEND, "/menu"), {
        method: 'POST/GET',
        data: payload
    })
        .then((response) => response.data)
        .catch((error) => console.log(error))

}
