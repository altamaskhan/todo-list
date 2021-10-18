import React, { Component } from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Plan from './Plan';

 class App extends Component {
   state={
     items:[],
     text:" "
   }
   handleChange = e =>{
     this.setState({text:e.target.value})
   }
   handleAdd = e =>{
     if(this.state.text !==""){
       const items = [...this.state.items, this.state.text];
       this.setState({items: items, text:""});
     }
   }
   handleDelete = id=>{
     console.log("delete",id);
     const Olditems=[...this.state.items]
     const items=Olditems.filter((Element, i)=>{
       return i!==id
     })
     this.setState({items:items})
   }
  render() {
    return (
      <div className="todolist">
         <div className=" container my-5">

<div className="row">
  <div className="col-md-6 mx-auto  ">
    <div className="card  bg-primary shadow p-1">
      <h1 className="text-center text-white">Todo-List</h1>
      <div className="row">
        <div className="col-9 ">
          <input type="text" className="form-control mb-4" placeholder="write your plan" value={this.state.text} onChange={this.handleChange}></input>
        <h4 className="text-center text-white">your items..</h4>
        </div>
        <div className="col-2">
          <button className="btn btn-warning px-3" onClick={this.handleAdd}>Add</button>
        </div>
      {
        this.state.items.map((value, i)=>{
          return <Plan key={i} id={i} value={value} sendData={this.handleDelete}/>
        })
      }
     
      </div>
     
    </div>

  </div>
</div>
</div>
      </div>
    )
  }
}



export default App;
