import styled from 'styled-components'

export const ContainerSideBar = styled.div`
    height: 264px;
    background-color: #FFF;;
    margin-top: 100px;
    padding-top: 10px;
    box-shadow: inset 0 -3px 0 rgba(84,94,111,.2);
    border-radius: 15px;
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
    width: 255px;
    &:focus {
        outline: none;
    }
`