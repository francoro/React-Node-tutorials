import React from 'react'
import { useSelector } from 'react-redux'
import { getUser } from '../../store/user/selectors'
import { Container, Row, Col } from 'react-bootstrap';

export const MyAnimals: React.FC = () => {
    const user = useSelector(getUser)
    console.log("user", user)
    //TODO: add api call to my animals and pass to Gallery

    return (
        <Container>
            <Row>
                <Col lg={9}>
                    
                </Col>
            </Row>
        </Container>
    )
}