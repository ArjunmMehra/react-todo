import React from 'react'
import styled from 'styled-components'

const Header = (props) =>{
    return (
        <HeaderDiv>{props.title}</HeaderDiv>
    )
}

const HeaderDiv=styled.div`
    background-color: maroon;
    width: 100%;
    height: 50px;
    color:white;
    text-align: center;
    padding-top:20px;
    font-style:bold;
    font-size:30px;
    box-shadow: 2px 2px 2px 2px grey;
`

export default Header