import React from 'react'
import UndrawBooks from '../assets/Undraw_Books.svg'

const Landing = () => {
  return (
   <section id="landing">
     <header>
       <div className="header__container">
        <div className="header__description">
           <h1>New York's Most Awarded Online Library Platform</h1>
           <h2>Find your dream book with <span className="purple">our expansive collection</span></h2>
           <a href="#features">
            <button className="btn ">Browse Books!</button>
           </a> 
        </div>
         <figure className="header__img--wrapper">
          <img src={UndrawBooks} alt="" className="header__img" />
         </figure>
       </div>
     </header>
   </section>
  ) 
}
  
export default Landing  