import React, { Component } from "react";
import { footerLinks } from "../../data/footerLInks";

class Footer extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="bg-dark text-white m-0 text-center">
                <h1 className="pt-3 m-0">BookShop</h1>
                <ul className="list-unstyled d-flex justify-content-center m-0">
                    {footerLinks.map((link)=>{
                        return(
                            <li key={link.id}><a  className="list-group-item p-3" href={link.href}>{link.title}</a></li>
                        )
                    })}

                </ul>
            </div>

        )
    }
}

export default Footer