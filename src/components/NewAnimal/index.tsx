import React, { useState, useEffect } from 'react'
import { Container, Wrapper, Title, Label, Input, ContainerInputs, Button, ContainerInput, Select, SelectBreed } from './styled'
import { getItem } from '../../helpers/localStorage'
import { newAnimal, editDog } from '../../services/Dogs'
import { useHistory, useLocation } from "react-router-dom"
import { DogType } from '../../services/types/types'
import { getBreeds } from '../../services/Dogs'

enum TypeDog {
    "Found" = 1
}

export const NewAnimal = () => {
    const [breeds, setBreeds] = useState([])

    const location: any = useLocation()
    const item = location.state && location.state && location.state.item

    const [city, setCity] = useState(item ? item.city : '')
    const [breed, setBreed] = useState(item ? item.breed : '')
    const [type, setType] = useState(item && item.type === TypeDog.Found ? 'Found' : "Lost")
    const [fileUploaded, setFile] = useState(null)

    const history = useHistory()

    const user = getItem('user')

    useEffect(() => {
        let breeds


        async function getBreedsAsync() {
            breeds = await getBreeds()
            setBreeds(breeds)
        }

        getBreedsAsync()
    }, [])


    const getBase64 = (file: any, cb: (file: string | ArrayBuffer | null) => void) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    const handleUploadAnimal = () => {
        let animal: DogType = {
            _id: 0,
            user: {
                _id: user._id,
                email: user.email
            },
            city,
            breed,
            type: type === "Found" ? 1 : 2,
            src: ''
        }
        if (!item?._id) {
            getBase64(fileUploaded, (result: any) => {
                animal.src = result
                newAnimal(animal).then((data) => {
                    if (data) {
                        history.push('/')
                    }
                })
            })
        } else {
            animal._id = item._id
            animal.src = item.src
            editDog(item._id, animal).then((data) => {
                history.push('/my-animals')
            })
        }
    }

    const isDisabled = city === '' || breed === ''
    return (
        <Container>
            <Title>Add a New Animal</Title>
            <Wrapper>
                <ContainerInputs>
                    <ContainerInput>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" value={city} onChange={(e) => setCity(e.target.value)} type="text" />
                    </ContainerInput>
                    <ContainerInput>
                        <Label htmlFor="breed">Breed</Label>
                        <SelectBreed value={breed} onChange={(e) => setBreed(e.target.value)}>
                            {breeds.map((breed: { name: string }, index: number) => (
                                <option key={index}>{breed.name}</option>
                            ))}
                        </SelectBreed>
                    </ContainerInput>
                    <ContainerInput>
                        <Label>Type</Label>
                        <Select name="select" onChange={(e) => setType(e.target.value)}>
                            <option value={1}>Found</option>
                            <option value={2}>Lost</option>
                        </Select>
                    </ContainerInput>
                </ContainerInputs>
                <input type="file" onChange={(event: any) => setFile(event?.target?.files[0] as any)} />
                <Button isDisabled={isDisabled} disabled={isDisabled} onClick={handleUploadAnimal}>Add animal</Button>

            </Wrapper>
        </Container>
    )
}