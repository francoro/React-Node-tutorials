import React from 'react'
import Gallery from '../Content/components/Gallery'
import {  useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { getFavoritesSelector } from '../../store/Favorites/selectors'
import { Title } from './styled'
export const Favorites = () => {
    const favorites = useSelector(getFavoritesSelector)
    return (

        <Container>
            <Row>
                <Col lg={12}>
                    <Title>{favorites.length > 0 ? 'Your Favorites' : 'Favorites Empty'}</Title>
                    <Gallery data={favorites} />
                </Col>
            </Row>
        </Container>

    )
}

