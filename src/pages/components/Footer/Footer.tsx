import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="ContainerT">
      <div className="MainContainer">
        <div className="SocialVtex">
          <div className="Vtexz">
            <div className="SocialMedias">
              <img src={require("./img/face.png")} alt="imagem" />
              <img src={require("./img/insta.png")} alt="imagem" />
              <img src={require("./img/pint.png")}  alt="imagem"/>
            </div>
            <div className="Selos">
              <img src={require("./img/vtex.png")} alt="imagem" />
              <img src={require("./img/selo.png")} alt="imagem" />
            </div>
          </div>
        </div>
        <div className="Institucional">
          <ul>
            <h2>INSTITUCIONAL</h2>
            <li>A marca</li>
            <li>Lojas</li>
            <li>Contato</li>
          </ul>
        </div>
        <div className='Informacoes'>
          <ul>
            <h2>INFORMAÇÕES</h2>
            <li>Formas de pagamento</li>
            <li>Trocas e devoluções</li>
            <li>Cuidados com o produto</li>
          </ul>
        </div>
        <div className='Conheca'>
          <ul>
            <h2>CONHEÇA</h2>
            <li>Franquias e Multimarcas</li>
            <li>Trabalhe com a gente</li>
            <li>Procon-RJ</li>
          </ul>
        </div>
        <div className="ContainerCircle">
          <div className="Circle">
            <h3>Assine nossa news</h3>
            <div className="CircleInput">
              <p>Nome</p>
              <input className="Name" value="Renata" />
              <input className="Email" placeholder="E-mail" />
              <div className="InputButton">
                <button>ENVIAR</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="FinalContainer">
        <div className="FooterText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          molestie massa in nunc condimentum, vel placerat lacus pulvinar.
          Suspendisse vel nisl eu tortor feugiat tempus vel in tortor. Nunc
          semper leo nec tellus gravida faucibus.{" "}
        </div>
        <div className='FooterImage'>
          <img src={(require('./img/logobranca.png'))} alt="img" />
        </div>
      </div>
    </div>
  )
}

export default Footer