import React from 'react'
import styled from 'styled-components'
import {CustomButtonPositive} from './buttons'

const Add = (props) =>{
        return (
            <div>
                <CustomInput type="text" value={props.inputVal}  onChange={props.onInputChange} placeholder="Enter Item"/>
                <CustomButtonPositive onClick={()=>{
                        props.inputVal && props.onAddTodo(props.inputVal)
                    }
                    }>Add</CustomButtonPositive>
                {/* <CustomButtonNegative>Cancel</CustomButtonNegative> */}
            </div>
        )
}

const CustomInput= styled.input`
    width:80%;
    height:20px;
    margin-left:10px;
    margin-top:10px;
    border-radius:10px;
    box-shadow:1px 1px 1px 1px grey;
    &:focus{
        outline:none;
    }
`

export default Add

