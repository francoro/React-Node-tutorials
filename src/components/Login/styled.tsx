import styled from 'styled-components'

export const Container = styled.div`
position: fixed;
top: 50%;
left: 50%;
display: grid;
transform: translate(-50%, -50%);
`

export const Title = styled.h3`
    font-size: 30px;
    font-weight: bold;
`
type Props = {
    id?: string
}

export const Input = styled.input<Props>`
    ${(props => props.id === "email" && `margin-bottom: 20px;`)}
`

export const Button = styled.button<Props>`
    width: 150px;
    color: #fff;
    background-color: ${props => props.id === "signup" ? 'gray' : 'green'};
    border-radius: 4px;
    margin-right: 10px;
    height: 50px;
`

export const ContainerButton = styled.div`
    text-align: center;
    margin-top: 20px;
`