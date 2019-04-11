import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import Header from './components/header'
import styled from 'styled-components'
import Add from './components/Add'
import ToDoList from './components/ToDoList'
import {addTodo} from './actions/addTodo'

class App extends Component {

  state={
    inputVal:''
  }

  addTodo = (val) =>{
    this.setState({inputVal:''})
    this.props.addTodo(val)
  }

  handleInputChange=(e) =>{
    this.setState({inputVal:e.target.value})
  }

  render() {
    return (
        <Container>
           <Header title="Todos"></Header>
           <Add onAddTodo= {val=>this.addTodo(val)} onInputChange={e=>this.handleInputChange(e)} inputVal={this.state.inputVal}/>
           <ToDoList items={this.props.items}/>
        </Container>
    );
  }
}

const Container= styled.div`
    box-shadow: 5px 10px 10px 10px grey;
    width:500px;
    height:500px;
    margin-left:30%
    border-radius:5px;
`

const mapStateToProps = (state) => {
  return {
    items: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (val) => dispatch(addTodo(val))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
