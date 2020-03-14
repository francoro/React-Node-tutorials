import styled from 'styled-components'

export const ContainerGallery = styled.div`
    width: 100%;
    background-color: #F2F2F2;
    padding-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

export const ItemGallery = styled.div`
    width: 243px;
    height: 357px;
    background-color: #FFF;
    margin-bottom: 20px
`

type ImageProps = {
    src: string
}

export const Image = styled.div<ImageProps>`
    background: url('${props => props.src}');
    height: 243px;
    width: 100%;
    background-size: cover;
    background-position: center;
`

export const Type = styled.p`
    color: #CCC;
    font-weight: bold;
`

export const Body = styled.div`
    background: #FFF;
    padding: 10px;
`

export const Breed = styled.p`
    font-weight: bold;
    margin: 0px
`

export const City = styled.p`
    color: #000
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between; 
`

export const Title = styled.h3`

`