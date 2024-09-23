import back from '../assets/images/backi.png'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { getProduct } from "../store/products/productsSlice"

const Product = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const { product } = useSelector((state) => state.products)
    const [productImg, setProductImg] = useState('')

    useEffect(() => {
    dispatch(getProduct(id))
},[])

useEffect(() => {
if(product?.thumbnail) {
setProductImg(product.thumbnail)
}
},[product])

const changeImg = (img) => {
    setProductImg(img)
}

  return (
    
    <>
{product && (
    
    <div className="item">
        <div className="container"> 
        <div className="item__left">
           <div className="item__left_box">
            {product.images.map((img,i) => (
            <img onClick={()=> {changeImg(img)}} src={img} key={i} alt="" className="item__left_img" />
            ))}
           </div>

            <img src={productImg} alt="" /> 
        </div>
        <div className="item__right">
            <h2 className="item__right_title">{product.title}</h2>
            <p className="item__right_description">{product.description}</p>
        </div>
        </div>
    </div>
)}
    </>
  
  )
}

export default Product