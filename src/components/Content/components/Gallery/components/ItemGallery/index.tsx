import React from 'react'
import { Image, Type, Body, Breed, City, Header, ItemGalleryStyled, Icons } from './styled'
import { DogType } from '../../../../../../services/types/types'
import { faHeart, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addFavoriteAction, removeFavoriteAction } from '../../../../../../store/Favorites/actions'
import { useDispatch, useSelector } from 'react-redux'
import { getFavoritesSelector } from '../../../../../../store/Favorites/selectors'
type ItemGalleryProps = {
    isFromMyAnimals?: boolean
    item: DogType
    handleDeleteDog?: (id: number) => void
    handleEditDog?: (item: DogType) => void
}

export const ItemGallery: React.FC<ItemGalleryProps> = ({ item, isFromMyAnimals, handleDeleteDog, handleEditDog }) => {
    const dispatch = useDispatch()

    const favorites = useSelector(getFavoritesSelector)
    const isFavorite = favorites.some((favoriteSaved: number) => favoriteSaved === item._id)


    const addFavorite = () => {
        dispatch(addFavoriteAction(item._id))
    }

    const removeFavorite = () => {
        dispatch(removeFavoriteAction(item._id))
    }

    return (
        <ItemGalleryStyled>
            <Image src={item.src} />
            <Body>
                <Header>
                    <Type>Dog {item.type === 1 ? "Found" : "Lost"}</Type>
                    {isFromMyAnimals &&
                        <Icons>
                            <FontAwesomeIcon onClick={() => handleEditDog && handleEditDog(item)} color={"#000"} icon={faEdit} />
                            <FontAwesomeIcon onClick={() => handleDeleteDog && handleDeleteDog(item._id)} color={"#000"} icon={faTrash} />
                        </Icons>
                    }
                    {!isFromMyAnimals && !isFavorite && <FontAwesomeIcon color={"#F2F2F2"} onClick={addFavorite} icon={faHeart} />}
                    {!isFromMyAnimals && isFavorite && <FontAwesomeIcon color={"red"} onClick={removeFavorite} icon={faHeart} />}

                </Header>

                <Breed>{item.breed}</Breed>
                <City>{item.city}</City>
                <p>Owner: {item.user && item.user.email}</p>
            </Body>
        </ItemGalleryStyled>
    )
}