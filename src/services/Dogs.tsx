import { Params } from '../components/Content'
export const getDogs = async (params: Params) => {
     return await fetch(`http://localhost:8080/dog/${params.type}/${params.city}/${params.breed}`).then(response => response.json())
}

export const getCities = async () => {
     return await fetch(`http://localhost:8080/city`).then(response => response.json())
}

export const getBreeds = async () => {
     return await fetch(`http://localhost:8080/breed`).then(response => response.json())
}

export const register = async (user: any) => {
     return await fetch(`http://localhost:8080/register`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
     }).then(response => response.json())
}

export const login = async (user: any) => {
     return await fetch(`http://localhost:8080/login`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
     }).then(response => response.json())
}