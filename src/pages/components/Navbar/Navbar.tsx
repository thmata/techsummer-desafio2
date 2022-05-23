import React from 'react'
import './Navbar.scss'


const Navbar = () => {
  return (
    <div className="Container">
    <div className="Wrapper">
      <div className='Left'>
        <div className="MenuItem">ENTRAR </div>
        <div className="MenuItem">l</div>
        <div className="MenuItem">CADASTRA-SE</div>
      </div>
      <div className='Center'>
        <div className="MenuItemCenter">SAPATOS</div>
        <div className="MenuItemCenter">BOLSAS</div>
        <div className="MenuItemCenter">ACESSÓRIOS</div>
        <div className="MenuItemCenter">OFF</div>
      </div>
      <div className='Right'>
        <div className="SearchContainer">
          <img src={require("./img/search.png")} alt='pesquisa' />
          <input placeholder="Busca" />
        </div>
        <div className="BagContainer">
          <img src={require("./img/bag.png")}/>
          <p>0</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar