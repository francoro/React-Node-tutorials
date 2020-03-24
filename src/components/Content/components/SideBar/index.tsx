import React from 'react'
import { ContainerSideBar } from './styled'
import { Form, Button, Col } from 'react-bootstrap';

type PropsSideBar = {
    city: string
    breed: string 
    type: string
    handleCityValue: (value: string) => void
    handleBreedValue: (value: string) => void
    handleTypeValue: (value: string) => void
    handleSearch: () => void
}

const SideBar: React.FC<PropsSideBar> = ({ city, breed, type, handleSearch, handleCityValue, handleBreedValue, handleTypeValue }) => {
    return (
        <ContainerSideBar>
            <Form noValidate>
                <Form.Group as={Col}>
                    <Form.Label>City</Form.Label>
                    <Form.Control onChange={(e: any) => handleCityValue(e.target.value)} value={city} type="text" placeholder="Enter a city" />
                </Form.Group>
                
                <Form.Group as={Col}>
                    <Form.Label>Breed</Form.Label>
                    <Form.Control as="select" value={breed} onChange={(e: any) => handleBreedValue(e.target.value)}>
                        <option>All</option>
                        <option>Bulldog</option>
                        <option>Golden Retriever</option>
                        <option>Beagle</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Type</Form.Label>
                    <Form.Control as="select" value={type} onChange={(e: any) => handleTypeValue(e.target.value)}>
                        <option>All</option>
                        <option>Lost</option>
                        <option>Found</option>
                    </Form.Control>
                </Form.Group>

                <Button block onClick={() => handleSearch()}>Search</Button>
            </Form>
        </ContainerSideBar>
    )
}

export default SideBar