import { Params } from '../components/Content'
const getDogs = (params: Params) => {
    return fetch(`http://localhost:8080/${params.type}/${params.city}/${params.breed}`)
}

export default getDogs