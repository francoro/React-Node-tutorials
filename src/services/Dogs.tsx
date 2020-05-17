import { Params } from '../components/Content'
import { usePaginatedQuery } from 'react-query'
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

export const newAnimal = async (animal: any) => {
     return await fetch(`http://localhost:8080/dog`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(animal)
     }).then(response => response.json())
}

const getMyAnimalsKey = "getMyAnimalsKey"

export const useMyAnimalsList = (params: any) => {
     return usePaginatedQuery<any, any>([getMyAnimalsKey, params], () => {
       const { user } = params
   
       return fetch(`http://localhost:8080/dog/user/${params.user._id}`).then(response => response.json())
     })
   }