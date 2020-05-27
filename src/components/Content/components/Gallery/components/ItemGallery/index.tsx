import React from 'react'
import { Image, Type, Body, Breed, City, Header, ItemGalleryStyled, Icons } from './styled'
import { DogType } from '../../../../../../services/types/types'
import { faHeart, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type ItemGalleryProps = {
    isFromMyAnimals: boolean
    item: DogType
}

export const ItemGallery: React.FC<ItemGalleryProps> = ({ item, isFromMyAnimals }) => (
    <ItemGalleryStyled>
        <Image src={item.src} />
        <Body>
            <Header>
                <Type>Dog {item.type === 1 ? "Found" : "Lost"}</Type>
                <Icons>
                 <FontAwesomeIcon color={"#000"} icon={faEdit}/>
                 <FontAwesomeIcon color={"#000"} icon={faTrash}/>
                 </Icons>
                {!isFromMyAnimals && <FontAwesomeIcon color={"#F2F2F2"} icon={faHeart} />}
            </Header>

            <Breed>{item.breed}</Breed>
            <City>{item.city}</City>
            <p>Owner: {item.user && item.user.email}</p>
        </Body>
    </ItemGalleryStyled>
)