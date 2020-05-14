import React, { useState, useEffect } from 'react'
import { ContainerGallery, ItemGallery, Image, Type, Body, Breed, City, Header, Title } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Params } from '../../../Content'
import { DogType } from '../../../../services/types/types'



type GalleryProps = {
    data: DogType[]
}

const Gallery: React.FC<GalleryProps> = ({ data }) => {
    


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
                            <p>Owner: {item.user && item.user.email}</p>
                        </Body>
                    </ItemGallery>
                ))}
            </ContainerGallery>
        </React.Fragment>
    )
}

export default Gallery