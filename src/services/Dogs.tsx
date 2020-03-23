import { Params } from '../components/Content'
const getDogs = (params: Params) => {
    const dogs = fetch(`http://localhost:8080/dog`).then((data) => {
        return data.json()
    })

    return dogs
}
//${params.type}/${params.city}/${params.breed}
export default getDogs