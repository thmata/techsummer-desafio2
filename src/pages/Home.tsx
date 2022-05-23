import React from 'react';
import { Link } from 'react-router-dom';
import { useProduct } from '../context'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Rack from './components/HomeRack/Rack';
import Navbar from './components/Navbar/Navbar';
import './Home.scss'

interface ite{
    item: any
}

export const Home= () => {
    const { products } = useProduct();
    
    return (
        <div>
            <Header />
            <Navbar/>
            <p className="New">NOVIDADES</p>
            <div className="shelf">
                {products.map((item :ite) => (<Rack item={item}/>))}                   
            </div>
            <Footer />
        </div>
    )
}
