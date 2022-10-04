import React from 'react'
import CategorySlider from './CategorySlider';
import MainCategory from './MainCategory'

const MainProductSlide = ({ shopList, category, tit, des, bg }) => {
    return (
        <section className='MainProductSlide sec'>
            <h2>BEST PRODUCT</h2>
            <p>피몽쉐만의 베스트 상품을 만나보세요</p>
            <div className="inner">
                <CategorySlider shopList={shopList} category={category} arrow={true} dots={true} />
            </div>
        </section>
    )
}

export default MainProductSlide;