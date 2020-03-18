import React from 'react'
import { useQuery } from 'react-query'
import { ContainerGallery, ItemGallery, Image, Type, Body, Breed, City, Header, Title } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import getDogs from '../../../../services/Dogs'
import { Params } from '../../../Content'
const fakeData: DogType[] = [{
    src: "https://staticuestudio.blob.core.windows.net/buhomag/2016/03/17163932/Perros-de-videojuego-Alb%C3%B3ndiga-de-Fallout-4.jpg",
    type: "Lost",
    city: "Los Angeles",
    breed: "German Shepherd"
}, {
    src: "https://staticuestudio.blob.core.windows.net/buhomag/2016/03/17163932/Perros-de-videojuego-Alb%C3%B3ndiga-de-Fallout-4.jpg",
    type: "Lost",
    city: "Los Angeles",
    breed: "German Shepherd"
}, {
    src: "https://staticuestudio.blob.core.windows.net/buhomag/2016/03/17163932/Perros-de-videojuego-Alb%C3%B3ndiga-de-Fallout-4.jpg",
    type: "Lost",
    city: "Los Angeles",
    breed: "German Shepherd"
}, {
    src: "https://staticuestudio.blob.core.windows.net/buhomag/2016/03/17163932/Perros-de-videojuego-Alb%C3%B3ndiga-de-Fallout-4.jpg",
    type: "Lost",
    city: "Los Angeles",
    breed: "German Shepherd"
}, {
    src: "https://staticuestudio.blob.core.windows.net/buhomag/2016/03/17163932/Perros-de-videojuego-Alb%C3%B3ndiga-de-Fallout-4.jpg",
    type: "Lost",
    city: "Los Angeles",
    breed: "German Shepherd"
}, {
    src: "https://staticuestudio.blob.core.windows.net/buhomag/2016/03/17163932/Perros-de-videojuego-Alb%C3%B3ndiga-de-Fallout-4.jpg",
    type: "Lost",
    city: "Los Angeles",
    breed: "German Shepherd"
}]

type DogType = {
    src: string
    type: number
    city: string
    breed: string
}

type GalleryProps = {
    params: Params
}

const Gallery: React.FC<GalleryProps> = ({params}) => {
    const { data } = useQuery<any, any>(['allDogs', params], getDogs)

    return (
        <React.Fragment>
            {/* TODO: pass props if it is lost or found */}
            <Title>Showing results of Lost dogs</Title>
            <ContainerGallery>
                {/* TODO: GET DATA FROM BE */}
                {data.map((item: DogType, index: number) => (
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