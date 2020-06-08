import React from 'react'
import { Image, Type, Body, Breed, City, Header, ItemGalleryStyled, Icons } from './styled'
import { DogType } from '../../../../../../services/types/types'
import { faHeart, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type ItemGalleryProps = {
    isFromMyAnimals?: boolean
    item: DogType
    handleDeleteDog?: (id: number) => void
    handleEditDog?: (id: number) => void
}

export const ItemGallery: React.FC<ItemGalleryProps> = ({ item, isFromMyAnimals, handleDeleteDog, handleEditDog }) => {

    return (
        <ItemGalleryStyled>
            <Image src={item.src} />
            <Body>
                <Header>
                    <Type>Dog {item.type === 1 ? "Found" : "Lost"}</Type>
                    {isFromMyAnimals &&
                        <Icons>
                            <FontAwesomeIcon onClick={() => handleEditDog && handleEditDog(item._id)} color={"#000"} icon={faEdit} />
                            <FontAwesomeIcon onClick={() => handleDeleteDog && handleDeleteDog(item._id)} color={"#000"} icon={faTrash} />
                        </Icons>
                    }
                    {!isFromMyAnimals && <FontAwesomeIcon color={"#F2F2F2"} icon={faHeart} />}
                </Header>

                <Breed>{item.breed}</Breed>
                <City>{item.city}</City>
                <p>Owner: {item.user && item.user.email}</p>
            </Body>
        </ItemGalleryStyled>
    )
}