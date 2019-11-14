import React, { Component } from "react"
import {Link} from "react-router-dom"
import "./DogList.css"

class DogList extends Component {
   render() {
      return (
         <div className="DogList">
            <h1 className="display-1 text-center my-4">Dog List!</h1>
            
               <div className="row">
                  {this.props.dogs.map(d => (
                     <div className="Dog col-lg-4 text-center" key={d.name}>
                     <img src={d.src} alt={d.name}/>
                     <h3><Link className="underline" to={`/dogs/${d.name}`} href="">{d.name}</Link></h3>
                     </div>
                  ))}
               </div>
            
         </div>
      )
   }
}

export default DogList