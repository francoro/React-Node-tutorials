import { Params } from '../components/Content'
export const getDogs = async (params: Params) => {
     return await fetch(`http://localhost:8080/dog/${params.type}/${params.city}/${params.breed}`).then(response => response.json())
}

export const getCities = async () => {
     return await fetch(`http://localhost:8080/city`).then(response => response.json())
}