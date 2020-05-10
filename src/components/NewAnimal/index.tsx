import React, { useState } from 'react'
import { Container, Wrapper, Title, Label, Input, ContainerInputs, Button, ContainerInput, Select } from './styled'
import { useSelector } from 'react-redux'
import { getUser } from '../../store/user/selectors'
import { newAnimal } from '../../services/Dogs'
import { useHistory } from "react-router-dom"
//import { queryCache } from 'react-query'


export const NewAnimal = () => {
    const [city, setCity] = useState<string>('')
    const [breed, setBreed] = useState<string>('')
    const [type, setType] = useState<string>('Found')
    const [fileUploaded, setFile] = useState(null)

    const history = useHistory()
    const user = useSelector(getUser).user
    console.log(user)
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
        getBase64(fileUploaded, (result: string | ArrayBuffer | null) => {
            let animal = {
                user: {
                    _id: user._id,
                    email: user.email
                },
                src: result,
                city,
                breed,
                type
            }
            // todo probar await async
            newAnimal(animal).then((data) => {
                if (data) {
                    //queryCache.removeQueries(dogFetchKey)
                    history.push('/')
                } 
            })
        });
    }

    const isDisabled = city === '' || breed === '' || fileUploaded === null
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