import React from 'react';
import './styles.css'
const Navbar = () => {
  return(
    <div className="navbar-container">
      <div className="navbar-line">
        <div className="navbar-box-link">
         <a href="#">о компании</a> 
         <a href="#">производство</a>
         <a href="#">направления деятельности</a>
         <a href="#">услуги</a>
        </div>
      </div>
      <div className="navbar-line">
        <div className="navbar-box-link">
          <a href="#">реализованные проекты</a>
          <a href="#">партнеры</a>
          <a href="#">новости</a>
          <a href="#">контакты</a>
        </div>
      </div>
      <div className="navbar-box-align">
        <i class="fas fa-align-right"></i>
      </div>
      <div className="navbar-box-address">
        (+99871) 203-00-00
        <br/>
        Пон - Суб: 9:00 - 19:00
        <br/>
        г. Ташкент, УЧТЕПИНСКИЙ р-н,
        <br/>
        Катта Хирмонтепа, 1
      </div>
      <div className="navbar-box-lang">
        <a href="#">UZ</a>
        <a href="#">RU</a>
        <a href="#">EN</a>
      </div>

    </div>
  )
}
export default Navbar;