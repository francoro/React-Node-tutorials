import styled from 'styled-components'

export const NavBar = styled.div`
    padding: 0 25px;
    background: #451771;
    height: 74px;
    align-items: center;
    display: flex;
`

export const Logo = styled.div`
    color: #FFF;
`

export const NavItems = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
`

type ItemProps = {
    isLoginButton?: boolean
}

export const Item = styled.div<ItemProps>`
    padding-left: 25px;
    ${props => props.isLoginButton && `border-left: 1px solid rgba(255,255,255,.1)`};
    a {
        color: #FFF;
        text-decoration: none;
    }
`