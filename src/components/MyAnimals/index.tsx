import React from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import Gallery from '../Content/components/Gallery';
import { deleteDog } from '../../services/Dogs'
import { useMyAnimalsList, getMyAnimalsKey } from '../../services/Dogs'
import { getItem } from '../../helpers/localStorage'
import { ContainerSpinner } from './styled'
import { queryCache } from 'react-query'
import { useHistory } from 'react-router-dom'
export const MyAnimals: React.FC = () => {
    const history = useHistory()

    const user = getItem('user')
    const initialQuery = {
        user: user
    }
    const { resolvedData: data, isFetching } = useMyAnimalsList(initialQuery)

    const handleDeleteDog = (id: number) => {
        deleteDog(id).then(() => {
            queryCache.refetchQueries(getMyAnimalsKey)
        })
    }

    const handleEditDog = (id: number) => {
        history.push({
            pathname: `/new-animal/${id}`,
            state: { id: id }
        })
    }

    return (
        <Container>
            <Row>
                <Col lg={12}>
                    {!isFetching ?
                        <Gallery data={data} isFromMyAnimals handleDeleteDog={handleDeleteDog} handleEditDog={handleEditDog} />
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
