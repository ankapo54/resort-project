import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
export default class  extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Complimentary drinks",
                info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, tempore?',
            },
            {
                icon:<FaHiking/>,
                title:"Scenic hiking trails",
                info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, tempore?",
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free shuttle",
                info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, tempore?',
            },
            {
                icon:<FaBeer/>,
                title:"Local breweries",
                info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, tempore?',
            }
        ]
    }
    
    render() {
        return (
            <section className="services">

               <Title title="services"/>
               <div className="services-center">
                   {this.state.services.map((item,index) => {
                       return <article key={index} className="service">
                           <span>{item.icon}</span>
                           <h6>{item.title}</h6>
                           <p>{item.info}</p>
                       </article>

                   })}
               </div>
               
            </section>
        )
    }
}
