import styled from 'styled-components'

export const CustomButtonNegative= styled.button`
    margin-left:2px;
    width:10%;
    height:30px;
    color:white;
    border-radius:10px;
    background-color:red;
    &:focus{
        outline:none
    }
`

export const CustomButtonPositive = styled.button`
    margin-left:10px;
    width:10%;
    height:30px;
    color:white;
    border-radius:10px;
    background-color:green;
    &:focus{
        outline:none;
    }
`