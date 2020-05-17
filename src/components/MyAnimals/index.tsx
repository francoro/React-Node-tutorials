import React from 'react'
import { useLocation } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import Gallery from '../Content/components/Gallery';
import queryString from 'query-string'
import { useMyAnimalsList } from '../../services/Dogs'
import { getItem } from '../../helpers/localStorage'

export const MyAnimals: React.FC = () => {
    const user = getItem('user')
    const location = useLocation()
    const initialQuery = {
        user: user
    }
    const query = getQuery(location.search, initialQuery)
    console.log(query)
    const { resolvedData: data, isFetching } = useMyAnimalsList(query)

    console.log("data",data)
    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <Gallery data={data} isFromMyAnimals/>
                </Col>
            </Row>
        </Container>
    )
}

function getQuery(locationSearch: string, initialQuery: any): any {
    return (locationSearch
      ? queryString.parse(locationSearch, { arrayFormat: 'bracket' })
      : initialQuery) as any
  }
  