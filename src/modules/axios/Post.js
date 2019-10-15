import axios from 'axios'
import qs from 'qs'
export default ({url, data}) => {
    return axios.post(url, qs.stringify(data))
}