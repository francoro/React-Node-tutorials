import React, { useState } from 'react'
import { Container, Wrapper, Title, Label, Input, ContainerInputs, Button, ContainerInput, Select } from './styled'

export const NewAnimal = () => {
    const [city, setCity] = useState<string>('')
    const [breed, setBreed] = useState<string>('')
    const [fileUploaded, setFile] = useState(null)

    const getBase64 = (file: any, cb: any) => {
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
        let animalBase64 = '';
        getBase64(fileUploaded, (result: any) => {
            animalBase64 = result;

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
                        <Select name="select">
                            <option value={1} selected>Found</option> 
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