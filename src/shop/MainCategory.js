import React from 'react'

const MainCategory = ({ category }) => {
    const list = 
  return (
        <section className='shopList'>
            <div className='inner'>
                {
                    shopList.map(it => {
                        return (
                            <figure key={it.id}>
                                <Link to={'/shopItem/' + it.id}>
                                    <div className="box">
                                        <img src={it.src} alt="" />
                                    </div>
                                    <div className='name'>{it.name}</div>
                                    <div className='des'>{it.des.substring(0, 100)} ...</div>
                                    <div className='price'><span>{it.price.toLocaleString()}</span> 원</div>
                                </Link>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default MainCategory