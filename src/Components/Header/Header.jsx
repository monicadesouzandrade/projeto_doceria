import React from "react";
import styled from "styled-components"
import logomarca from "./logomarca_doceria.png"

const HeaderStyle = styled.header`
    background-color: aquamarine;
    width: 100vw;
    height: 30vh;
`
const Img = styled.img `
    width: 12vw;
`
const Ul = styled.ul `
    list-style: none;
    border: solid black 2px;
    display: flex;
    justify-content: space-between;
    width: 60vw;
    text-shadow: 2px 1px 2px white;
    cursor: pointer;

`
const Li1 = styled.li `
    color: red;
`
const Li2 = styled.li `
    color: blueviolet;
`

const Li3 = styled.li `
    color: pink; 
`

function Header () {
    return (
        <HeaderStyle>
            <Img src={logomarca} alt = "logo de uma doceria" /> 
                <nav>
                    <Ul>
                        <Li1>Início</Li1>
                        <Li2>Unidades</Li2>
                        <Li3>Cardápios</Li3>
                    </Ul>
                </nav>
        </HeaderStyle>
    )
}
export default Header 