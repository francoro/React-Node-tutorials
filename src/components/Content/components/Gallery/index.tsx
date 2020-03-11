import React from 'react'
import { ContainerGallery, ItemGallery, Image, Type, Body, Breed, City } from './styled'

const fakeData: DogType[] = [{
    src: "https://staticuestudio.blob.core.windows.net/buhomag/2016/03/17163932/Perros-de-videojuego-Alb%C3%B3ndiga-de-Fallout-4.jpg",
    type: "Lost",
    city: "Los Angeles",
    breed: "German Shepherd"
},{
    src: "https://staticuestudio.blob.core.windows.net/buhomag/2016/03/17163932/Perros-de-videojuego-Alb%C3%B3ndiga-de-Fallout-4.jpg",
    type: "Lost",
    city: "Los Angeles",
    breed: "German Shepherd"
},{
    src: "https://staticuestudio.blob.core.windows.net/buhomag/2016/03/17163932/Perros-de-videojuego-Alb%C3%B3ndiga-de-Fallout-4.jpg",
    type: "Lost",
    city: "Los Angeles",
    breed: "German Shepherd"
},{
    src: "https://staticuestudio.blob.core.windows.net/buhomag/2016/03/17163932/Perros-de-videojuego-Alb%C3%B3ndiga-de-Fallout-4.jpg",
    type: "Lost",
    city: "Los Angeles",
    breed: "German Shepherd"
},{
    src: "https://staticuestudio.blob.core.windows.net/buhomag/2016/03/17163932/Perros-de-videojuego-Alb%C3%B3ndiga-de-Fallout-4.jpg",
    type: "Lost",
    city: "Los Angeles",
    breed: "German Shepherd"
},{
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
        <ContainerGallery>
            {/* TODO: GET DATA FROM BE */}
            {fakeData.map((item: DogType, index: number) => (
                <ItemGallery key={index}>
                    <Image src={item.src} />
                    <Body>
                        <Type>{item.type}</Type>
                        {/* TODO: ADD HEART ICON FULL IN GRAY */}
                        <Breed>{item.breed}</Breed>
                        <City>{item.city}</City>
                    </Body>
                </ItemGallery>
            ))}

        </ContainerGallery>
    )
}

export default Gallery