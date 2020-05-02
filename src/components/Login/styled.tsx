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
    width: 540px;
    max-width: 540px;
    box-shadow: inset 0 -3px 0 rgba(84,94,111,.2);
    padding: 30px;
    border-radius: 15px;
`

export const Wrapper = styled.div`
    margin-top: -100px;
`

export const ErrorContainer = styled.div`
    border-radius: 5px;
    border-left: 0;
    border-bottom: 3px solid rgba(0,0,0,.15);
    margin: 30px 0;
    background-color: #e2401c;
    position: absolute;
    top: 50px;
    width: 98%;
`

export const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled.h3`
    font-size: 35px;
    font-weight: bold;
    color: #545e6f;
    text-align: center;
    margin-bottom: 30px;
`
type Props = {
    id: string
}

export const Input = styled.input<Props>`
    ${props => props.id === "email" && `margin-bottom: 20px;`}
    -webkit-appearance: none;
    appearance: none;
    border-radius: 5px;
    box-shadow: inset 0 2px 0 rgba(84,94,111,.2);
    font-family: geomanist,system;
    font-weight: 400;
    font-size: 16px;
    color: rgba(84,94,111,.8);
    padding: 9px 14px 5px;
    background: rgba(84,94,111,.04);
    border: none;
    outline: none;
    line-height: 28px;

`

export const Button = styled.button`
    border: none;
    display: inline-block;
    font-size: 16px;
    font-family: geomanist,system;
    font-weight: 400!important;
    outline: none;
    color: #fff;
    border-radius: 46px;
    cursor: pointer;
    transition: transform .2s ease-in-out,background .2s ease-in-out;
    background: #24b373;
    box-shadow: inset 0 -3px 0 #1d915d;
    line-height: 38px;
    height: 42px;
    padding: 0 22px;
    width: auto;

    &:focus {
        outline: none;
    }
`

export const LinkSignUp = styled.div`
    text-decoration: underline;
    color: #24b373;
    font-weight: bold;
    cursor: pointer;
    margin-left: 15px;
`

export const ContainerButton = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
`

export const ErrorMessage = styled.p`
    margin-left: 10px;
    color: #FFF;
    position: relative;
    top: 10px;
`


export const Background = styled.div`
    background-color: #F1F2F5;
    height: calc(100% - ${NAV_HEIGHT});
`

export const Label = styled.label`
    color: #545e6f;
    font-weight: 600;
`