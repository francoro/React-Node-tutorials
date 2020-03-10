import styled from 'styled-components'

export const ContainerGallery = styled.div`
    width: 100%;
    background-color: #F2F2F2;
    margin-top: 100px;
    padding-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

export const ItemGallery = styled.div`
    width: 243px;
    height: 243px;
    background-color: #FFF;
`

type ImageProps = {
    src: string
}

export const Image = styled.div<ImageProps>`
    background: url('${props => props.src}');
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
`