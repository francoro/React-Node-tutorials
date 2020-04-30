import styled from 'styled-components'

const NAV_HEIGHT = "74px"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F1F2F5;
    height: calc(100% - ${NAV_HEIGHT});
    flex-direction: column;
`

export const Content = styled.div`
    background: #FFF;
`

export const ContainerInputs = styled.div`

`

export const Title = styled.h3`
    font-size: 35px;
    font-weight: bold;
    color: #545e6f;
`
type Props = {
    id: string
}

export const Input = styled.input<Props>`
    ${props => props.id === "email" && `margin-bottom: 20px;`}
`

export const Button = styled.button`
    width: 150px;
    color: #fff;
    background-color: #007bff;
    border-radius: 4px;
    margin-right: 10px;
    height: 40px;
    border: 1px solid #007bff;
    font-weight: 600;
`

export const LinkSignUp = styled.div`
    text-decoration: underline;
    width: 150px;
    color: #FFF;
    font-weight: bold;
    text-shadow: 3px 1px 4px rgba(150, 150, 150, 1);
    cursor: pointer;
`

export const ContainerButton = styled.div`
    text-align: center;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ErrorMessage = styled.p`
    color: #FFF;
    margin-bottom: 0;
    margin-top: 14px;
    text-shadow: 3px 1px 4px rgba(150, 150, 150, 1);
    font-weight: bold;
`


export const Background = styled.div`
    background-color: #F1F2F5;
    height: calc(100% - ${NAV_HEIGHT});
`

export const Label = styled.label`
    color: #FFF;
    text-shadow: 3px 1px 4px rgba(150, 150, 150, 1);
    font-weight: bold;
`