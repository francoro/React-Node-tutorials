import React, { useState } from 'react'
import { Container, WrapperInfo, Title, SubMenu, Label, Input, ContainerInputs, Button } from './styled'

export const NewAnimal = () => {
    const [city, setCity] = useState<string>('')
    const [breed, setBreed] = useState<string>('')
    const [fileUploaded, setFile] = useState({})
    console.log(fileUploaded)

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
            console.log(animalBase64)
        });
    }

    return (
        //city
        //breed
        //type
        //picture
        <Container>
            <Title>Add a New Animal</Title>
            <WrapperInfo>
                <SubMenu>Info</SubMenu>
                <ContainerInputs>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" value={city} onChange={(e) => setCity(e.target.value)} type="text" />
                    <Label htmlFor="breed">Breed</Label>
                    <Input id="breed" value={breed} onChange={(e) => setBreed(e.target.value)} type="text" />
                    <Label>Type</Label>
                    <ul>
                        <li>All</li>
                        <li>Found</li>
                        <li>Lost</li>
                    </ul>

                    <input type="file" onChange={(event: any) => setFile(event?.target?.files[0] as any)} />
                    <Button onClick={handleUploadAnimal}>Add animal</Button>
                </ContainerInputs>
            </WrapperInfo>
        </Container>
    )
}