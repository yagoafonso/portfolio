import React, { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import  breakpoints  from "../../breakpoints";

export const NavbarContainer = styled.nav`
    width: 100%;
    height: ${(props) => (props.extendNavbar ? "40vh" : "10vh")};
    display:  flex;
    flex-direction: column;
    top: 0;
    position: sticky;
    z-index: 1;
`;

export const LeftContainer = styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
    padding-left: 5%;

    a{
        text-decoration: none;

        color: var(--white);

        font-weight: 400;
        line-height: 24px;

        :hover{
            color: var(--blueviolet-800);
            transition: 0.3s;
        }
    }    
`;
export const RightContainer = styled.div`
    flex: 30%;
    display: flex;
    justify-content: flex-end;
    padding-right: 5%;
`;

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
    height: 10vh;
    align-items: center;
`;

export const NavbarLink = styled(Link)`
    color: white;
    text-decoration: none;
    margin: 10px;
    transition: 0.2s;

    :hover {
        color: var(--blueviolet-800);
    }

    @media (max-width: ${breakpoints.device.tablet}) {
    display: none;
    }
`

export const NavbarLinkExtend = styled(Link)`
    color: white;
    font-size: 1.5rem;
    text-decoration: none;
    margin: 10px;

    :hover {
        color: var(--blueviolet-800);
    }
`;

export const Logo = styled.div`
    color: white;
    font-size: 1.5rem;
    margin: 25px;
    max-width: 180px;
    height: auto;
    color: var(--blueviolet-800);
    white-space: nowrap;
    cursor: pointer;

    :hover {
        color: var(--blueviolet-300);
    }
`;
export const OpensLinksButton = styled.button`
    width: 80px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;

    @media (min-width: ${breakpoints.device.tablet}) {
    display: none;
    }
`;
export const NavbarExtendContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: ${breakpoints.device.tablet}) {
        display: none;
    }
`;
export const ButtonSwitchTheme = styled.div`
    display: flex;
    margin: 10px;

    :hover{
        color: var(--blueviolet-800);
        transition: 0.3s;
        cursor: pointer;
    }
`
