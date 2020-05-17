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
font-weight: 400!important;
outline: none;
color: #fff;
border-radius: 46px;
cursor: pointer;
-webkit-transition: -webkit-transform .2s ease-in-out,background .2s ease-in-out;
-webkit-transition: transform .2s ease-in-out,background .2s ease-in-out;
transition: transform .2s ease-in-out,background .2s ease-in-out;
background: #24b373;
box-shadow: inset 0 -3px 0 #1d915d;
height: 42px;
width: 150px;
    &:focus {
        outline: none;
    }
`

export const Select = styled.select`
    width: 90%;
    height: 35px;
    background: white;
    color: gray;
    font-size: 16px;
    position: relative;
    margin-top: 10px;
    margin-bottom: 20px;
    outline: none;
`

export const SelectItem = styled.div`
    display: flex;
    justify-content: center;
`

export const ContainerButton = styled.div`
    text-align: center;
`