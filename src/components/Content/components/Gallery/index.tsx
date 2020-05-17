import React, { useState, useEffect } from 'react'
import { ContainerGallery, ItemGallery, Image, Type, Body, Breed, City, Header, Title } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { DogType } from '../../../../services/types/types'

type GalleryProps = {
    data: DogType[]
    type?: string
    isFromMyAnimals?: boolean
}

const Gallery: React.FC<GalleryProps> = ({ data, type, isFromMyAnimals }) => {
    return (
        <>
            {!isFromMyAnimals ?
                <Title>Showing results for {type !== 'All' ? type && type.toLowerCase() : 'all'} dogs</Title>
                : <Title>My Animals</Title>}
            <ContainerGallery>
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
                            <p>Owner: {item.user && item.user.email}</p>
                        </Body>
                    </ItemGallery>
                ))}
            </ContainerGallery>
        </>
    )
}

export default Gallery