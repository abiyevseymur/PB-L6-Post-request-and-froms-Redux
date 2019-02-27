import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar =()=>{
    return(
        <>
         <div className="four wide column">
          <div className="ui vertical fluid tabular menu">
            <NavLink to = "/" exact className="item" activeClassName = "active">
              AddNew
              </NavLink>
            <NavLink to = "/list" className="item" activeClassName = "active">
              List
            </NavLink>
          </div>
        </div>
        </>
    )
}
export default NavBar