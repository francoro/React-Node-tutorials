import React, { useState, useEffect } from 'react'
import { Container, Wrapper, Title, Label, Input, ContainerInputs, Button, ContainerInput, Select } from './styled'
import { useSelector } from 'react-redux'
import { getUser } from '../../store/user/selectors'
import { newAnimal, useGetDog, editDog } from '../../services/Dogs'
import { useHistory, useLocation } from "react-router-dom"


export const NewAnimal = () => {
    const location: any = useLocation()
    const idToEdit = location.state && location.state && location.state.id
   
    const { resolvedData: data, isFetching } = useGetDog(idToEdit)

    

    
    const [city, setCity] = useState('')
    const [breed, setBreed] = useState('')
    const [type, setType] = useState('Found')
    const [src, setSrc] = useState('')
    const [fileUploaded, setFile] = useState(null)

    useEffect(() => {
    if(data) {
        setCity(data[0].city)
        setBreed(data[0].breed)
        setType(data[0].type === 1 ? "Found" : "Lost")
    }
    }, [data])


    const history = useHistory()
    const user = useSelector(getUser).user
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
        let animal = {
            _id: idToEdit,
            user: {
                _id: user._id,
                email: user.email
            },
            city,
            breed,
            type,
            src: ''
        }
        if (!idToEdit) {
            getBase64(fileUploaded, (result: any) => {
                animal.src = result
                newAnimal(animal).then((data) => {
                    if (data) {
                        //queryCache.removeQueries(dogFetchKey)
                        history.push('/')
                    }
                })
            })
        } else {
            animal.src = src
            editDog(idToEdit, animal).then((data) => {
                //queryCache.removeQueries(dogFetchKey)
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
                        <Input id="breed" value={breed} onChange={(e) => setBreed(e.target.value)} type="text" />
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