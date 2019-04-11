import React from 'react'
import ToDoItem from './ToDoItem'
import styled from 'styled-components'

const ToDoList = (props)=> {
        return(
            <ListContainer>
               {props.items.map(val=><ToDoItem key={val} item={val}/>)}
            </ListContainer>
        )
}

const ListContainer= styled.div`
    overflow:auto;
`

export default ToDoList