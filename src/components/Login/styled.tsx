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
    color: #FFF;
    text-shadow: 3px 1px 4px rgba(150, 150, 150, 1);
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

type BackgroundProps = {
    src: string
}

export const Background = styled.div<BackgroundProps>`
    background-image: url(${props => props.src});
    background-size: 2000px 1279px;
    height: 1279px;
    overflow: hidden;
`

export const Label = styled.label`
    color: #FFF;
    text-shadow: 3px 1px 4px rgba(150, 150, 150, 1);
    font-weight: bold;
`