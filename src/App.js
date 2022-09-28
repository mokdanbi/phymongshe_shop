import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './pages/Main';
import List from './shop/List';
import './css/ShopDetail.scss'
import { Route, Routes } from 'react-router';
import Itm from './shop/Itm';
import Cart from './shop/Cart';

const App = () => {
    const [itm, setItm] = useState();
    const [cart, setCart] = useState([
        { id: 1, itm: "iiiitttteeemmmm", price: 1350 }
    ]);
    useEffect(() => {
        const url = 'https://desipossa.github.io/shop_cra/assets/data.json'
        const getProduct = async () => {
            const res = await axios.get(url);
            const shopdata = res.data.slice(50, 140).map(it => {
                return {
                    id: it.id,
                    name: it.name,
                    src: it.image_link,
                    brand: it.brand,
                    cate: it.category,
                    price: it.price * 1450,
                    des: it.description,
                    color: it.product_colors,
                    ca: it.created_at,
                    type: it.type,
                    time: it.updated_at,
                }
            });
            setItm(shopdata);
            console.log(shopdata);
        }
        getProduct();
    }, [])
    return (
        <>
            <Header />
            {
                itm ?
                    <Routes>
                        <Route path='/' element={<Main />}></Route>
                        <Route path='/cart' element={<Cart cart={cart} />}></Route>
                        <Route path='/shopList' element={<List shopList={itm} />}></Route>
                        <Route path='/shopItem/:itm' element={<Itm shopList={itm} cart={cart} setCart={setCart} />}></Route>
                    </Routes>
                    : <div>loading...</div>
            }
            <Footer />
        </>
    )
}

export default App