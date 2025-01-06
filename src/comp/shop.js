import React, { useState, useEffect } from 'react'
import './shop.css'
import { AiFillHeart, AiFillEye, AiOutlineClose, AiOutlineArrowUp } from "react-icons/ai";
const Shop = ({shop, Filter, allcatefilter, addtocart}) => {
const [showScroll, setShowScroll] = useState(false);
const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  //Detail page data
  const [detail, setDetail] = useState([]);
  //Toogle product detail
  const detailpage = (product) => 
    {
        setDetail([{product}])
        setShowDetail(true)
    }
    console.log(detail)
  const closeDetail = () => {
    setShowDetail(false);
  };

  return (
    <>
    {
        showDetail &&
        <div className='product_detail'>
            <button className="close_btn" onClick={closeDetail}><AiOutlineClose /></button>
            <div class="container">
                <div class="img_box">
                    <img src="" alt=""></img>
                </div>
            </div>
        </div>
    }
    <div class="shop">
        <h2># shop</h2>
        <p>Home . shop</p>
        <div class="container">
            <div class="left_box">
                <div class="category">
                    <div class="header">
                        <h3>All Categories</h3>
                    </div>
                    <div class="box">
                        <ul>
                            <li onClick={() => allcatefilter ()}># All</li>
                            <li onClick={() => Filter ("laptop")}># laptop</li>
                            <li onClick={() => Filter ("phone")}># phone</li>
                            <li onClick={() => Filter ("watch")}># watch</li>
                            <li onClick={() => Filter ("speaker")}># speaker</li>
                            <li onClick={() => Filter ("headphone")}># headphone</li>
                            <li onClick={() => Filter ("desktop")}> # desktop</li>
                        </ul>
                    </div>
                </div>
                <div class="banner">
                    <div class="img_box">
                        <img src="images/banner3.jpg" alt="shop_side_banner"></img>
                    </div>
                </div>
            </div>
            <div class="right_box">
                <div class="banner">
                    <div class="img_box">
                        <img src="images/banner4.jpg" alt="shop_top_banner"></img>
                    </div>
                </div>
                <div class="product_box">
                    <h2>Shop Products</h2>
                    <div class="product_container">
                        {
                            shop.map((curElm) =>
                            {
                                return(
                                    <>
                                    <div class="box">
                                        <div class="img_box">
                                            <img src={curElm.image} alt="product_image" />
                                            <div class="icon">
                                            <li><AiFillHeart /></li>
                                            <li onClick={() => detailpage (curElm)}><AiFillEye /></li>
                                            </div>
                                        </div>
                                        <div class="detail">
                                            <h3>{curElm.Name}</h3>
                                            <p>Price: ${curElm.price}</p>
                                            <button onClick={() => addtocart(curElm)}>Add To Cart</button>
                                        </div>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="scroll-to-top" onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none' }}>
      <AiOutlineArrowUp />
    </div>
    </>
  )
}

export default Shop