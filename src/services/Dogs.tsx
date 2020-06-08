import { Params } from '../components/Content'
import { usePaginatedQuery } from 'react-query'
import { DogType } from './types/types'
export const getDogs = async (params: Params) => {
     return await fetch(`http://localhost:8080/dog/${params.type}/${params.city}/${params.breed}`).then(response => response.json())
}
const getDogKey = "getDogKey"
export const useGetDog = (id: number) => {
     return usePaginatedQuery<any, any>([getDogKey, id], () => {
          return fetch(`http://localhost:8080/dog/${id}`).then(response => response.json())
     })
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

export const getMyAnimalsKey = "getMyAnimalsKey"

export const useMyAnimalsList = (params: any) => {
     return usePaginatedQuery<any, any>([getMyAnimalsKey, params], () => {
          const { user } = params

          return fetch(`http://localhost:8080/dog/user/${user._id}`).then(response => response.json())
     })
}

export const deleteDog = async (id: number) => {
     return await fetch(`http://localhost:8080/dog/${id}`, {
          method: 'DELETE',
          headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
          }
     }).then(response => response.json())
}

export const editDog = async (id: number, dog: DogType) => {
     return await fetch(`http://localhost:8080/dog/${id}`, {
          method: 'PUT',
          headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
          },
          body: JSON.stringify(dog)
     }).then(response => response.json())
}