import React, { useState } from 'react'
import { Container, Wrapper, Title, Label, Input, ContainerInputs, Button, ContainerInput } from './styled'

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

        });
    }

    return (
        //city
        //breed
        //type
        //picture
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
                        <select name="select">
  <option value="value1">Value 1</option> 
  <option value="value2" selected>Value 2</option>
  <option value="value3">Value 3</option>
</select>
                    </ContainerInput>
                </ContainerInputs>
                <input type="file" onChange={(event: any) => setFile(event?.target?.files[0] as any)} />
                <Button onClick={handleUploadAnimal}>Add animal</Button>

            </Wrapper>
        </Container>
    )
}