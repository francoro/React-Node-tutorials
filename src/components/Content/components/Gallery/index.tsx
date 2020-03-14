import React from 'react'
import { ContainerGallery, ItemGallery, Image, Type, Body, Breed, City, Header, Title } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
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
    type: string
    city: string
    breed: string
}

const Gallery = () => {
    return (
        <React.Fragment>
            {/* TODO: pass props if it is lost or found */}
            <Title>Showing results of Lost dogs</Title>
            <ContainerGallery>
                {/* TODO: GET DATA FROM BE */}
                {fakeData.map((item: DogType, index: number) => (
                    <ItemGallery key={index}>
                        <Image src={item.src} />
                        <Body>
                            <Header>
                                <Type>Dog {item.type}</Type>
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