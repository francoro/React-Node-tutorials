import { Params } from '../components/Content'
const getDogs = async (params: Params) => {
     return await fetch(`http://localhost:8080/dog/${params.type}/${params.city}/${params.breed}`).then(response => response.json())
}

export default getDogs