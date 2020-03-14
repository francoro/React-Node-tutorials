import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from './components/SideBar'
import Gallery from './components/Gallery'
const Content = () => {
    const [city, setCity] = useState<string>('')
    const [breed, setBreed] = useState<string>('')
    const [type, setType] = useState<string>('')



    const handleCityValue = (value: string) => {
        setCity(value)
    }

    const handleBreedValue = (value: string) => {
        setBreed(value)
    }

    const handleTypeValue = (value: string) => {
        setType(value)
    }

    const handleSearch = () => {
        console.log(breed)
    }

    return (
        <Container>
            <Row>
                <Col lg={3}>
                    <SideBar
                        city={city}
                        breed={breed}
                        type={type}
                        handleCityValue={(value: string) => handleCityValue(value)}
                        handleBreedValue={(value: string) => handleBreedValue(value)}
                        handleTypeValue={(value: string) => handleTypeValue(value)}
                        handleSearch={handleSearch}
                    />
                </Col>
                <Col lg={9} style={{marginTop: "100px"}}>
                    <Gallery />
                </Col>
            </Row>
        </Container>
    )
}

export default Content