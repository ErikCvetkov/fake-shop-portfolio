import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './product.css'
import { useDispatch } from 'react-redux'
import { addOrder } from '../../features/order/orderSlice'

export default function product(props) {
    const product = props.product
    const dispatch = useDispatch();
    return (
        <Col lg={4} sm={6} className="p-0">
            <div className="product-card">
                <Row className='card-top'>
                    <div className='cart-button' onClick={()=>{dispatch(addOrder(product))}}>
                        <div className='cart-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM272 180H316V224C316 235 324.1 244 336 244C347 244 356 235 356 224V180H400C411 180 420 171 420 160C420 148.1 411 140 400 140H356V96C356 84.95 347 76 336 76C324.1 76 316 84.95 316 96V140H272C260.1 140 252 148.1 252 160C252 171 260.1 180 272 180zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                            </svg>
                        </div>
                    </div>
                    <Col className='item-cover-image'>
                        <div className='card-image' style={{ backgroundImage: `url("${product.image}")` }}></div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row className='product-name'>
                            <Col title={`${product.title}`}>{product.title}</Col>
                        </Row>
                        <Row className='product-price'>
                            <Col>{product.price} $</Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}
