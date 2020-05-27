import React from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import Gallery from '../Content/components/Gallery';
import queryString from 'query-string'
import { useMyAnimalsList } from '../../services/Dogs'
import { getItem } from '../../helpers/localStorage'
import { ContainerSpinner } from './styled'

export const MyAnimals: React.FC = () => {
    const user = getItem('user')
    const initialQuery = {
        user: user
    }
    const { resolvedData: data, isFetching } = useMyAnimalsList(initialQuery)

    console.log("data", data)
    return (
        <Container>
            <Row>
                <Col lg={12}>
                    {!isFetching ?
                        <Gallery data={data} isFromMyAnimals />
                        :
                        <ContainerSpinner>
                            <Spinner animation="border" role="status" variant="secondary" />
                        </ContainerSpinner>
                    }

                </Col>
            </Row>
        </Container>
    )
}
