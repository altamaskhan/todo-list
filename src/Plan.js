import React from 'react' 

function Plan(props) {
    return (
        <div>
           
           <ul>
           <div className="row">
 
           
               <li className="card shadow p-2 col-8 bg-white">{props.value}</li>
           
            <button className="btn btn-danger my-1 col-2 offset-1" 
            onClick={()=>{props.sendData(props.id)}}>X</button>
          </div>
           </ul>

        </div>
    )
}

export default Plan
