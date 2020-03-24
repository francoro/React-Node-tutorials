import React, { useState, useEffect } from 'react'
import { ContainerGallery, ItemGallery, Image, Type, Body, Breed, City, Header, Title } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import getDogs from '../../../../services/Dogs'
import { Params } from '../../../Content'

type DogType = {
    src: string
    type: number
    city: string
    breed: string
}

type GalleryProps = {
    params: Params
}

const Gallery: React.FC<GalleryProps> = ({ params }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        getDogs(params).then((dogs) => {
            setData(dogs)
        })
    }, [params])


    return (
        <React.Fragment>
            {/* TODO: pass props if it is lost or found */}
            <Title>Showing results for all dogs</Title>
            <ContainerGallery>
                {/* TODO: GET DATA FROM BE */}
                {data && data.map((item: DogType, index: number) => (
                    <ItemGallery key={index}>
                        <Image src={item.src} />
                        <Body>
                            <Header>
                                <Type>Dog {item.type === 1 ? "Found" : "Lost"}</Type>
                                {/* TODO: if it is a favorite dog it will be red */}
                                <FontAwesomeIcon color={"#F2F2F2"} icon={faHeart} />
                            </Header>

                            <Breed>{item.breed}</Breed>
                            <City>{item.city}</City>
                        </Body>
                    </ItemGallery>
                ))}
            </ContainerGallery>
        </React.Fragment>
    )
}

export default Gallery