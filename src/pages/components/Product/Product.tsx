import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProduct } from '../../../context'
import '../Product/Product.scss'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

export const Product = () => {
    let { id } = useParams();
    const { products } = useProduct();
    const product = products.find((p: any) => p.productId == id)
    const [selectImage, setSelectImage] = useState<string | undefined>(product.items[0].images[0].imageUrl)
    const [selectColor, setSelectColor] = useState(product.skuSpecifications[0].values[0].name)
    const [selectSize, setSelectSize] = useState("")
    const [sizee, setSizee] = useState ("")
    /* product.items[0].images[0].imageUrl[0]*/
    function ColorDetection(color: string){
        var Detected: string = ""
        if(color === "Amarelo"){
            Detected = "Yellow"
        } else if(color === "Preto"){
            Detected = "Black"
        } else if (color === "Branco"){
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            Detected = "White"
        }
        return Detected
    }

    function Translate(cor: string){
        var Traduzido = ""
        if(cor === "Yellow"){
            Traduzido = "Amarelo"
        } else if(cor === "Black"){
            Traduzido = "Preto"
        } else if (cor === "White"){
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            Traduzido = "Branco"
        }
        return Traduzido
    }
    return (       
            <div className="product-page">
            <Header/>
            <Navbar/>
            <div className="ContainerWrapper">
                <div className="Scroll">
                    <img src={(require('./img/arrowtop.png'))} alt="" />
                    {product.items[0].images.map((i: { imageUrl: string | undefined; }) => (<img onClick={() => setSelectImage(i.imageUrl) }className="sproduct" src={i.imageUrl} alt="" />))}                   
                    {/* <img className="sproduct" src={product.items[0].images[1].imageUrl} alt="" />
                    <img className="sproduct" src={(require('./img/item13.jpg'))} alt="" /> */}
                    <img src={(require('./img/arrowbottom.png'))} alt="" />
                </div>
                <div className="SelectedImage">
                    <img className="BigImage" src={selectImage} alt="" />
                </div>

                <div className="InfoContainer">
                    <div className="InsideInfoContainer">
                        <div className="HeaderInfo">
                            <h2>{product.productName}</h2>
                            <p>{product.productReference}</p>
                        </div>
                        <div className="PriceInfoContainer">
                            <div className="Price">
                                <p className="LastPrice">R$ {product.priceRange.sellingPrice.highPrice} | </p>
                                <p className="RealPrice">R$ {product.priceRange.sellingPrice.lowPrice}</p>
                            </div>
                            <p className="DividePrice">Ou 5x de R$ {product.priceRange.sellingPrice.highPrice/5}</p>
                        </div>
                            <div className="ColorInfoContainer">
                                <div className="ColorLetter">
                                    <p>Color: <span style={{fontWeight: 'bold'}}>{Translate(selectColor)}</span></p>
                                </div>
                                <div className="ColorSelector">
                                    {product.skuSpecifications[0].values.map((color: any) => (
                                        <>
                                        <div onClick={() => setSelectColor(ColorDetection(color.name))} 
                                        style={{backgroundColor: `${ColorDetection(color.name)}`} } 
                                        className={"Circle"}></div>
                                        </>
                                    ))}
                                </div>
                            </div>
                        <div className="SizeInfoContainer">
                            <div className="SizeLetter">
                                <div>Tamanho: <span style={{fontWeight: "bold"}}>{sizee}</span></div>
                            </div>
                            <p>Guia de Medidas</p>
                        </div>
                        <div className="ChooseSize">
                            {product.skuSpecifications[1].values.map(
                                (size: any) => (<button onClick={() => {setSizee(size.name)}} style={
                                    {background: `${size.name === sizee ? "#de8f75" : "white" }`, 
                                    fontWeight: `${size.name === sizee ? "bold" : "normal"}`, 
                                    color:`${size.name === sizee ? "white" : "black"}` }
                                } className="Size">{size.name}</button>)
                            )}
                        </div>
                        <div className="ButtonContainer">
                            <button className="ButtonBag">ADICIONAR À SACOLA</button>
                        </div>
                        <div className="DescriptionContainer">
                            <p>{product.description}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
