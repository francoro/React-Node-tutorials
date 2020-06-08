import React from 'react'
import { ContainerGallery} from './styled'
import { DogType } from '../../../../services/types/types'
import { ItemGallery } from './components/ItemGallery'

type GalleryProps = {
    data: DogType[]
    type?: string
    isFromMyAnimals?: boolean
    handleDeleteDog?: (id: number) => void
    handleEditDog?: (id: number) => void
}

const Gallery: React.FC<GalleryProps> = ({ data, type, isFromMyAnimals, handleDeleteDog, handleEditDog }) => {
    return (
        <>
            {!isFromMyAnimals && <h3>Showing results for {type !== 'All' ? type && type.toLowerCase() : 'all'} dogs</h3>}
            <ContainerGallery>
                {data && data.map((item: DogType, index: number) => (
                    <ItemGallery 
                        key={index}
                        item={item}
                        isFromMyAnimals={isFromMyAnimals}
                        handleDeleteDog={handleDeleteDog}
                        handleEditDog={handleEditDog}
                    />
                ))}
            </ContainerGallery>
        </>
    )
}

export default Gallery