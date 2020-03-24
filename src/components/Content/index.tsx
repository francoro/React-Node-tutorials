import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from './components/SideBar'
import Gallery from './components/Gallery'

export type Params = {
    type?: number
    city?: string
    breed?: string
}

const Content = () => {
    const [city, setCity] = useState<string>('')
    const [breed, setBreed] = useState<string>('')
    const [type, setType] = useState<string>('')

    const [allParams, setAllParams] = useState<Params>({})

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
        const params: Params = {}

        if (type === "Lost") {
            params.type = 2
        } else if(type === "Found") {
            params.type = 1
        }

        if (city) {
            params.city = city
        }

        if (breed) {
            params.breed = breed
        }
        setAllParams(params)
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
                <Col lg={9} style={{ marginTop: "100px" }}>
                    <Gallery
                        params={allParams}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Content