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

export const Wrapper = styled.div`
    background: #FFF;
    width: 540px;
    max-width: 540px;
    box-shadow: inset 0 -3px 0 rgba(84,94,111,.2);
    padding: 30px;
    border-radius: 15px;
`

export const Title = styled.h3`

`

export const SubMenu = styled.h4`

`

export const Label = styled.label`
    margin: 0;
`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;
`

export const Input = styled.input`
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
    margin: 10px 0px;
`

type ButtonProps = {
    isDisabled: boolean
}

export const Button = styled.button<ButtonProps>`
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
    opacity: ${(props) => props.isDisabled ? 0.5 : 1};
    pointerEvents: ${(props) => props.isDisabled ? "none" : "initial"}
`

export const Select = styled.select`
    width: 15%;
    height: 35px;
    background: white;
    color: gray;
    font-size: 16px;
    border: none;
    outline: none;
    left: -6px;
    position: relative;
    margin-bottom: 15px;
`;