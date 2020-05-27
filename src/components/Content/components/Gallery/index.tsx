import React from 'react'
import { ContainerGallery, Title } from './styled'
import { DogType } from '../../../../services/types/types'
import { ItemGallery } from './components/ItemGallery'

type GalleryProps = {
    data: DogType[]
    type?: string
    isFromMyAnimals?: boolean
}

const Gallery: React.FC<GalleryProps> = ({ data, type, isFromMyAnimals }) => {
    return (
        <>
            {!isFromMyAnimals && <Title>Showing results for {type !== 'All' ? type && type.toLowerCase() : 'all'} dogs</Title>}
            <ContainerGallery>
                {data && data.map((item: DogType, index: number) => (
                    <ItemGallery key={index} item={item}  isFromMyAnimals />
                ))}
            </ContainerGallery>
        </>
    )
}

export default Gallery