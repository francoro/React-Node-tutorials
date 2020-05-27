import styled from 'styled-components'

export const ItemGalleryStyled = styled.div`
    width: 250px;
    max-height: 410px;
    background-color: #FFF;
    margin: 10px;
    box-shadow: 0px 3px 0 rgba(84,94,111,.2);
    border-radius: 15px;
    overflow: hidden;
    perspective: 1px;
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

export const Icons = styled.div`
    float: right;
    svg {
        margin-right: 5px;
    }
`

