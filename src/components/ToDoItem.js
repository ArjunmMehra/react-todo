import React from 'react'
import styled from 'styled-components'
import {removeTodo} from '../actions/removeTodo'
import {connect} from 'react-redux'
import {CustomButtonNegative} from './buttons'

class ToDoItem extends React.Component{
    render(){
        return(
            <div>
            <Items>
                {this.props.item}
            </Items>
            <CustomButtonNegative onClick={()=>{this.props.onRemove(this.props.item)}}>
                X
            </CustomButtonNegative>
            </div>
        )
    }
}

const mapDispatchToProps= (dispatch)=>{
    return {
        onRemove:(val)=> dispatch(removeTodo(val))
    }
}

const Items= styled.div`
    width:85%;
    height:30px;
    margin-left:5px;
    margin-top:5px;
    background-color:pink;
    color:black;
    display:inline-block;
    border-radius:10px;
`




export default connect('',mapDispatchToProps)(ToDoItem)