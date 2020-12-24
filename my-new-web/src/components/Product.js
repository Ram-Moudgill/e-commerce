import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <>
      <Card className='p-3 m-3 rounded'>
        <a href={`/product/${product._id}`}>
          <Card.Img variant='top' src={product.image} />
        </a>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          <Rating value={product.rating} text={product.numReviews}></Rating>
        </Card.Text>
        <Card.Text>Only{product.countInStock} items left</Card.Text>
      </Card>
    </>
  )
}

export default Product
